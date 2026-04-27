
// AI Tools Logic for Infinity Kit
// Handles communication with Pollinations API and UI updates

const API_ENDPOINT = '/api/askAI'; 

const AITools = {
    async ask(type, payload) {
        try {
            this.setLoading(true);
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ type, ...payload }),
            });

            if (!response.ok) {
                throw new Error('AI request failed. Please try again.');
            }

            const data = await response.json();
            return data.result;
        } catch (error) {
            console.error('AI Error:', error);
            this.showError(error.message);
            return null;
        } finally {
            this.setLoading(false);
        }
    },

    setLoading(isLoading) {
        const overlay = document.getElementById('toolLoadingOverlay') || this.createLoadingOverlay();
        overlay.style.display = isLoading ? 'flex' : 'none';
        
        const buttons = document.querySelectorAll('button');
        buttons.forEach(btn => btn.disabled = isLoading);
    },

    createLoadingOverlay() {
        const overlay = document.createElement('div');
        overlay.id = 'toolLoadingOverlay';
        overlay.className = 'loading-overlay';
        overlay.innerHTML = '<div class="spinner"></div>';
        document.body.appendChild(overlay);
        return overlay;
    },

    showError(message) {
        if (window.showToast) {
            window.showToast(message);
        } else {
            alert(message);
        }
    },

    copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            this.showError('Copied to clipboard! ✨');
        });
    }
};

// Tool-Specific Logic
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    const pageId = path.split('/').pop().replace('.html', '');
    
    console.log('Initializing tool:', pageId);

    if (pageId === 'chatbot') initChatbot();
    else if (pageId === 'text-improver') initTextImprover();
    else if (pageId === 'summarizer') initSummarizer();
    else if (pageId === 'code-helper') initCodeHelper();
    else if (pageId === 'image-generator') initImageGenerator();
    else if (pageId === 'translator') initTranslator();
    else if (pageId === 'voice-assistant') initVoiceAssistant();
    else if (pageId === 'document-checker') initDocumentChecker();
});

function initChatbot() {
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatHistory = document.getElementById('chat-history');
    if (!chatForm) return;

    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const message = chatInput.value.trim();
        if (!message) return;

        appendMessage('user', message);
        chatInput.value = '';

        const response = await AITools.ask('chat', { message });
        if (response) {
            appendMessage('ai', response);
        }
    });

    function appendMessage(role, text) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `chat-message ${role}-message`;
        msgDiv.textContent = text;
        chatHistory.appendChild(msgDiv);
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }
}

function initTextImprover() {
    const improveBtn = document.getElementById('improve-btn');
    const input = document.getElementById('text-input');
    const output = document.getElementById('text-output');
    const copyBtn = document.getElementById('copy-btn');
    if (!improveBtn) return;

    improveBtn.addEventListener('click', async () => {
        const text = input.value.trim();
        if (!text) return;
        const response = await AITools.ask('improve', { text });
        if (response) {
            output.textContent = response;
            if (copyBtn) copyBtn.style.display = 'block';
        }
    });
    if (copyBtn) copyBtn.addEventListener('click', () => AITools.copyToClipboard(output.textContent));
}

function initSummarizer() {
    const summarizeBtn = document.getElementById('summarize-btn');
    const input = document.getElementById('text-input');
    const output = document.getElementById('summary-output');
    if (!summarizeBtn) return;

    summarizeBtn.addEventListener('click', async () => {
        const text = input.value.trim();
        if (!text) return;
        const response = await AITools.ask('summarize', { text });
        if (response) output.textContent = response;
    });
}

function initCodeHelper() {
    const helpBtn = document.getElementById('help-btn');
    const input = document.getElementById('code-input');
    const output = document.getElementById('code-output');
    const typeSelect = document.getElementById('help-type');
    if (!helpBtn) return;

    helpBtn.addEventListener('click', async () => {
        const code = input.value.trim();
        const helpType = typeSelect.value;
        if (!code) return;
        const response = await AITools.ask('code', { code, helpType });
        if (response) output.textContent = response;
    });
}

function initImageGenerator() {
    const generateBtn = document.getElementById('generate-btn');
    const promptInput = document.getElementById('prompt-input');
    const imageResult = document.getElementById('image-result');
    const downloadBtn = document.getElementById('download-btn');
    if (!generateBtn) return;

    generateBtn.addEventListener('click', async () => {
        const prompt = promptInput.value.trim();
        if (!prompt) return;
        const response = await AITools.ask('image', { prompt });
        if (response) {
            imageResult.src = response;
            imageResult.style.display = 'block';
            if (downloadBtn) {
                downloadBtn.style.display = 'block';
                downloadBtn.href = response;
            }
        }
    });
}

function initTranslator() {
    const translateBtn = document.getElementById('translate-btn');
    const input = document.getElementById('text-input');
    const output = document.getElementById('translation-output');
    const langSelect = document.getElementById('target-lang');
    if (!translateBtn) return;

    translateBtn.addEventListener('click', async () => {
        const text = input.value.trim();
        const targetLang = langSelect.value;
        if (!text) return;
        const response = await AITools.ask('translate', { text, targetLang });
        if (response) output.textContent = response;
    });
}

function initVoiceAssistant() {
    const micBtn = document.getElementById('mic-btn');
    const statusText = document.getElementById('status-text');
    const transcriptionDiv = document.getElementById('voice-output');
    const aiAnswerDiv = document.getElementById('ai-answer');
    if (!micBtn) return;

    let recognition;
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onstart = () => {
            statusText.textContent = 'Listening...';
            micBtn.classList.add('recording');
        };

        recognition.onresult = async (event) => {
            const transcript = event.results[0][0].transcript;
            transcriptionDiv.textContent = transcript;
            statusText.textContent = 'Processing...';
            
            const response = await AITools.ask('chat', { message: transcript });
            if (response) {
                aiAnswerDiv.textContent = response;
                statusText.textContent = 'Speaking...';
                speak(response);
            }
        };

        recognition.onerror = () => {
            statusText.textContent = 'Error occurred. Try again.';
            micBtn.classList.remove('recording');
        };

        recognition.onend = () => {
            micBtn.classList.remove('recording');
            if (statusText.textContent === 'Speaking...') {
                // Keep it as speaking
            } else {
                statusText.textContent = 'Click to start speaking';
            }
        };
    }

    micBtn.addEventListener('click', () => {
        if (recognition) {
            recognition.start();
        } else {
            AITools.showError('Voice recognition not supported in this browser.');
        }
    });

    function speak(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.onend = () => {
            statusText.textContent = 'Click to start speaking';
        };
        window.speechSynthesis.speak(utterance);
    }
}

function initDocumentChecker() {
    const analyzeBtn = document.getElementById('analyze-btn');
    const fileInput = document.getElementById('file-input');
    const output = document.getElementById('doc-output');
    if (!analyzeBtn) return;

    analyzeBtn.addEventListener('click', async () => {
        const file = fileInput.files[0];
        if (!file) return AITools.showError('Please select a file first.');

        const reader = new FileReader();
        reader.onload = async (e) => {
            const text = e.target.result;
            const response = await AITools.ask('summarize', { text: text.substring(0, 5000) });
            if (response) output.textContent = response;
        };
        reader.readAsText(file);
    });

    const dropZone = document.getElementById('drop-zone');
    if (dropZone) {
        dropZone.addEventListener('click', () => fileInput.click());
        dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.style.borderColor = '#4a6cf7'; });
        dropZone.addEventListener('dragleave', () => { dropZone.style.borderColor = '#ddd'; });
        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.style.borderColor = '#ddd';
            fileInput.files = e.dataTransfer.files;
        });
    }
}

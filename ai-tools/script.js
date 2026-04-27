
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
    
    if (pageId === 'chatbot') initChatbot();
    else if (pageId === 'text-improver') initTextImprover();
    else if (pageId === 'summarizer') initSummarizer();
    else if (pageId === 'image-generator') initImageGenerator();
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

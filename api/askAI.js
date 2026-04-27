module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { type, message, text, code, helpType, targetLang, prompt } = req.body;

        // 1. Image Generation (Free & No Key) - Already working
        if (type === 'image') {
            const seed = Math.floor(Math.random() * 1000000);
            const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?seed=${seed}&width=1024&height=1024&nologo=true`;
            return res.status(200).json({ result: imageUrl });
        }

        // 2. Text Generation (Using Direct Gemini REST API)
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return res.status(500).json({ error: 'Missing GEMINI_API_KEY. Please set it in Vercel Settings.' });
        }

        let systemPrompt = "You are a helpful assistant part of Infinity Kit.";
        let userPrompt = "";

        switch (type) {
            case 'chat': userPrompt = message; break;
            case 'improve': systemPrompt = "Improve this text:"; userPrompt = text; break;
            case 'summarize': systemPrompt = "Summarize this text:"; userPrompt = text; break;
            case 'code': systemPrompt = "Helper for code:"; userPrompt = code; break;
            case 'translate': systemPrompt = `Translate to ${targetLang}:`; userPrompt = text; break;
            default: return res.status(400).json({ error: 'Invalid type' });
        }

        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
        
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: `${systemPrompt}\n\n${userPrompt}` }]
                }]
            })
        });

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error.message || 'Gemini API Error');
        }

        if (data.candidates && data.candidates[0] && data.candidates[0].content) {
            const resultText = data.candidates[0].content.parts[0].text;
            return res.status(200).json({ result: resultText });
        } else {
            throw new Error('No response from Gemini. Check your API Key or Quota.');
        }

    } catch (error) {
        console.error('Final Error:', error);
        return res.status(500).json({ error: error.message });
    }
};

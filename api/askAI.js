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

        // 1. IMAGE GENERATION (High Quality via Pollinations)
        if (type === 'image') {
            const seed = Math.floor(Math.random() * 1000000);
            const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?seed=${seed}&width=1024&height=1024&nologo=true&enhance=true`;
            return res.status(200).json({ result: imageUrl });
        }

        // 2. TEXT GENERATION (Advanced System Prompts for "Impressive" Results)
        let systemPrompt = "You are Infinity AI, a premium and highly intelligent assistant. Provide detailed, helpful, and professional answers.";
        let userPrompt = "";

        switch (type) {
            case 'chat': 
                systemPrompt = "You are Infinity AI, a brilliant and friendly assistant. Use emojis where appropriate. Be concise but very smart.";
                userPrompt = message; 
                break;
            case 'improve': 
                systemPrompt = "You are a world-class editor. Rewrite the following text to make it sound professional, persuasive, and elegant. Keep the meaning but elevate the vocabulary.";
                userPrompt = text; 
                break;
            case 'summarize': 
                systemPrompt = "You are an expert at information density. Summarize the text using clear bullet points. Include a 'Key Takeaway' at the end.";
                userPrompt = text; 
                break;
            case 'code': 
                if (helpType === 'explain') {
                    systemPrompt = "You are a senior software engineer. Explain this code line-by-line so even a beginner can understand, but include technical insights.";
                } else if (helpType === 'fix') {
                    systemPrompt = "You are a senior debugger. Identify the bugs in this code, fix them, and explain why they happened.";
                } else {
                    systemPrompt = "You are a coding architect. Optimize or refactor this code for better performance and readability.";
                }
                userPrompt = code; 
                break;
            case 'translate': 
                systemPrompt = `You are a professional translator. Translate the text into ${targetLang} perfectly, preserving the tone and cultural context.`;
                userPrompt = text; 
                break;
            default: 
                return res.status(400).json({ error: 'Invalid type' });
        }

        // Call Pollinations Text API with the new System Prompts
        const apiUrl = `https://text.pollinations.ai/${encodeURIComponent(userPrompt)}?system=${encodeURIComponent(systemPrompt)}&model=openai`;
        
        const response = await fetch(apiUrl);
        const resultText = await response.text();

        if (resultText) {
            return res.status(200).json({ result: resultText });
        } else {
            throw new Error('AI was unable to generate a response.');
        }

    } catch (error) {
        console.error('AI Error:', error);
        return res.status(500).json({ error: error.message });
    }
};

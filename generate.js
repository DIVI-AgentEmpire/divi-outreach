export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { coreOffer, industry } = req.body;
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'Server configuration error: API key missing.' });
  }

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: "You are a world-class B2B copywriting expert. Take this core offer and rewrite it into a highly personalized, short, 3-sentence cold email specifically targeting the psychological pain points of the provided industry niche. Do not use corporate jargon. Make it sound human."
          },
          {
            role: "user",
            content: `Core Offer: ${coreOffer} Target Industry: ${industry}`
          }
        ]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error('Backend error:', error);
    return res.status(500).json({ error: 'Failed to communicate with Groq API' });
  }
}

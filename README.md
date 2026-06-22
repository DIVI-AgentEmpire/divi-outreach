# DIVI OUTREACH - AI Industry Outreach Platform

This is a secure, Vercel-ready application that generates personalized cold emails for different industries using the Groq Llama 3.3 model.

## Features
- **Secure Backend**: API keys are handled via Vercel environment variables.
- **Modern UI**: Tailwind CSS dark theme.
- **Multi-Industry Support**: Generate emails for Gyms, Real Estate, Startups, and more.

## Deployment

This repository is optimized for Vercel.

1. **Environment Variables**:
   In your Vercel project settings, add:
   - `GROQ_API_KEY`: Your Groq API key.

2. **Auto-Deploy**:
   Any push to the `main` branch will trigger an automatic deployment.

## Development
The frontend is a single-page application (`index.html`) that communicates with a Node.js serverless function (`api/generate.js`).

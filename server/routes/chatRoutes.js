import { Router, json } from "express";
import { config } from "dotenv";
import OpenAI from "openai";

config();

const router = Router();
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

router.use(json()); // Add middleware to parse JSON request bodies

router.post("/chat", async (req, res) => {
    const { prompt } = req.body;

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo-0125",
            messages: [{ role: "user", content: prompt }],
            temperature: 1,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });

        // Check if response.data is defined and contains choices
        if (response.choices && response.choices.length > 0) {
            res.json({message: response.choices[0].message.content});
        } else {
            // console.log(response.choices[0].message);
            throw new Error('Invalid response from OpenAI API: no choices');
        }
    } catch (err) {
        console.error('Error processing chat request:', err);
        res.status(500).send('Error processing chat request. Please try again later.');
    }
});


export default router;

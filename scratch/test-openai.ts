import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function testOpenAI() {
  console.log("Testing OpenAI API key...");
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: "Say hello." }],
    });
    console.log("Success! Response:", response.choices[0].message.content);
  } catch (error: any) {
    console.error("OpenAI API Error:");
    console.error("Status:", error.status);
    console.error("Message:", error.message);
    console.error("Code:", error.code);
    console.error("Type:", error.type);
  }
}

testOpenAI();

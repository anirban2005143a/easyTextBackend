
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const gemini_api_key = 'AIzaSyBPbQGJEBV0awdJ-2zHbIVRA4FH4iWMvM4'
const genAI = new GoogleGenerativeAI(gemini_api_key);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction:  "Your task is to describe the role of a job based on the information provided by the user. The user will supply details about their job, and you should generate a clear and comprehensive description of the role. Ensure the description covers the main responsibilities, key tasks, and essential skills required for the job, providing an accurate and complete overview.",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};


function stripMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/__(.*?)__/g, '$1') // Remove underline
    .replace(/\*(.*?)\*/g, '$1') // Remove italics
    .replace(/_(.*?)_/g, '$1') // Remove italics
    .replace(/`(.*?)`/g, '$1') // Remove inline code
    .replace(/~~(.*?)~~/g, '$1'); // Remove strikethrough
}

async function pCaptionRun(prompt, previousChats) {
  const chatSession = model.startChat({
    generationConfig,
  });

  //here i am  sending  previous chats to the model
  for (const chat of previousChats) {
    await chatSession.sendMessage(chat.text);
  }

  const result = await chatSession.sendMessage(prompt);
  const plainText = stripMarkdown(result.response.text());
  console.log(plainText);
  return plainText;
}

export default pCaptionRun;
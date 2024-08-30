
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const gemini_api_key = 'AIzaSyAlfuCgeoWoaAweXP4ceB1-nj5KUDwbHq4'
const genAI = new GoogleGenerativeAI(gemini_api_key);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction:  "you are a friendly ai chat bot ",
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

async function blogTitleRun(prompt, previousChats) {
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

export default blogTitleRun;
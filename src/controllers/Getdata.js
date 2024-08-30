import { GoogleGenerativeAI } from "@google/generative-ai";
import asynchandler from "../utility/asynchandler.js";
import ApiResponse from "../utility/Apiresponse.js";
import { GoogleAIFileManager } from "@google/generative-ai/server";

import blogTitleRun from "../gemini/blogTitle.js";
import blogSummaryRun from "../gemini/blogSummary.js";
import blogResultRun from "../gemini/blogResult.js";

import convertToParaRun from "../gemini/convertToPara.js";
import jobRoleRun from "../gemini/jobRole.js";
import liPostRun from "../gemini/liPost.js";
import liProfileViewRun from "../gemini/liProfileView.js";
import pCaptionRun from "../gemini/pCaption.js";
import promotionalDataRun from "../gemini/promotionalData.js";
import utubeVedioRun from "../gemini/utubeVedio.js";
import utubeVedioTitleRun from "../gemini/utubeVediotitle.js";

import blogTitleChatHistory from "../models/blogTitleChatHistory.js";

import blogSummaryChatHistory from "../models/blogSummaryChatHistory.js";

import blogResultChatHistory from "../models/blogResultChatHistory.js";
import convertToParaChatHistory from "../models/convertToParaChatHistory.js";
import jobRoleChatHistory from "../models/jobRoleChatHistory.js";
import liPostChatHistory from "../models/lipostChatHistory.js";
import liProfileViewhatHistory from "../models/liProfileViewChatHistory.js";
import pCaptionChatHistory from "../models/pCaptioChatHistory.js";
import promotionalDataChatHistory from "../models/promotionalDataChatHistory.js";
import utubeVedioChatHistory from "../models/utubeVedioChatHistory.js";
import utubeVedioTitleChatHistory from "../models/utubeVedioTitleChatHistory.js";

const BLogtitle = asynchandler(async (req, res) => {
  try {
    const { userId, prompt } = req.body;
    const chatHistory = await blogTitleChatHistory.findOne({ userId });
    const previousChats = chatHistory
      ? chatHistory.chats.flatMap((chat) => [
          { role: "user", text: chat.prompt },
          { role: "model", text: chat.response },
        ])
      : [];

    const response = await blogTitleRun(prompt, previousChats);

    if (chatHistory) {
      chatHistory.chats.push({ prompt, response });
      await chatHistory.save();
    } else {
      const newChatHistory = new blogTitleChatHistory({
        userId,
        chats: [{ prompt, response }],
      });
      await newChatHistory.save();
    }

    res.json({
      data: response,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `An error occurred while generating the response. ${error}` });
  }
});

const BLogsummary = asynchandler(async (req, res) => {
  try {
    const { userId, prompt } = req.body;

    const chatHistory = await blogSummaryChatHistory.findOne({ userId });
    const previousChats = chatHistory
      ? chatHistory.chats.flatMap((chat) => [
          { role: "user", text: chat.prompt },
          { role: "model", text: chat.response },
        ])
      : [];

    const response = await blogSummaryRun(prompt, previousChats);

    if (chatHistory) {
      chatHistory.chats.push({ prompt, response });
      await chatHistory.save();
    } else {
      const newChatHistory = new blogSummaryChatHistory({
        userId,
        chats: [{ prompt, response }],
      });
      await newChatHistory.save();
    }

    res.json({
      data: response,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `An error occurred while generating the response. ${error}` });
  }
});
const Blogresult = asynchandler(async (req, res) => {
  try {
    const { userId, prompt } = req.body;

    const chatHistory = await blogResultChatHistory.findOne({ userId });
    const previousChats = chatHistory
      ? chatHistory.chats.flatMap((chat) => [
          { role: "user", text: chat.prompt },
          { role: "model", text: chat.response },
        ])
      : [];

    const response = await blogResultRun(prompt, previousChats);

    if (chatHistory) {
      chatHistory.chats.push({ prompt, response });
      await chatHistory.save();
    } else {
      const newChatHistory = new blogResultChatHistory({
        userId,
        chats: [{ prompt, response }],
      });
      await newChatHistory.save();
    }

    res.json({
      data: response,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `An error occurred while generating the response. ${error}` });
  }
});
const converttopara = asynchandler(async (req, res) => {
  try {
    const { userId, prompt } = req.body;

    const chatHistory = await convertToParaChatHistory.findOne({ userId });
    const previousChats = chatHistory
      ? chatHistory.chats.flatMap((chat) => [
          { role: "user", text: chat.prompt },
          { role: "model", text: chat.response },
        ])
      : [];

    const response = await convertToParaRun(prompt, previousChats);

    if (chatHistory) {
      chatHistory.chats.push({ prompt, response });
      await chatHistory.save();
    } else {
      const newChatHistory = new convertToParaChatHistory({
        userId,
        chats: [{ prompt, response }],
      });
      await newChatHistory.save();
    }

    res.json({
      data: response,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `An error occurred while generating the response. ${error}` });
  }
});

const promotionaldata = asynchandler(async (req, res) => {
  try {
    const { userId, prompt } = req.body;

    const chatHistory = await promotionalDataChatHistory.findOne({ userId });
    const previousChats = chatHistory
      ? chatHistory.chats.flatMap((chat) => [
          { role: "user", text: chat.prompt },
          { role: "model", text: chat.response },
        ])
      : [];

    const response = await promotionalDataRun(prompt, previousChats);

    if (chatHistory) {
      chatHistory.chats.push({ prompt, response });
      await chatHistory.save();
    } else {
      const newChatHistory = new promotionalDataChatHistory({
        userId,
        chats: [{ prompt, response }],
      });
      await newChatHistory.save();
    }

    res.json({
      data: response,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `An error occurred while generating the response. ${error}` });
  }
});

const utubevuddes = asynchandler(async (req, res) => {
  try {
    const { userId, prompt } = req.body;

    const chatHistory = await utubeVedioChatHistory.findOne({ userId });
    const previousChats = chatHistory
      ? chatHistory.chats.flatMap((chat) => [
          { role: "user", text: chat.prompt },
          { role: "model", text: chat.response },
        ])
      : [];

    const response = await utubeVedioRun(prompt, previousChats);

    if (chatHistory) {
      chatHistory.chats.push({ prompt, response });
      await chatHistory.save();
    } else {
      const newChatHistory = new utubeVedioChatHistory({
        userId,
        chats: [{ prompt, response }],
      });
      await newChatHistory.save();
    }

    res.json({
      data: response,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `An error occurred while generating the response. ${error}` });
  }
});

const utubevuditle = asynchandler(async (req, res) => {
  try {
    const { userId, prompt } = req.body;

    const chatHistory = await utubeVedioTitleChatHistory.findOne({ userId });
    const previousChats = chatHistory
      ? chatHistory.chats.flatMap((chat) => [
          { role: "user", text: chat.prompt },
          { role: "model", text: chat.response },
        ])
      : [];

    const response = await utubeVedioTitleRun(prompt, previousChats);

    if (chatHistory) {
      chatHistory.chats.push({ prompt, response });
      await chatHistory.save();
    } else {
      const newChatHistory = new utubeVedioTitleChatHistory({
        userId,
        chats: [{ prompt, response }],
      });
      await newChatHistory.save();
    }

    res.json({
      data: response,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `An error occurred while generating the response. ${error}` });
  }
});

const jobrole = asynchandler(async (req, res) => {
  try {
    const { userId, prompt } = req.body;

    const chatHistory = await jobRoleChatHistory.findOne({ userId });
    const previousChats = chatHistory
      ? chatHistory.chats.flatMap((chat) => [
          { role: "user", text: chat.prompt },
          { role: "model", text: chat.response },
        ])
      : [];

    const response = await jobRoleRun(prompt, previousChats);

    if (chatHistory) {
      chatHistory.chats.push({ prompt, response });
      await chatHistory.save();
    } else {
      const newChatHistory = new jobRoleChatHistory({
        userId,
        chats: [{ prompt, response }],
      });
      await newChatHistory.save();
    }

    res.json({
      data: response,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `An error occurred while generating the response. ${error}` });
  }
});

const pcaption = asynchandler(async (req, res) => {
  try {
    const { userId, prompt } = req.body;

    const chatHistory = await pCaptionChatHistory.findOne({ userId });
    const previousChats = chatHistory
      ? chatHistory.chats.flatMap((chat) => [
          { role: "user", text: chat.prompt },
          { role: "model", text: chat.response },
        ])
      : [];

    const response = await pCaptionRun(prompt, previousChats);

    if (chatHistory) {
      chatHistory.chats.push({ prompt, response });
      await chatHistory.save();
    } else {
      const newChatHistory = new pCaptionChatHistory({
        userId,
        chats: [{ prompt, response }],
      });
      await newChatHistory.save();
    }

    res.json({
      data: response,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `An error occurred while generating the response. ${error}` });
  }
});
const lipost = asynchandler(async (req, res) => {
  try {
    const { userId, prompt } = req.body;

    const chatHistory = await liPostChatHistory.findOne({ userId });
    const previousChats = chatHistory
      ? chatHistory.chats.flatMap((chat) => [
          { role: "user", text: chat.prompt },
          { role: "model", text: chat.response },
        ])
      : [];

    const response = await liPostRun(prompt, previousChats);

    if (chatHistory) {
      chatHistory.chats.push({ prompt, response });
      await chatHistory.save();
    } else {
      const newChatHistory = new liPostChatHistory({
        userId,
        chats: [{ prompt, response }],
      });
      await newChatHistory.save();
    }

    res.json({
      data: response,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `An error occurred while generating the response. ${error}` });
  }
});

const liprofileview = asynchandler(async (req, res) => {
  try {
    const { userId, prompt } = req.body;

    const chatHistory = await liProfileViewhatHistory.findOne({ userId });
    const previousChats = chatHistory
      ? chatHistory.chats.flatMap((chat) => [
          { role: "user", text: chat.prompt },
          { role: "model", text: chat.response },
        ])
      : [];

    const response = await liProfileViewRun(prompt, previousChats);

    if (chatHistory) {
      chatHistory.chats.push({ prompt, response });
      await chatHistory.save();
    } else {
      const newChatHistory = new liProfileViewhatHistory({
        userId,
        chats: [{ prompt, response }],
      });
      await newChatHistory.save();
    }

    res.json({
      data: response,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `An error occurred while generating the response. ${error}` });
  }
});

const imagetotext = asynchandler(async (req, res) => {
  try {
    console.log("rwjkvb");
    if (!req.files || !req.files.image || req.files.image.length === 0) {
      return res.status(404).json({ message: "Image is required" });
    }
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro",
      systemInstruction:
        "Your task is to analyze the provided image and generate a textual description of its content. When a user provides an image, you should:Image Handling: Receive and process the image file. Ensure the image is correctly loaded and accessible for analysis.Image Analysis: Use image processing techniques or a pre-trained model to analyze the content of the image. This may involve recognizing objects, text, or other elements within the image.Generate Textual Description: Convert the findings from the image analysis into a coherent and descriptive text. The description should accurately represent the content of the image, including any identifiable objects, scenes, or text.Return Results: Provide the generated textual description in the response to the user. Ensure the description is clear, concise, and relevant to the image content",
    });

    const imageFile = req.files.image[0];
    const imagePath = imageFile.path;
    const imageName = imageFile.originalname;
    const mimeType = imageFile.mimetype;
    const fileManager = new GoogleAIFileManager(process.env.API_KEY);
    const uploadResponse = await fileManager.uploadFile(imagePath, {
      mimeType: mimeType,
      displayName: imageName,
    });
    const result = await model.generateContent([
      {
        fileData: {
          mimeType: uploadResponse.file.mimeType,
          fileUri: uploadResponse.file.uri,
        },
      },
      { text: "Describe all thing about this image in text" },
    ]);

    console.log(
      `Uploaded file ${uploadResponse.file.displayName} as: ${uploadResponse.file.uri}`
    );
    const ans = `${result.response.text()}`;

    return res
      .status(200)
      .json(new ApiResponse(200, ans, "Image text is coming"));
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: `Having some error: ${error.message}`,
    });
  }
});

const changetone = asynchandler(async (req, res) => {
  try {
    const { userId, prompt } = req.body;
   

    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction:
        "Your task is to transform a given message into various tones based on user input. When a user provides a message and specifies a desired tone, such as 'angry,' 'smooth,' or 'merciful,' you should analyze the original message and adjust its tone accordingly. For an 'angry' tone, use strong and forceful language to convey frustration or urgency. For a 'smooth' tone, employ polite and reassuring language with a gentle flow. For a 'merciful' tone, incorporate compassionate and understanding language, focusing on empathy and forgiveness. Ensure that the modified message maintains its core meaning while aligning with the requested tone and provide the adapted message in your response.",
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    res.status(200).json(new ApiResponse(200, text, "Getting successfully"));
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: `Having some error ${error}`,
    });
  }
});
export {
  BLogtitle,
  BLogsummary,
  Blogresult,
  converttopara,
  promotionaldata,
  utubevuddes,
  utubevuditle,
  jobrole,
  pcaption,
  lipost,
  liprofileview,
  imagetotext,
  changetone,
};

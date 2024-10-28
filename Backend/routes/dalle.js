// import express from "express";
// import * as dotenv from "dotenv";
// import OpenAI from "openai";

// dotenv.config();

// const openai = new OpenAI({
//   apiKey: process.env.Open_AI_Key,
// });

// const router = express.Router();

// // Example route for DALL-E image generation
// router.route("/").get((req, res) => {
//   res.status(200).json({ message: "Hello From Dalle" });
// });

// router.route("/").post(async (req, res) => {
//   try {
//     const { prompt } = req.body;
//     // const aiResponse = await openai.createImage({
//     //   prompt,
//     //   n: 1,
//     //   size: "512x512",
//     //   response_format: "b64_json",
//     // });

//     const aiResponse = await openai.images.generate({
//       prompt,
//       n: 1,
//       size: "512x512",
//       response_format: "b64_json",
//    });
   
//     // const image = aiResponse.data.data[0].b64_json;
//     const image = aiResponse.data[0].b64_json; // Adjust if necessary based on actual response structure

//     res.status(200).json({
//       photo: image,
//     });
//   } catch (error) {
//     console.log(error);
//     res
//       .status(500)
//       .send(error?.response.data.error.message || "Something went wrong!");
//   }
// });

// export default router;

//New Version Solution=========================

import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.Open_AI_Key,
});

const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello From Dalle" });
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    const aiResponse = await openai.images.generate({
      prompt,
      n: 1,
      size: "512x512",
      response_format: "b64_json",
    });
    const image = aiResponse.data[0].b64_json;  // Check this line if accessing data fails
    res.status(200).json({ photo: image });
  } catch (error) {
    console.log(error);
    res.status(500).send(error?.response?.data?.error?.message || "Something went wrong!");
  }
});



export default router;

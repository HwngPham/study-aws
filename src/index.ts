import type { Handler } from "aws-lambda";
import { talkBullshit } from "./libs/wordGenerator";

export const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      function: "ping",
      message: talkBullshit(),
    }),
  };
};

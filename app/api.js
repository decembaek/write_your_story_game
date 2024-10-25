import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const callOpenAIGpt4oMini = async ({ messages, response_format }) => {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: messages,
    response_format: response_format,
  });

  console.log(completion);

  return completion.choices[0].message.content;
};

export const testCallOpenAIGpt4oMini = async () => {
  const messages = [
    { role: "system", content: "You extract email addresses into JSON data." },
    {
      role: "user",
      content: "Feeling stuck? Send a message to help@mycompany.com.",
    },
  ];
  const response_format = {
    type: "json_schema",
    json_schema: {
      name: "email_schema",
      schema: {
        type: "object",
        properties: {
          email: {
            description: "The email address that appears in the input",
            type: "string",
          },
        },
        additionalProperties: false,
      },
    },
  };
  const completion = await callOpenAIGpt4oMini({ messages, response_format });
  console.log(completion);
};

// const completion = await openai.chat.completions.create({
//     model: "gpt-4o-2024-08-06",
//     messages: [
//       {
//         role: "system",
//         content: "You extract email addresses into JSON data.",
//       },
//       {
//         role: "user",
//         content: "Feeling stuck? Send a message to help@mycompany.com.",
//       },
//     ],
//     response_format: {
//       type: "json_schema",
//       json_schema: {
//         name: "email_schema",
//         schema: {
//           type: "object",
//           properties: {
//             email: {
//               description: "The email address that appears in the input",
//               type: "string",
//             },
//           },
//           additionalProperties: false,
//         },
//       },
//     },
//   });
// };
// console.log(completion.choices[0].message.content);

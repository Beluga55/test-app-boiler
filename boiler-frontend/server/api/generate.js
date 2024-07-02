import { OpenAI } from "openai";

const runtimeConfig = useRuntimeConfig();
const { OPENAI_API_KEY } = runtimeConfig;

if (!OPENAI_API_KEY) {
  console.log("No OpenAI API key found. Please set the OPENAI_API_KEY environment variable.");
}

const openai = new OpenAI({ apiKey: OPENAI_API_KEY});

async function getPromptResponse(instruction, prompt, otherParams) {
  const { model, temperature, max_tokens, top_p, frequency_penalty, presence_penalty, stop, response_format, messages } = otherParams;

  console.log(prompt, instruction, '...')

  const completion = await openai.chat.completions.create({
    model: model || "gpt-4o",
    messages: [
      {"role": "system", "content": instruction},
      ...messages || [],
      {"role": "user", "content": prompt},
    ],
    response_format,
    temperature: 0.2,
    max_tokens,
    top_p,
    frequency_penalty,
    presence_penalty,
    stop,
  });
  return completion.choices[0].message.content;
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { instruction, prompt, otherParams } = body;

  const response = await getPromptResponse(instruction, prompt, otherParams);

  return response;
});
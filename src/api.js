import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${API_KEY}`,
};

console.log("API URL:", API_URL);

export const chatGPT = async (inputText) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        prompt: inputText,
        max_tokens: 50,
        n: 1,
        stop: null,
        temperature: 0.5,
      },
      {
        headers: headers,
      }
    );
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("Unexpected API response:", error);
    return "Error: Unable to communicate with the API.";
  }
};

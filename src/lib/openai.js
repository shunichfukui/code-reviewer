import axios from 'axios';

class OpenAiClient {
  constructor() {
    this.apiKey = process.env.REACT_APP_OPENAI_KEY;
  }

  async completion(messages) {
    const requestData = {
      model: 'gpt-3.5-turbo',
      messages,
    };

    const response = await axios.post('https://api.openai.com/v1/chat/completions', requestData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.apiKey}`,
      },
    });

    return await response.data.choices[0].message.content;
  }
}

const openAi = new OpenAiClient();
export default openAi;

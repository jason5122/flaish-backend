import axios, { AxiosError } from 'axios';

export const sendOpenAi = async (
  messages: any[], // TODO: type this
  userId: number,
  max = 100,
  temp = 1
) => {
  const url = 'https://api.openai.com/v1/chat/completions';

  console.log('Ask GPT >>>');
  messages.map((m) =>
    console.log(' - ' + m.role.toUpperCase() + ': ' + m.content)
  );

  const body = JSON.stringify({
    model: 'gpt-4',
    messages,
    max_tokens: max,
    temperature: temp,
    user: userId,
  });

  const options = {
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post(url, body, options);

    const answer = res.data.choices[0].message.content;
    const usage = res.data.usage;

    console.log('>>> ' + answer);
    console.log(
      'TOKENS USED: ' +
        usage?.total_tokens +
        ' (prompt: ' +
        usage?.prompt_tokens +
        ' / response: ' +
        usage?.completion_tokens +
        ')'
    );
    console.log('\n');

    return answer;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      console.error('GPT Error: ' + e.response?.status, e.response?.data);
    } else {
      console.error('An unexpected error occurred', e);
    }
    return null;
  }
};
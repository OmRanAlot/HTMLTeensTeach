const apiKey = config.api_key_gpt;
const endpoint = "https://api.openai.com/v1/chat/completions";

async function sendMessage() {
  const userInput = document.getElementById("word").value;
  const chatHistory = document.getElementById("responseText");
//   chatHistory.innerHTML = `<p>User: ${userInput}</p>`;

  const data = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: userInput,
      },
    ],
  };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    console.log("Full Response:", result);

    chatHistory.innerHTML = `<p>Full Response: ${JSON.stringify(result)}</p>`;

    if (result.choices && result.choices.length > 0) {
      chatHistory.innerHTML = `<p>${result.choices[0].message.content}</p>`;
    } else {
      chatHistory.innerHTML = `<p>ChatGPT response structure might have changed. Please check the response object in the console for details.</p>`;
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

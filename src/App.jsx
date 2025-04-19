import { useState } from "react";

function App() {
  const [messages, setMessages] = useState([
    { sender: "Docify", message: "Hello! What brings you in today?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMsg = { sender: "User", message: input };
    const newHistory = [...messages, newMsg];
    setMessages(newHistory);
    setInput("");

    const res = await fetch("http://127.0.0.1:8000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ conversation: newHistory })
    });

    const data = await res.json();
    const aiReply = { sender: "Docify", message: data.aiReply };
    setMessages([...newHistory, aiReply]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow p-4 flex-1 overflow-y-auto">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-3 ${msg.sender === "User" ? "text-right" : "text-left"}`}>
            <span className="block text-sm text-gray-600">{msg.sender}</span>
            <span className="inline-block bg-gray-200 rounded-lg px-4 py-2 mt-1">
              {msg.message}
            </span>
          </div>
        ))}
      </div>
      <div className="w-full max-w-2xl flex mt-4">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && sendMessage()}
          className="flex-1 p-2 rounded-l border"
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;

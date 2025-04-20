import { useState } from 'react';

function Chat() {
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

  const endChat = () => {
    setMessages([...messages, { sender: "Docify", message: "Chat ended." }]);
  };

  const requestDoctor = () => {
    setMessages([...messages, { sender: "Docify", message: "Doctor has been notified." }]);
  };

  return (
    <div className="chat-box">
      <h2 className="chat-title">Docify Medical Chat</h2>
      <div className="messages">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.sender === 'User' ? 'User' : 'Docify'}`}>
            <div className="sender">{msg.sender}</div>
            <div className="message-text">{msg.message}</div>
          </div>
        ))}
      </div>
      <div className="chat-input-container">
      
        <input
          type="text"
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type your message..."
        />
        
        <button className="send-btn" onClick={sendMessage}>Send</button>
        <button className="end-chat-btn" onClick={endChat}>End Chat</button>
      </div>
    </div>
  );
}

export default Chat;

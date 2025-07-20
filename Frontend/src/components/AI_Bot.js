import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AI_Bot.css";

function AI_Bot() {
  const navigate = useNavigate();
  // Dummy chat history for demonstration
  const [chatHistory, setChatHistory] = useState([
    { id: 1, title: "Chat 1" },
    { id: 2, title: "Chat 2" },
  ]);
  const [activeChat, setActiveChat] = useState(1);

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/chat", {
        message: input,
      });
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: response.data.reply },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Error: Could not reach backend." },
      ]);
    }
    setInput("");
    setLoading(false);
  };

  const handleNewChat = () => {
    // For now, just clear messages and add a new chat to history
    const newId = chatHistory.length + 1;
    setChatHistory([{ id: newId, title: `Chat ${newId}` }, ...chatHistory]);
    setActiveChat(newId);
    setMessages([]);
  };

  const handleSelectChat = (id) => {
    setActiveChat(id);
    // In a real app, load messages for this chat
    setMessages([]);
  };

  return (
    <div className="ai-bot-main-container">
      <nav className="ai-bot-navbar">
        <div className="ai-bot-navbar-spacer" />
        <div className="ai-bot-navbar-logo" onClick={() => navigate("/")}> 
          {/* Simple logo SVG */}
          <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="30" stroke="#4f8cff" strokeWidth="3" fill="#fff" />
            <path d="M20 32c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12-12-5.373-12-12z" stroke="#2dd4bf" strokeWidth="2.5" fill="#f5f7fa" />
            <circle cx="32" cy="32" r="6" fill="#4f8cff" />
          </svg>
        </div>
      </nav>
      <aside className="ai-bot-sidebar">
        <button className="ai-bot-new-chat-btn" onClick={handleNewChat}>
          + New Chat
        </button>
        <div className="ai-bot-history-list">
          {chatHistory.map((chat) => (
            <div
              key={chat.id}
              className={`ai-bot-history-item${activeChat === chat.id ? " active" : ""}`}
              onClick={() => handleSelectChat(chat.id)}
            >
              {chat.title}
            </div>
          ))}
        </div>
      </aside>
      <div className="ai-bot-container">
        <div className="ai-bot-chat-window">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`ai-bot-message ${msg.sender === "user" ? "user" : "bot"}`}
            >
              <span className="ai-bot-sender">{msg.sender === "user" ? "You" : "Bot"}</span>
              {msg.text}
            </div>
          ))}
          {loading && <div className="ai-bot-typing"><i>Bot is typing...</i></div>}
        </div>
        <div className="ai-bot-input-row">
          <input
            className="ai-bot-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Enter a cultural claim or myth..."
            disabled={loading}
          />
          <button
            className="ai-bot-send-btn"
            onClick={handleSend}
            disabled={loading || !input.trim()}
          >
            Send
          </button>
        </div>
        <footer className="ai-bot-footer">
          <span>© {new Date().getFullYear()} AI Misinformation Chatbot</span>
        </footer>
      </div>
    </div>
  );
}

export default AI_Bot;

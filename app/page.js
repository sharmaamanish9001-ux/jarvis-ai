
"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  function sendMessage() {
    if (!message.trim()) return;

    setMessages([
      ...messages,
      { text: message, sender: "You" },
      {
        text: "Hello Sir! I am JARVIS. My system is initializing.",
        sender: "JARVIS"
      }
    ]);

    setMessage("");
  }

  return (
    <main className="dashboard">
      <header className="topbar">
        <h2>J.A.R.V.I.S</h2>
        <span className="online">● SYSTEM ONLINE</span>
      </header>

      <section className="hero">
        <div className="orb">
          <div className="orb-inner">J</div>
        </div>

        <h1>GOOD DAY, SIR.</h1>
        <p>Your personal AI assistant is ready.</p>
        <span className="status">INITIALIZING INTERFACE</span>
      </section>

      <section className="chat">
        <h2>JARVIS TERMINAL</h2>

        <div className="messages">
          {messages.length === 0 && (
            <p className="welcome">
              JARVIS: All basic systems are standing by.
            </p>
          )}

          {messages.map((item, index) => (
            <p key={index}>
              <strong>{item.sender}:</strong> {item.text}
            </p>
          ))}
        </div>

        <div className="input-area">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && sendMessage()
            }
            placeholder="Ask JARVIS anything..."
          />

          <button onClick={sendMessage}>SEND</button>
        </div>
      </section>

      <footer>
        JARVIS AI • PERSONAL ASSISTANT • VERSION 1.0
      </footer>
    </main>
  );
}

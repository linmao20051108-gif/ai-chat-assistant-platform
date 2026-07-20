import { useEffect, useRef, useState } from "react";
import MessageBubble from "./MessageBubble.jsx";

export default function ChatWindow({ messages, isLoading, onSendMessage }) {
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput || isLoading) return;
    onSendMessage(trimmedInput);
    setInput("");
  };

  return (
    <section className="glass-panel flex h-full min-h-0 flex-col rounded-lg">
      <div className="border-b border-white/10 p-5">
        <p className="section-kicker">AI Workspace</p>
        <h1 className="text-2xl font-black text-white md:text-3xl">Chat Assistant</h1>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-5 md:px-6">
        <div className="mx-auto grid max-w-4xl gap-4">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}

          {isLoading && (
            <div className="message-in flex justify-start">
              <div className="rounded-lg border border-white/10 bg-panelSoft px-4 py-3">
                <p className="mb-2 text-xs font-black uppercase text-slate-500">AI is thinking...</p>
                <div className="flex gap-2">
                  <span className="typing-dot" />
                  <span className="typing-dot [animation-delay:120ms]" />
                  <span className="typing-dot [animation-delay:240ms]" />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <form className="border-t border-white/10 p-4 md:p-5" onSubmit={handleSubmit}>
        <div className="mx-auto flex max-w-4xl gap-3">
          <input
            className="min-h-[48px] min-w-0 flex-1 rounded-lg border border-line bg-ink px-4 text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-cyanBrand focus:ring-2 focus:ring-cyanBrand/20"
            type="text"
            value={input}
            placeholder="Ask about websites, frontend, APIs, or AI app ideas..."
            onChange={(event) => setInput(event.target.value)}
          />
          <button className="primary-button px-5" type="submit" disabled={isLoading}>
            Send
          </button>
        </div>
      </form>
    </section>
  );
}

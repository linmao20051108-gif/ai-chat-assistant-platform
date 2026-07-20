export default function MessageBubble({ message }) {
  const isUser = message.role === "user";

  return (
    <div className={`message-in flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[86%] rounded-lg border px-4 py-3 shadow-sm md:max-w-[70%] ${
          isUser
            ? "border-cyanBrand/40 bg-cyanBrand text-ink"
            : "border-white/10 bg-panelSoft text-slate-100"
        }`}
      >
        <p className="mb-1 text-xs font-black uppercase opacity-70">{isUser ? "You" : "AI Assistant"}</p>
        <p className="whitespace-pre-wrap leading-7">{message.content}</p>
      </div>
    </div>
  );
}

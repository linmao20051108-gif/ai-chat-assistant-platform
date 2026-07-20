export default function Sidebar({ conversations, activeConversationId, onSelectConversation, onNewChat, onClearHistory }) {
  return (
    <aside className="glass-panel flex h-full min-h-0 flex-col rounded-lg">
      <div className="border-b border-white/10 p-4">
        <button className="primary-button w-full" type="button" onClick={onNewChat}>
          New Chat
        </button>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-3">
        <p className="mb-3 px-2 text-xs font-black uppercase text-slate-500">History</p>
        <div className="grid gap-2">
          {conversations.map((conversation) => (
            <button
              className={`rounded-lg border px-3 py-3 text-left text-sm transition ${
                conversation.id === activeConversationId
                  ? "border-cyanBrand/60 bg-cyanBrand/12 text-white"
                  : "border-transparent text-slate-400 hover:border-white/10 hover:bg-white/5 hover:text-white"
              }`}
              key={conversation.id}
              type="button"
              onClick={() => onSelectConversation(conversation.id)}
            >
              <span className="line-clamp-1 font-bold">{conversation.title}</span>
              <span className="mt-1 block text-xs text-slate-500">{conversation.messages.length} messages</span>
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 p-4">
        <button
          className="w-full rounded-lg border border-roseBrand/40 px-4 py-2 text-sm font-bold text-roseBrand transition hover:bg-roseBrand/10"
          type="button"
          onClick={onClearHistory}
        >
          Clear History
        </button>
      </div>
    </aside>
  );
}

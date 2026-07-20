import { useMemo, useState } from "react";
import ChatWindow from "../components/ChatWindow.jsx";
import Sidebar from "../components/Sidebar.jsx";
import { generateConversationTitle, getAIResponse } from "../services/aiService.js";

const storageKey = "ai-chat-assistant-conversations";

const starterConversation = {
  id: "starter",
  title: "Website improvement",
  messages: [
    {
      id: "ai-welcome",
      role: "assistant",
      content: "Hi, I am your AI assistant. Ask me about websites, frontend development, API integration, or product ideas."
    },
    {
      id: "user-example",
      role: "user",
      content: "How can I improve my website?"
    },
    {
      id: "ai-example",
      role: "assistant",
      content: "Here are some suggestions: clarify the headline, improve mobile spacing, add a stronger call-to-action, and showcase your best project results."
    }
  ]
};

function loadConversations() {
  try {
    const storedValue = localStorage.getItem(storageKey);
    return storedValue ? JSON.parse(storedValue) : [starterConversation];
  } catch {
    return [starterConversation];
  }
}

export default function Chat({ navigate }) {
  const [conversations, setConversations] = useState(loadConversations);
  const [activeConversationId, setActiveConversationId] = useState(conversations[0]?.id || "starter");
  const [isLoading, setIsLoading] = useState(false);

  const activeConversation = useMemo(() => {
    return conversations.find((conversation) => conversation.id === activeConversationId) || conversations[0];
  }, [activeConversationId, conversations]);

  const persistConversations = (nextConversations) => {
    setConversations(nextConversations);
    localStorage.setItem(storageKey, JSON.stringify(nextConversations));
  };

  const updateActiveConversation = (updater) => {
    const nextConversations = conversations.map((conversation) => {
      if (conversation.id !== activeConversationId) return conversation;
      return updater(conversation);
    });
    persistConversations(nextConversations);
  };

  const handleSendMessage = async (content) => {
    const userMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content
    };

    updateActiveConversation((conversation) => ({
      ...conversation,
      title: conversation.title === "New conversation" ? generateConversationTitle(content) : conversation.title,
      messages: [...conversation.messages, userMessage]
    }));

    setIsLoading(true);
    const aiContent = await getAIResponse(content);
    const aiMessage = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: aiContent
    };

    setConversations((currentConversations) => {
      const nextConversations = currentConversations.map((conversation) => {
        if (conversation.id !== activeConversationId) return conversation;
        return {
          ...conversation,
          messages: [...conversation.messages, aiMessage]
        };
      });
      localStorage.setItem(storageKey, JSON.stringify(nextConversations));
      return nextConversations;
    });
    setIsLoading(false);
  };

  const handleNewChat = () => {
    const newConversation = {
      id: crypto.randomUUID(),
      title: "New conversation",
      messages: [
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "Start a new conversation. I can help with frontend ideas, UI structure, and AI product concepts."
        }
      ]
    };

    const nextConversations = [newConversation, ...conversations];
    persistConversations(nextConversations);
    setActiveConversationId(newConversation.id);
  };

  const handleClearHistory = () => {
    persistConversations([starterConversation]);
    setActiveConversationId(starterConversation.id);
  };

  return (
    <div className="min-h-screen bg-ink text-white">
      <div className="flex min-h-screen flex-col">
        <header className="border-b border-white/10 bg-ink/95">
          <div className="container-shell flex min-h-[68px] items-center justify-between gap-4">
            <button className="flex items-center gap-3 text-left" type="button" onClick={() => navigate("/")}>
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-cyanBrand/50 bg-cyanBrand/12 font-black text-cyanBrand">
                AI
              </span>
              <span className="font-black">AI Chat Assistant</span>
            </button>
            <button className="secondary-button min-h-[40px] px-4" type="button" onClick={() => navigate("/")}>
              Home
            </button>
          </div>
        </header>

        <main className="container-shell grid min-h-0 flex-1 gap-4 py-4 lg:grid-cols-[300px_minmax(0,1fr)]">
          <div className="min-h-[260px] lg:h-[calc(100vh-100px)]">
            <Sidebar
              conversations={conversations}
              activeConversationId={activeConversation?.id}
              onSelectConversation={setActiveConversationId}
              onNewChat={handleNewChat}
              onClearHistory={handleClearHistory}
            />
          </div>
          <div className="min-h-[620px] lg:h-[calc(100vh-100px)]">
            <ChatWindow
              messages={activeConversation?.messages || []}
              isLoading={isLoading}
              onSendMessage={handleSendMessage}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

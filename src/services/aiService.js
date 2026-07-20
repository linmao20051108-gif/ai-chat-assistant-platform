const responseLibrary = [
  {
    keywords: ["website", "portfolio", "landing", "design"],
    answer:
      "Here are some suggestions: improve the hero message, make the call-to-action clear, add trust signals, optimize the mobile layout, and highlight your best project outcomes."
  },
  {
    keywords: ["react", "component", "frontend"],
    answer:
      "For a stronger React project, split the interface into reusable components, keep state close to where it is used, and prepare service functions for future API integration."
  },
  {
    keywords: ["upwork", "client", "freelance"],
    answer:
      "For Upwork, show business value clearly: what you built, what technologies you used, what problem it solves, and how a client can contact you."
  },
  {
    keywords: ["api", "openai", "integration"],
    answer:
      "This project uses a mock AI service now, but the same service layer can be connected to an OpenAI API endpoint later without changing the chat UI."
  }
];

export function generateConversationTitle(message) {
  const words = message.trim().split(/\s+/).slice(0, 5).join(" ");
  return words || "New conversation";
}

export async function getAIResponse(userMessage) {
  const normalizedMessage = userMessage.toLowerCase();
  const matchedResponse = responseLibrary.find((item) =>
    item.keywords.some((keyword) => normalizedMessage.includes(keyword))
  );

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    matchedResponse?.answer ||
    "I can help you explore ideas, improve user experience, plan frontend features, and structure a modern AI-powered web application."
  );
}

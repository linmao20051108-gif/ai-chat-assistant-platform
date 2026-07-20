import { useEffect, useMemo, useState } from "react";
import Home from "./pages/Home.jsx";
import Chat from "./pages/Chat.jsx";

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = useMemo(() => {
    return (nextPath) => {
      if (window.location.pathname !== nextPath) {
        window.history.pushState({}, "", nextPath);
        setPath(nextPath);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
  }, []);

  return path === "/chat" ? <Chat navigate={navigate} /> : <Home navigate={navigate} />;
}

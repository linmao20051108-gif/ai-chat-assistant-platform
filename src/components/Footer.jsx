export default function Footer({ navigate }) {
  return (
    <footer className="border-t border-white/10 bg-ink py-8">
      <div className="container-shell flex flex-col justify-between gap-4 text-sm text-slate-400 sm:flex-row">
        <span>© 2026 AI Chat Assistant Platform</span>
        <button className="w-fit font-bold text-cyanBrand" type="button" onClick={() => navigate("/chat")}>
          Open Chat
        </button>
      </div>
    </footer>
  );
}

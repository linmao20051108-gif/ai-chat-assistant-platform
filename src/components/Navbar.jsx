export default function Navbar({ navigate }) {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-ink/88 backdrop-blur-xl">
      <div className="container-shell flex min-h-[68px] items-center justify-between gap-4">
        <button
          className="flex items-center gap-3 text-left"
          type="button"
          onClick={() => navigate("/")}
          aria-label="Go to landing page"
        >
          <span className="grid h-10 w-10 place-items-center rounded-lg border border-cyanBrand/50 bg-cyanBrand/12 font-black text-cyanBrand">
            AI
          </span>
          <span className="hidden font-black text-white sm:block">AI Chat Assistant</span>
        </button>

        <nav className="flex items-center gap-2">
          <a className="hidden rounded-lg px-3 py-2 text-sm font-bold text-slate-300 transition hover:text-cyanBrand sm:inline-flex" href="#features">
            Features
          </a>
          <button className="secondary-button min-h-[40px] px-4" type="button" onClick={() => navigate("/chat")}>
            Start Chat
          </button>
        </nav>
      </div>
    </header>
  );
}

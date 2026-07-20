import Navbar from "../components/Navbar.jsx";
import FeatureCard from "../components/FeatureCard.jsx";
import Footer from "../components/Footer.jsx";

const features = [
  {
    title: "Intelligent Conversation",
    description: "Experience smooth AI-powered conversations with a modern chat interface.",
    accent: "bg-cyanBrand"
  },
  {
    title: "Fast Response",
    description: "Designed for efficient and interactive communication.",
    accent: "bg-amberBrand"
  },
  {
    title: "Modern Technology",
    description: "Built with React.js and scalable frontend architecture.",
    accent: "bg-roseBrand"
  }
];

const technologies = ["React.js", "JavaScript", "Tailwind CSS", "API Integration"];

export default function Home({ navigate }) {
  return (
    <div className="min-h-screen bg-ink text-white">
      <Navbar navigate={navigate} />

      <main>
        <section className="relative overflow-hidden pt-28">
          <div className="container-shell grid min-h-[78vh] items-center gap-10 pb-20 lg:grid-cols-[1fr_0.92fr]">
            <div>
              <p className="section-kicker">AI SaaS Interface</p>
              <h1 className="max-w-3xl text-5xl font-black leading-none text-white md:text-7xl">
                AI Chat Assistant
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                An intelligent conversational interface built with modern frontend technologies.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button className="primary-button" type="button" onClick={() => navigate("/chat")}>
                  Start Chat
                </button>
                <a className="secondary-button" href="#features">
                  View Features
                </a>
              </div>
            </div>

            <div className="glass-panel rounded-lg p-4 shadow-glow">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-black uppercase text-cyanBrand">Product Preview</p>
                  <h2 className="mt-1 text-xl font-black">Assistant Workspace</h2>
                </div>
                <span className="rounded-full bg-cyanBrand/14 px-3 py-1 text-xs font-black text-cyanBrand">Online</span>
              </div>
              <img
                className="aspect-[1200/820] w-full rounded-lg border border-white/10 object-cover"
                src="/ai-product-preview.png"
                alt="AI chat assistant product interface preview"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-panel/70 py-20" id="features">
          <div className="container-shell">
            <div className="mb-10 max-w-3xl">
              <p className="section-kicker">Features</p>
              <h2 className="text-3xl font-black leading-tight md:text-5xl">
                Built to feel like a real AI product interface.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-shell">
            <div className="glass-panel grid gap-8 rounded-lg p-6 md:grid-cols-[0.8fr_1.2fr] md:p-8">
              <div>
                <p className="section-kicker">Technology</p>
                <h2 className="text-3xl font-black leading-tight md:text-4xl">
                  Modern frontend stack for AI application concepts.
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {technologies.map((technology) => (
                  <div className="rounded-lg border border-white/10 bg-ink p-4 font-black text-slate-100" key={technology}>
                    {technology}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer navigate={navigate} />
    </div>
  );
}

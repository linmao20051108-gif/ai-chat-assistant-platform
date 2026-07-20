export default function FeatureCard({ title, description, accent }) {
  return (
    <article className="glass-panel rounded-lg p-6 transition hover:-translate-y-1 hover:border-cyanBrand/50 hover:shadow-glow">
      <div className={`mb-6 h-1.5 w-16 rounded-full ${accent}`} />
      <h3 className="mb-3 text-xl font-black text-white">{title}</h3>
      <p className="leading-7 text-slate-400">{description}</p>
    </article>
  );
}

const PlatformOverview = () => {
  const capabilities = [
    "Multi-platform data collection from Reddit, Twitter/X, Facebook, TikTok, YouTube, Kaggle, and Hugging Face.",
    "Text and multimedia abuse detection using state-of-the-art ML models.",
    "Dynamic integration of Hugging Face models without writing code.",
    "Interactive visual analytics (temporal trends, topic distributions, networks, frequency).",
    "LLM-assisted annotation for text and images.",
    "A Python library for programmatic access in notebooks and scripts.",
  ]

  return (
    <section id="overview" className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-foreground">What is ICOAR?</h2>

        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            ICOAR (Integrative Cyberinfrastructure for Online Abuse Research) is a system that automates collecting,
            preprocessing, detecting, and visualizing online abuse across multiple platforms. It supports text and
            image-based abuse, including hate speech, toxic comments, cyberbullying, hateful memes, and deepfakes. While
            designed for online abuse, the architecture is generic enough to be reused for other research domains.
          </p>
        </div>

        <div className="bg-background rounded-lg p-8 border border-border">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Key Capabilities</h3>
          <ul className="grid md:grid-cols-2 gap-4">
            {capabilities.map((capability, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span className="text-foreground/80">{capability}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default PlatformOverview

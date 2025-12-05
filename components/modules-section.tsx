const ModulesSection = () => {
  const modules = [
    {
      title: "Data Collection Module",
      description:
        "Supports platform-specific APIs and scrapers for Reddit, Twitter/X, Facebook, TikTok, YouTube, and more. Also connects to Kaggle and Hugging Face for curated datasets. Allows custom queries with keywords, time ranges, and counts.",
    },
    {
      title: "Text Preprocessing",
      description:
        "Flexible pipeline where researchers can enable/disable steps depending on their study. Standard NLP cleaning plus profanity filtering and language filtering. Designed with privacy regulations like GDPR and CCPA in mind.",
    },
    {
      title: "Text Analysis",
      description:
        "Integrates several ML models including COVID-19 offensive tweet detection, tweet sentiment analysis, toxic content detection, robust hate speech detection, cyberbullying detection, and Named Entity Recognition.",
    },
    {
      title: "Multimedia Analysis",
      description:
        "Cyberbullying Image Classification, Hateful Meme Detection with multimodal models combining text and image analysis, and Deepfake Detection to identify manipulated images.",
    },
    {
      title: "Data Visualization",
      description:
        "Temporal analysis of offensive content trends, topic modeling distributions, user network graphs showing interactions and clusters, and frequency analysis of recurring words and phrases.",
    },
    {
      title: "LLM-Assisted Annotation",
      description:
        "Uses GPT-style language models for text annotation with prompt templates and chain-of-thought guidance. Vision-capable LLMs for image annotation with minimal manual effort.",
    },
    {
      title: "ICOAR Python Library",
      description:
        "Simple API such as 'from ICOAR import DataCollection'. Example workflow: choose platforms, specify keywords, and launch collection from a Python notebook. Designed for reproducible experiments.",
    },
  ]

  return (
    <section id="modules" className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-foreground">Key Modules</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((module, idx) => (
            <div
              key={idx}
              className="bg-background border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">{module.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{module.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ModulesSection

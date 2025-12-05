const PipelineSection = () => {
  const steps = [
    {
      number: 1,
      title: "Data Collection",
      description:
        "Collect social media content from Reddit, Twitter/X, Facebook, TikTok, YouTube, and dataset hubs like Kaggle and Hugging Face. Filter by keywords, date ranges, hashtags, and desired number of posts.",
    },
    {
      number: 2,
      title: "Preprocessing",
      description:
        "Clean and normalize text: remove non-English content, URLs, hashtags, mentions, emojis, special characters, stopwords, and profanity. Apply lowercase and lemmatization.",
    },
    {
      number: 3,
      title: "Text Content Detection",
      description:
        "Apply ML/NLP models to detect offensive and toxic content, hate speech, cyberbullying, sentiment and targeted entities.",
    },
    {
      number: 4,
      title: "Multimedia Content Detection",
      description:
        "Analyze images for cyberbullying imagery, hateful memes using multimodal models, and deepfake images and manipulated media.",
    },
    {
      number: 5,
      title: "Advanced Analysis",
      description:
        "Run higher-level analytics like topic modeling, sentiment analysis, and other research models. Explore how volume and targets of abuse change with real-world events.",
    },
    {
      number: 6,
      title: "Visualization",
      description:
        "Visualize temporal trends, topic distributions, user interaction networks, and word frequencies. Export results for reports and downstream analysis.",
    },
  ]

  return (
    <section id="pipeline" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-foreground">Research Pipeline</h2>
        <p className="text-xl text-foreground/70 mb-12">From raw social media posts to actionable insights.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground mt-1">{step.title}</h3>
              </div>
              <p className="text-foreground/70 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PipelineSection

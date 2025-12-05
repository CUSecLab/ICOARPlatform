const SampleProjects = () => {
  const projects = [
    {
      title: "COVID-19 Offensive Tweets",
      description:
        "Collect COVID-19-related tweets, detect offensive content, and analyze how real-world events affect the volume and targets of online hate.",
    },
    {
      title: "Hate Speech Detection with LLMs",
      description:
        "Use ICOAR's pipeline and LLM-assisted methods to compare cross-dataset hate speech detection and explore reasoning-based moderation.",
    },
    {
      title: "Cyberbullying in Real-World Images",
      description:
        "Analyze images from social platforms to detect visual signals of cyberbullying, including body pose, facial expressions, and context.",
    },
    {
      title: "COVID-19 Hateful Memes",
      description:
        "Study hateful memes related to COVID-19 using multimodal models to understand how visual and textual signals work together.",
    },
  ]

  return (
    <section id="sample-projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-foreground">Sample Research Scenarios</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-background border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SampleProjects

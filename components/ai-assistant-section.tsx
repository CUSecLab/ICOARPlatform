const AIAssistantSection = () => {
  const examples = [
    '"Collect 20 Reddit posts about cyberbullying in the last month."',
    '"Clean the collected dataset and show me a quick visualization."',
    '"Analyze sentiment trends across the data."',
  ]

  return (
    <section id="ai-assistant" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-foreground">AI Assistant for Researchers</h2>

        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            The latest ICOAR interface uses a Streamlit-based UI with a sidebar AI assistant. The assistant can
            understand natural language requests like:
          </p>

          <ul className="space-y-3 mb-6">
            {examples.map((example, idx) => (
              <li key={idx} className="flex items-start gap-3 text-foreground/70">
                <span className="text-primary font-bold mt-1">•</span>
                <span>{example}</span>
              </li>
            ))}
          </ul>

          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            It automatically parses the request, calls the appropriate collectors and preprocessing, and generates
            preview visualizations and summaries. It remembers the current dataset within a session and can reuse it for
            follow-up tasks (clean, visualize, summarize, export).
          </p>

          <p className="text-foreground/70 leading-relaxed">
            This assistant is powered by GPT-4o-style models integrated with the ICOAR backend, with safe defaults (no
            NSFW by default, no harmful keyword injection).
          </p>
        </div>
      </div>
    </section>
  )
}

export default AIAssistantSection

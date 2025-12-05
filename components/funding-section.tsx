const FundingSection = () => {
  return (
    <section id="funding" className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-foreground">Funding & Acknowledgments</h2>

        <div className="bg-background border border-border rounded-lg p-8">
          <p className="text-lg text-foreground/80 leading-relaxed">
            ICOAR is supported by the National Science Foundation (NSF){" "}
            <span className="font-semibold">{""}</span>. We acknowledge the
            collaboration between Clemson University, University at Buffalo, and other partners focusing on online
            safety, privacy, and security.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FundingSection

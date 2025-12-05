const HeroSection = () => {
  return (
    <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
          ICOAR: An Integrated Platform for Online Abuse Research
        </h2>
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed text-balance">
          A scalable, extensible platform for collecting, detecting, and visualizing online hate and abuse across social
          media.
        </p>

        <div className="prose prose-invert max-w-2xl mx-auto mb-12 text-foreground/70">
          <p className="text-lg leading-relaxed">
            Social media platforms host massive volumes of user-generated content, including online hate, harassment,
            and toxic behavior. Researchers struggle because datasets, models, and tools are scattered and hard to
            integrate. ICOAR provides an end-to-end pipeline — from data collection to ML-based analysis and
            visualization — in a single environment.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://icoarplatform.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            View Platform Demo
          </a>
          <button className="inline-block px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors">
            ICOAR Python Library (Coming Soon)
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

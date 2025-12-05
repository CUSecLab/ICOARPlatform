const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-foreground">Get in Touch</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">Research Collaborations</h3>
            <p className="text-foreground/80 mb-2">
              <span className="font-medium">Prof. Long Cheng</span>
            </p>
            <p className="text-foreground/70 mb-3">School of Computing, Clemson University</p>
            <p className="text-foreground/70">For research collaborations and project inquiries</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">Platform Demos & Engineering</h3>
            <p className="text-foreground/80 mb-2">
              <span className="font-medium">Sravani Pati</span>
            </p>
            <p className="text-foreground/70 mb-3">School of Computing, Clemson University</p>
            <a href="mailto:sravanichinni855@gmail.com" className="text-primary hover:text-primary/80 font-medium">
              Spati@clemson.edu


            </a>
          </div>
        </div>

        <div className="mt-8 bg-background border border-border rounded-lg p-6 text-center">
          <p className="text-foreground/70 text-sm">
            The ICOAR platform codebase is being prepared for public release to encourage community contributions and
            keep the system aligned with state-of-the-art methods.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

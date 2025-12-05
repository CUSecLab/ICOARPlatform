const TeamSection = () => {
  const team = [
    { name: "Mohammed Aldeen", role: "Lead Researcher, School of Computing, Clemson University" },
    { name: "Pranav Pradosh Silimkhan", role: "Researcher, School of Computing, Clemson University" },
    { name: "Ethan Anderson", role: "Researcher, School of Computing, Clemson University" },
    { name: "Taran Kavuru", role: "Researcher, School of Computing, Clemson University" },
    { name: "Tsu-Yao Chang", role: "Researcher, School of Computing, Clemson University" },
    { name: "Jin Ma", role: "Researcher, School of Computing, Clemson University" },
    {
      name: "Sravani Pati",
      role: "Researcher, School of Computing, Clemson University",
    },
    { name: "Feng Luo", role: "Faculty, School of Computing, Clemson University" },
    { name: "Hongxin Hu", role: "Faculty, Department of Computer Science and Engineering, University at Buffalo" },
    { name: "Long Cheng", role: "Principal Investigator, School of Computing, Clemson University" },
  ]

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-foreground">Core Team</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-card border border-border rounded-lg p-5 hover:shadow-sm transition-shadow">
              <h3 className="font-semibold text-foreground text-lg mb-1">{member.name}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">{member.role}</p>
            </div>
          ))}
        </div>

        <p className="text-foreground/60 text-sm italic text-center mt-8">
          More student collaborators and project contributors coming soon.
        </p>
      </div>
    </section>
  )
}

export default TeamSection

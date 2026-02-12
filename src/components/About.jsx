const timeline = [
  {
    year: "2023 - Present",
    title: "Frontend / UX Developer",
    company: "Your Current Focus",
    description: "Building modern web apps and UX-focused interfaces.",
  },
  {
    year: "2022 - 2023",
    title: "Data & Simulation Projects",
    company: "Academic / Personal",
    description: "Worked on bike-sharing simulation and MARL optimization.",
  },
  {
    year: "2021 - 2022",
    title: "Web Development Learning",
    company: "Self-driven",
    description: "React, JS, Tailwind, UI/UX foundations.",
  },
  {
    year: "Education",
    title: "Your Degree",
    company: "University",
    description: "Add your real program here.",
  },
];

export default function About() {
  return (
    <div className="py-20 bg-accent/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate developer with over 4 years of experience building
                web applications. I love creating elegant solutions to complex problems
                and am always eager to learn new technologies.
              </p>
              <p>
                When I'm not coding, you can find me exploring new hiking trails,
                reading about emerging tech trends, or contributing to open-source
                projects. I believe in continuous learning and sharing knowledge
                with the developer community.
              </p>
              <p>
                My approach to development focuses on writing clean, maintainable
                code while delivering exceptional user experiences. I'm particularly
                interested in performance optimization and accessibility.
              </p>
            </div>
          </div>
          {/* Timeline */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Experience & Education
            </h3>
            <div className="relative">
              <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-border" />
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-10">
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-green-600" />
                    </div>
                    <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <span className="text-xs font-medium text-green-700">
                        {item.year}
                      </span>
                      <h4 className="text-foreground font-medium mt-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.company}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


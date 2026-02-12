const timeline = [
  {
    year: "2023 - 2025",
    title: "Master’s in Informatics and Computing Engineering",
    company: "University of Porto, Porto, Portugal",
    description: "Specialized in AI and analytics through a thesis on bike-sharing optimization systems.",
  },
  {
    year: "2021 - 2022",
    title: "Internship",
    company: "InsInCloud, Varna, Bulgaria",
    description: "Completed a frontend internship building and improving React-based web application interfaces.",
  },
  {
    year: "2018 - 2022",
    title: "Bachelor's in Software and Internet Technologies",
    company: "Technical University of Varna, Varna, Bulgaria",
    description: "Built strong web technology foundations through coursework and a user-focused thesis project.",
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
                I’m a frontend-focused developer with a strong interest in data analytics and intelligent systems, passionate about
                building interactive, user-centered web applications. I enjoy turning complex ideas and data-driven concepts into clean,
                practical, and well-designed solutions, and I’m always motivated to keep learning and improving my skills.
              </p>
              <p>
                My recent projects include data-driven simulations, AI-based recommendation features, and modern React applications, 
                where I combine analytical thinking with UI and UX principles. I like working where interface design, logic, and 
                data meet to create useful and intuitive products.
              </p>
              <p>
                When I’m not coding, you can find me diving, exploring new tech concepts, or refining project ideas and prototypes.
                I value continuous learning, adaptability, and clear communication, and I work best in collaborative environments 
                where problem-solving and critical thinking are encouraged.
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


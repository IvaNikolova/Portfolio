const skillCategories = [
  {
    title: "Frontend & UX Engineering",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS", "Responsive Design", "API Integration", "Firebase", "Figma", "Wireframing", "Prototyping", "Accessibility"],
  },
  {
    title: "Data, AI & Simulation",
    skills: ["Python", "Pandas", "Data Analysis", "Jupyther Notebook", "MongoDB", "Data Preprocessing","Plotly Dash", "Data Visualization", "Evaluation Metrics", "Reinforcement Learning (DQN)", "Multi-Agent Simulation"],
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "Version Control", "VS COde", "Agile Methilogies", "Debugging", "Techincal Documentation"],
  },
];


export default function Skills() {
  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I work with to bring ideas to life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium bg-green-950 text-primary rounded-lg  transition cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with cart, payments, and admin dashboard.",
    details:
      "Complete e-commerce solution with authentication, product management, order tracking, and Stripe integration.",
    techTags: ["React", "Node.js", "MongoDB"],
    techStack: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "Tailwind",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates.",
    details:
      "Kanban-style boards with drag-and-drop, collaboration, file uploads, and chat.",
    techTags: ["Next.js", "TypeScript", "Prisma"],
    techStack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Socket.io",
      "AWS S3",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "AI Content Generator",
    description:
      "Smart content creation tool powered by AI APIs and templates.",
    details:
      "AI writing assistant with multiple content types and export options.",
    techTags: ["Python", "FastAPI", "React"],
    techStack: ["Python", "FastAPI", "React", "OpenAI", "Redis", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

function Projects() {
  return (
    <div className="py-20 bg-accent/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I've worked on. Each one pushed my skills
            further and solved real problems.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Projects;

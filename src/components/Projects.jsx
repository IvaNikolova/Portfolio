import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Smart Bike Sharing Simulation",
    description:
      "A data-driven bike-sharing simulation that uses historical trip and weather data with multi-agent DQN reinforcement learning to predict demand and optimize bike redistribution between stations.",
    details:
      "Implements station-level RL agents, demand-aware redistribution windows, and interactive Dash visualizations to evaluate availability, missed trips, and system balance.",
    techTags: ["Python", "MARL", "DQN", "Plotly Dash", "Simulation"],
    techStack: [
      "Python",
      "Pandas",
      "Plotly Dash",
      "MARL",
      "DQN",
      "Reinforcement Learning", 
      "Data Simulation",
      "Geospatial Data",
      "Data Visualization"
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "FilmVault",
    description:
      "A TMDB-based movie browsing app where users save films to a wishlist and receive personalized recommendations based on their saved preferences.",
    details:
      "Includes authenticated user profiles, persistent cloud-stored wishlists, and recommendation logic derived from user-selected movie patterns.",
    techTags: ["React", "TypeScript", "Firebase", "TMDB API"],
    techStack: [
      "React",
      "TypeScript",
      "Firebase Auth",
      "Firestore",
      "TMDB API",
      "Tailwind CSS",
      "Responsive Design",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Calendar Web App",
    description:
      "A combined calendar and daily task planner that lets users manage scheduled events and flexible day-based to-do items in a single interface.",
    details:
      "Supports both time-based events and no-time daily tasks with unified state handling and a productivity-focused UX layout.",
    techTags: ["React", "JavaScript/TypeScript", "UI Design"],
    techStack: ["React", "Local Storage", "UI/UX Design", "Date Logic", "Figma"],
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

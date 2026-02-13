import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

function ProjectCard({ project }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-90 cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d`}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-3">
            {project.title}
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.techTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-green-950 text-primary rounded-full transition cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="absolute bottom-4 left-6 text-xs text-muted-foreground">
            Click to see more →
          </p>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 bg-card border border-border rounded-xl p-6 shadow-lg backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-3">
            {project.title}
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {project.details}
          </p>

          <div className="mb-4">
            <p className="text-xs font-medium text-foreground mb-2">
              Tech Stack:
            </p>

            <div className="flex flex-wrap gap-1">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs bg-accent text-accent-foreground rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="absolute bottom-4 left-6 right-6 flex gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.githubUrl, "_blank");
              }}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex-1"
            >
              <Github className="h-4 w-4" />
              GitHub
            </button>

            {/* <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.liveUrl, "_blank");
              }}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 flex-1"
              >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

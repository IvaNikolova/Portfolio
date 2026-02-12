import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary font-medium mb-4 tracking-wide">
              Hello, I'm
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tigh">
              Iva Nikolova
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxe">
              A passionate developer specializing in building modern digital
              experiences. I love turning complex problems into simple,
              beautiful solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              
              {/* Primary button */}
              <button
                onClick={() => scrollToSection("#projects")}
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-xl bg-green-600 text-white hover:bg-green-700 transition group"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Outline button */}
              <button
                onClick={() => scrollToSection("#contact")}
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-xl border border-green-600 text-green-600 hover:bg-green-950"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </button>

            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">

              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-green-400/20 blur-2xl scale-110" />

              {/* Image */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-green-200 shadow-2xl">
                <img
                  src="/CV_photo.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative dots */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 grid grid-cols-4 gap-2">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-green-400/40" />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}



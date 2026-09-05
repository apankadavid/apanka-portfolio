import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <main className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="font-fraunces text-4xl mb-4 text-center">Projects</h1>
      <p className="text-center text-ink/70 max-w-xl mx-auto mb-14">
        Real, working systems across data, development, marketing, and
        agricultural technology.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative w-full h-56">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-widest text-stone mb-2">
                {project.categories.join(" · ")}
              </p>
              <h2 className="font-fraunces text-xl mb-2">{project.title}</h2>
              <p className="text-sm text-ink/70">{project.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
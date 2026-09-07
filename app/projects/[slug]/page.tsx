import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "../../data/projects";
import Link from "next/link";

export default async function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto py-20 px-6">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-deep-green hover:underline mb-8"
      >
        ← Back to Projects
      </Link>
      <p className="text-xs uppercase tracking-widest text-stone mb-3">
        {project.categories.join(" · ")} · {project.year}
      </p>
      <h1 className="font-fraunces text-4xl mb-6">{project.title}</h1>

      {project.image && (
        <div className="relative w-full h-72 sm:h-96 rounded-lg overflow-hidden mb-10">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        </div>
      )}

      {project.videos && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {project.videos.map((video) => (
            <div key={video.src} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <video controls preload="metadata" className="w-full h-48 object-cover">
                <source src={video.src} type="video/mp4" />
              </video>
              <p className="p-3 text-xs font-medium text-ink/70">{video.caption}</p>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-12">
        {project.technologies.map((tech) => (
          <span key={tech} className="text-xs px-2 py-1 rounded-lg bg-deep-green/10 text-deep-green">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-10">
        <section>
          <h2 className="font-fraunces text-2xl mb-3">The Problem</h2>
          <p className="text-ink/80">{project.problem}</p>
        </section>
        <section>
          <h2 className="font-fraunces text-2xl mb-3">The Approach</h2>
          <p className="text-ink/80">{project.approach}</p>
        </section>
        <section>
          <h2 className="font-fraunces text-2xl mb-3">Implementation</h2>
          <p className="text-ink/80">{project.implementation}</p>
        </section>
        <section>
          <h2 className="font-fraunces text-2xl mb-3">Result</h2>
          <p className="text-ink/80">{project.result}</p>
        </section>
        <section>
          <h2 className="font-fraunces text-2xl mb-3">Lessons Learned</h2>
          <p className="text-ink/80">{project.lessons}</p>
        </section>
      </div>

      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-12 bg-deep-green text-paper px-6 py-3 rounded-lg font-semibold"
        >
          View Live Site
        </a>
      )}
    </main>
  );
}
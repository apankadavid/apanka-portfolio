import Link from "next/link";
import Image from "next/image";
import Hero from "./components/Hero";
import { projects } from "./data/projects";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <main>
      <Hero />

      <section className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="font-fraunces text-3xl mb-10 text-center">Featured Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-56">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-stone mb-2">
                  {project.categories.join(" · ")}
                </p>
                <h3 className="font-fraunces text-xl mb-2">{project.title}</h3>
                <p className="text-sm text-ink/70">{project.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-deep-green text-paper py-20 px-6 text-center">
        <p className="text-lg max-w-xl mx-auto mb-8">
          Agricultural engineering taught me to think in systems. Data,
          development, and marketing gave me the tools to act on them.
        </p>
        <Link
          href="/about"
          className="inline-block border border-cream text-cream px-6 py-3 rounded-lg font-semibold hover:bg-cream hover:text-deep-green transition-colors"
        >
          Read My Full Story
        </Link>
      </section>

      <section className="py-20 px-6 text-center">
        <h2 className="font-fraunces text-3xl mb-4">Have a Project in Mind?</h2>
        <p className="text-ink/70 mb-8 max-w-md mx-auto">
          I&apos;m open to work across data, development, and agricultural technology.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-deep-green text-paper px-6 py-3 rounded-lg font-semibold"
        >
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
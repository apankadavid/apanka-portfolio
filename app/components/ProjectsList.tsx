"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { projects, ProjectCategory } from "../data/projects";

const categories: ProjectCategory[] = [
  "Data & Analytics",
  "Full-Stack Development",
  "Digital Marketing",
  "AgricTech",
  "Research",
];

export default function ProjectsList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");

  const filtered = activeCategory
    ? projects.filter((p) => p.categories.includes(activeCategory as ProjectCategory))
    : projects;

  function setFilter(category: string | null) {
    if (category) {
      router.push(`/projects?category=${encodeURIComponent(category)}`, { scroll: false });
    } else {
      router.push("/projects", { scroll: false });
    }
  }

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <button
          onClick={() => setFilter(null)}
          className={`text-sm px-4 py-2 rounded-lg font-medium transition-colors ${
            !activeCategory ? "bg-deep-green text-paper" : "bg-white text-ink/70 border border-stone/20"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-sm px-4 py-2 rounded-lg font-medium transition-colors ${
              activeCategory === cat ? "bg-deep-green text-paper" : "bg-white text-ink/70 border border-stone/20"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-ink/60">No projects in this category yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {filtered.map((project) => (
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
                <h2 className="font-fraunces text-xl mb-2">{project.title}</h2>
                <p className="text-sm text-ink/70">{project.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
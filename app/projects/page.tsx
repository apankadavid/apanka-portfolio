import { Suspense } from "react";
import ProjectsList from "../components/ProjectsList";

export const metadata = {
  title: "Projects | Apanka Ayebadek David",
  description: "Real, working systems across data, development, marketing, and agricultural technology.",
};

export default function Projects() {
  return (
    <main className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="font-fraunces text-4xl mb-4 text-center">Projects</h1>
      <p className="text-center text-ink/70 max-w-xl mx-auto mb-14">
        Real, working systems across data, development, marketing, and
        agricultural technology.
      </p>
      <Suspense fallback={<p className="text-center">Loading projects...</p>}>
        <ProjectsList />
      </Suspense>
    </main>
  );
}
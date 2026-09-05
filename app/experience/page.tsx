import { education, experience } from "../data/experience";

function EntryList({ entries }: { entries: typeof education }) {
  return (
    <div className="flex flex-col gap-8">
      {entries.map((entry) => (
        <div key={entry.title + entry.organization} className="border-l-2 border-deep-green/20 pl-6">
          <p className="text-xs uppercase tracking-widest text-stone mb-1">
            {entry.period}
          </p>
          <h3 className="font-fraunces text-xl mb-1">{entry.title}</h3>
          <p className="text-sm font-medium text-deep-green mb-2">{entry.organization}</p>
          <p className="text-ink/80">{entry.description}</p>
        </div>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <main className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="font-fraunces text-4xl mb-16 text-center">Experience</h1>

      <section className="mb-16">
        <h2 className="font-fraunces text-2xl mb-8">Education</h2>
        <EntryList entries={education} />
      </section>

      <section>
        <h2 className="font-fraunces text-2xl mb-8">Work</h2>
        <EntryList entries={experience} />
      </section>
    </main>
  );
}
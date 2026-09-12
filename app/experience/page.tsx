import { education, experience } from "../data/experience";

export const metadata = {
  title: "Experience | Apanka Ayebadek David",
  description: "Education, work history, and real projects in data, development, and agriculture.",
};

function EntryList({ entries }: { entries: typeof education }) {
  return (
    <div className="flex flex-col gap-8">
      {entries.map((entry) => (
        <div key={entry.title + entry.organization} className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-cream">
          <p className="text-xs uppercase tracking-widest text-stone mb-1">
            {entry.period}
          </p>
          <h3 className="font-fraunces text-xl mb-1">{entry.title}</h3>
          <p className="text-sm font-medium text-deep-green mb-2">{entry.organization}</p>
          <p className="text-ink/80 text-sm">{entry.description}</p>
        </div>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <main>
      <section className="bg-deep-green text-paper py-20 px-6 text-center">
        <h1 className="font-fraunces text-4xl mb-4">Experience</h1>
        <p className="text-paper/80 max-w-xl mx-auto">
          Education, work, and the real projects behind them.
        </p>
      </section>

      <div className="max-w-3xl mx-auto py-16 px-6">
        <section className="mb-16">
          <h2 className="font-fraunces text-2xl mb-8">Education</h2>
          <EntryList entries={education} />
        </section>

        <section>
          <h2 className="font-fraunces text-2xl mb-8">Work</h2>
          <EntryList entries={experience} />
        </section>
      </div>
    </main>
  );
}
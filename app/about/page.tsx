import Image from "next/image";
import { journey, skillCategories } from "../data/about";

export default function About() {
  return (
    <main>
      <section className="bg-deep-green text-paper py-20 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-[240px_1fr] gap-10 items-center">
          <div className="relative w-48 h-56 sm:w-full sm:h-72 rounded-lg overflow-hidden mx-auto sm:mx-0 border-2 border-cream/30">
            <Image
              src="/profile.png"
              alt="Apanka Ayebadek David"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="font-fraunces text-4xl sm:text-5xl mb-6">About</h1>
            <p className="text-lg text-paper/85">
              Agricultural engineering taught me to think in systems: inputs,
              processes, outputs, constraints. Data analysis gave me a way to
              measure those systems. Web development gave me a way to build
              tools around them. Digital marketing gave me a way to get those
              tools in front of the people who need them. Gillionaire Decor is
              where all four came together on a real project.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto py-16 px-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="font-fraunces text-xl mb-4">Quick Facts</h3>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
            <div className="flex justify-between border-b border-stone/10 pb-2">
              <dt className="text-stone">Name</dt>
              <dd className="font-medium">Apanka Ayebadek David</dd>
            </div>
            <div className="flex justify-between border-b border-stone/10 pb-2">
              <dt className="text-stone">Based in</dt>
              <dd className="font-medium">Accra, Ghana</dd>
            </div>
            <div className="flex justify-between border-b border-stone/10 pb-2">
              <dt className="text-stone">Education</dt>
              <dd className="font-medium">Agricultural Engineering</dd>
            </div>
            <div className="flex justify-between border-b border-stone/10 pb-2">
              <dt className="text-stone">Focus Areas</dt>
              <dd className="font-medium text-right">Data, Dev, AgricTech</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="max-w-3xl mx-auto py-16 px-6">
        <h2 className="font-fraunces text-3xl mb-10 text-center">My Journey</h2>
        <div className="flex flex-col gap-8">
          {journey.map((step, index) => (
            <div key={step.title} className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-deep-green">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-fraunces text-2xl text-deep-green/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone mb-1">
                    {step.year}
                  </p>
                  <h3 className="font-fraunces text-xl">{step.title}</h3>
                </div>
              </div>
              <p className="text-ink/80 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="font-fraunces text-3xl mb-4 text-center">
          Where I Actually Stand
        </h2>
        <p className="text-center text-ink/70 max-w-xl mx-auto mb-12">
          I believe in being honest about skill level: here&apos;s a clear
          breakdown across each area.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-cream">
              <h3 className="font-fraunces text-lg mb-4">{cat.category}</h3>
              <ul className="flex flex-col gap-3">
                {cat.skills.map((skill) => (
                  <li key={skill.name} className="flex justify-between items-center text-sm">
                    <span>{skill.name}</span>
                    <span
                      className={`text-xs px-2 py-1 rounded-lg ${
                        skill.tier === "Practical experience"
                          ? "bg-deep-green/10 text-deep-green"
                          : skill.tier === "Currently developing"
                          ? "bg-cream text-deep-green"
                          : "bg-stone/10 text-stone"
                      }`}
                    >
                      {skill.tier}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
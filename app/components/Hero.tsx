import { roles } from "../data/roles";

export default function Hero() {
  const activeRole = roles[1]; // Full-Stack Development, as a sensible default

  return (
    <section className="bg-deep-green text-paper">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 text-center">
        <h1 className="font-fraunces text-4xl sm:text-6xl mb-6">
          Apanka Ayebadek David
        </h1>

        <p className="text-lg text-paper/80 max-w-xl mx-auto mb-10">
          I connect agriculture, data, and technology to build practical
          digital solutions.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {roles.map((role) => (
            <span
              key={role.id}
              className={`rounded-full px-5 py-2 text-sm font-medium ${
                role.id === activeRole.id
                  ? "bg-cream text-deep-green"
                  : "bg-paper/10 text-paper/80"
              }`}
            >
              {role.label}
            </span>
          ))}
        </div>

        <h2 className="font-fraunces text-2xl sm:text-3xl mb-4">
          {activeRole.headline}
        </h2>
        <p className="text-paper/80 max-w-xl mx-auto mb-8">
          {activeRole.description}
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          {activeRole.skills.map((skill) => (
            <span key={skill} className="text-xs uppercase tracking-wide text-cream/80">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
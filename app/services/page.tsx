import { services } from "../data/services";

export default function Services() {
  return (
    <main>
      <section className="bg-deep-green text-paper py-20 px-6 text-center">
        <h1 className="font-fraunces text-4xl mb-4">Services</h1>
        <p className="text-paper/80 max-w-xl mx-auto">
          Practical, outcome-focused work across development, data, and
          agricultural technology.
        </p>
      </section>

      <div className="max-w-4xl mx-auto py-16 px-6 flex flex-col gap-10">
        {services.map((service, index) => (
          <div key={service.title} className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-deep-green">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-fraunces text-3xl text-deep-green/30">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="font-fraunces text-2xl">{service.title}</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-stone mb-2">
                  The Problem
                </p>
                <p className="text-sm text-ink/80">{service.problem}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-stone mb-2">

                  What I Provide
                </p>
                <p className="text-sm text-ink/80">{service.provide}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-stone mb-2">
                  Ideal Client
                </p>
                <p className="text-sm text-ink/80">{service.idealClient}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
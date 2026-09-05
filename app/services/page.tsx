import { services } from "../data/services";

export default function Services() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="font-fraunces text-4xl mb-4 text-center">Services</h1>
      <p className="text-center text-ink/70 max-w-xl mx-auto mb-16">
        Practical, outcome-focused work across development, data, and
        agricultural technology.
      </p>

      <div className="flex flex-col gap-12">
        {services.map((service) => (
          <div key={service.title} className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="font-fraunces text-2xl mb-6">{service.title}</h2>

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
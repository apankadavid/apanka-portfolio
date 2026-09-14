import Image from "next/image";
import { services } from "../data/services";

const serviceImages = [
  "/projects/gillionaire-decor.png",
  "/projects/road-accidents.jpg",
  "/projects/goshen-porche-thumb.jpg",
];

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

      <div className="max-w-2xl mx-auto py-20 px-6 flex flex-col gap-16">
        {services.map((service, index) => (
          <div
              key={service.title}
              className={`relative bg-white rounded-2xl p-8 pt-14 shadow-[0_25px_60px_-15px_rgba(1,62,55,0.35)] ${
                index % 2 === 0 ? "sm:ml-0 sm:mr-12" : "sm:mr-0 sm:ml-12"
              }`}
            >
            <div className="absolute -top-8 left-8 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src={serviceImages[index]}
                alt=""
                fill
                className="object-cover"
              />
            </div>

            <span className="absolute top-4 right-6 font-fraunces text-4xl text-deep-green/15">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="absolute top-2 right-4 w-16 h-16 rounded-full bg-cream/40 blur-2xl -z-10" />

            <h2 className="font-fraunces text-2xl mb-4">{service.title}</h2>

            <div className="flex flex-col gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-stone mb-1">
                  The Problem
                </p>
                <p className="text-sm text-ink/80">{service.problem}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-stone mb-1">
                  What I Provide
                </p>
                <p className="text-sm text-ink/80">{service.provide}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-stone mb-1">
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
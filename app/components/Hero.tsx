"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { roles } from "../data/roles";

export default function Hero() {
  const [activeId, setActiveId] = useState(roles[1].id);
  const activeRole = roles.find((r) => r.id === activeId)!;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#013E37]">
          {roles.map((role) => (
            <motion.div
              key={role.id}
              initial={false}
              animate={{ opacity: role.id === activeId ? 1 : 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={role.image}
                alt=""
                fill
                priority
                className="object-cover object-[55%_top] sm:object-center"
              />
              <div className="absolute inset-0 bg-[#013E37]/80" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-0 sm:px-6 py-16 sm:py-0">
        <div className="grid grid-cols-1 sm:grid-cols-[70%_30%] items-end sm:min-h-[400px]">
          <div className="text-center sm:text-left py-10 sm:py-0 sm:pr-8 px-6 sm:px-0">
            <h1 className="font-fraunces text-4xl sm:text-6xl mb-6 text-paper">
              Apanka Ayebadek David
            </h1>

            <p className="text-lg text-paper/80 max-w-xl mx-auto sm:mx-0 mb-10">
              I connect agriculture, data, and technology to build practical
              digital solutions.
            </p>

            <div
              role="tablist"
              aria-label="Professional disciplines"
              className="flex flex-wrap justify-center sm:justify-start gap-3 mb-10"
            >
              {roles.map((role) => (
                <button
                  key={role.id}
                  role="tab"
                  aria-selected={role.id === activeId}
                  onClick={() => setActiveId(role.id)}
                  className={`rounded-lg px-5 py-2 text-sm font-medium transition-colors ${
                    role.id === activeId
                      ? "bg-cream text-deep-green"
                      : "bg-paper/10 text-paper/80 hover:bg-paper/20"
                  }`}
                >
                  {role.label}
                </button>
              ))}
            </div>

            <div role="tabpanel" className="min-h-[220px]">
              <h2 className="font-fraunces text-2xl sm:text-3xl mb-4 text-paper">
                {activeRole.headline}
              </h2>
              <p className="text-paper/80 max-w-xl mx-auto sm:mx-0 mb-8">
                {activeRole.description}
              </p>

              <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                {activeRole.skills.map((skill) => (
                  <span key={skill} className="text-xs uppercase tracking-wide text-cream/80">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden sm:block relative h-[600px] -mr-6">
            <Image
              src="/profile-nobg.png"
              alt="Apanka Ayebadek David"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
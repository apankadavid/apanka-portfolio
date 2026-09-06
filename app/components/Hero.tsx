"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
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
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#013E37]/80" />
            </motion.div>
          ))}
       </div>
      </div>
      <div className="relative mx-auto max-w-4xl px-6 py-24 sm:py-32 text-center text-paper">
        <h1 className="font-fraunces text-4xl sm:text-6xl mb-6">
          Apanka Ayebadek David
        </h1>

        <p className="text-lg text-paper/80 max-w-xl mx-auto mb-10">
          I connect agriculture, data, and technology to build practical
          digital solutions.
        </p>

        <div role="tablist" aria-label="Professional disciplines" className="flex flex-wrap justify-center gap-3 mb-10">
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
      </div>
    </section>
  );
}
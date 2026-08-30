"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { roles } from "../data/roles";

export default function Hero() {
  const [activeId, setActiveId] = useState(roles[1].id);
  const activeRole = roles.find((r) => r.id === activeId)!;

  return (
    <motion.section
      animate={{ backgroundColor: activeRole.hex }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="text-paper"
    >
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 text-center">
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
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
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
    </motion.section>
  );
}
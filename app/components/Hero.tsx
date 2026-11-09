"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { roles } from "../data/roles";
import { skillIcons } from "../data/skillIcons";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/apanka-david-600a9a218", Icon: FaLinkedin },
  { label: "GitHub", href: "https://github.com/apankadavid", Icon: FaGithub },
  { label: "Instagram", href: "https://www.instagram.com/apankaadavid", Icon: FaInstagram },
];

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
                alt="My profile picture"
                fill
                priority
                className="object-cover object-[55%_top] sm:object-center"
              />
              <div className="absolute inset-0 bg-[#013E37]/80" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-0 sm:px-6 py-16 sm:pt-8 sm:pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-[70%_30%] sm:min-h-[560px]">
          <div className="text-center sm:text-left sm:self-center py-10 sm:py-0 sm:pr-8 px-6 sm:px-0">
            <p className="text-xs uppercase tracking-widest text-cream/80 mb-5">
              One identity. Multiple disciplines. Real-world impact.
            </p>

            <h1 className="font-fraunces text-4xl sm:text-5xl lg:text-6xl mb-5 text-paper">
              <span className="block text-2xl sm:text-3xl text-paper/70 mb-1">
                Hi, I&apos;m
              </span>
              Apanka Ayebadek David
            </h1>

            <p className="text-lg text-paper/80 max-w-xl mx-auto sm:mx-0 mb-8">
              I connect agriculture, data, and technology to build practical
              digital solutions.
            </p>

            <div
              role="tablist"
              aria-label="Professional disciplines"
              className="flex flex-wrap justify-center sm:justify-start gap-3 mb-8"
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
              <h2 className="font-fraunces text-2xl sm:text-3xl mb-3 text-paper">
                {activeRole.headline}
              </h2>
              <p className="text-paper/80 max-w-xl mx-auto sm:mx-0 mb-6">
                {activeRole.description}
              </p>

              <ul className="flex flex-wrap justify-center sm:justify-start gap-2">
                {activeRole.skills.map((skill) => {
                  const Icon = skillIcons[skill];
                  return (
                    <li
                      key={skill}
                      className="inline-flex items-center gap-2 rounded-lg border border-cream/20 bg-paper/5 px-3 py-2 text-sm text-paper/90"
                    >
                      {Icon && <Icon className="h-4 w-4 text-cream" />}
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-cream text-deep-green px-6 py-3 text-sm font-semibold hover:bg-cream/90 transition-colors"
              >
                View My Work
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-cream/60 text-paper px-6 py-3 text-sm font-semibold hover:bg-paper/10 transition-colors"
              >
                Let&apos;s Work Together
              </Link>
            </div>

            <p className="mt-6 flex items-center justify-center sm:justify-start gap-2 text-sm text-paper/80">
              <span className="h-2 w-2 rounded-full bg-green-400" aria-hidden="true" />
              Available for projects &amp; opportunities
            </p>

            <ul className="mt-5 flex items-center justify-center sm:justify-start gap-4">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-paper/70 hover:text-cream transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden sm:block relative self-stretch -mr-6 sm:-mb-14">
            <div
              className="absolute inset-x-0 bottom-12 aspect-[1023/1537]"
              style={{
                maskImage: "linear-gradient(to bottom, black 82%, transparent 99%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 82%, transparent 99%)",
              }}
            >
              <div className="absolute inset-x-4 top-[30%] bottom-0 rounded-t-lg border border-cream/30 bg-paper/5" />
              <Image
                src="/profile-nobg.png"
                alt="Apanka Ayebadek David"
                fill
                sizes="40vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
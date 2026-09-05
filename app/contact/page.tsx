"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, honeypot }),
      });

      if (!response.ok) throw new Error("Failed");

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="max-w-xl mx-auto py-20 px-6">
      <h1 className="font-fraunces text-4xl mb-4 text-center">Contact</h1>
      <p className="text-center text-ink/70 mb-12">
        Have a project in mind, or just want to talk? Send a message below.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          name="website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div>
          <label htmlFor="name" className="block font-medium mb-1 text-sm">Name</label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-stone/30 rounded-lg p-3"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium mb-1 text-sm">Email</label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-stone/30 rounded-lg p-3"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-medium mb-1 text-sm">Message</label>
          <textarea
            id="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-stone/30 rounded-lg p-3"
          />
        </div>

        {status === "error" && (
          <p className="text-red-700 text-sm">Something went wrong. Please try again.</p>
        )}
        {status === "success" && (
          <p className="text-deep-green text-sm font-medium">
            Message sent. I&apos;ll get back to you soon.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-deep-green text-paper px-6 py-3 rounded-lg font-semibold disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </main>
  );
}
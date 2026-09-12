"use client";

import { useState } from "react";
import Script from "next/script";

export default function CookieBanner() {
  const [consent, setConsent] = useState<"pending" | "accepted" | "declined">(() => {
    if (typeof window === "undefined") {
      return "pending";
    }

    const stored = window.localStorage.getItem("cookie-consent");
    return stored === "accepted" || stored === "declined" ? stored : "pending";
  });

  function handleChoice(choice: "accepted" | "declined") {
    window.localStorage.setItem("cookie-consent", choice);
    setConsent(choice);
  }

  return (
    <>
      {consent === "accepted" && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-BXJ8J49T3Y"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BXJ8J49T3Y');
            `}
          </Script>
        </>
      )}

      {consent === "pending" && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-deep-green text-paper p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-paper/85 max-w-2xl">
            This site uses a small analytics cookie to understand visitor
            traffic. No personal data is sold or shared.{" "}
            <a href="/privacy" className="underline">Learn more</a>.
          </p>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => handleChoice("declined")}
              className="text-sm px-4 py-2 rounded-lg border border-paper/30 hover:bg-paper/10"
            >
              Decline
            </button>
            <button
              onClick={() => handleChoice("accepted")}
              className="text-sm px-4 py-2 rounded-lg bg-cream text-deep-green font-semibold"
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}
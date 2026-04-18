"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function InviteContent() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code") || "";
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    if (!code) {
      setShowFallback(true);
      return;
    }

    // Try scheme redirect (works if app is installed)
    const schemeUrl = `lovetamin://invite?code=${code}`;
    window.location.href = schemeUrl;

    // If scheme doesn't work after 2s, show fallback
    const timer = setTimeout(() => setShowFallback(true), 2000);
    return () => clearTimeout(timer);
  }, [code]);

  if (!showFallback) {
    return (
      <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white mx-auto mb-4" />
          <p className="text-white/60 text-sm">Opening Lovetamin...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-white mb-2">
          Partner Invite
        </h1>

        {code ? (
          <>
            <p className="text-white/60 text-sm mb-8">
              Someone invited you to join them on Lovetamin.
            </p>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-6 border border-white/10">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-2">
                Your Invite Code
              </p>
              <p className="text-4xl font-bold text-white tracking-[0.3em]">
                {code.toUpperCase()}
              </p>
            </div>

            <a
              href={`lovetamin://invite?code=${code}`}
              className="inline-block w-full py-4 px-8 bg-gradient-to-r from-[#667EEA] to-[#764BA2] text-white font-semibold rounded-full text-center mb-4 hover:opacity-90 transition-opacity"
            >
              Open in Lovetamin
            </a>

            <p className="text-white/40 text-xs">
              Don&apos;t have the app?{" "}
              <a
                href="https://apps.apple.com/app/lovetamin/id6740043978"
                className="text-white/60 underline"
              >
                Download from the App Store
              </a>
            </p>
          </>
        ) : (
          <p className="text-white/60 text-sm">
            This invite link appears to be invalid. Ask your partner to share a new one.
          </p>
        )}
      </div>
    </div>
  );
}

export default function InvitePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center">
          <p className="text-white/60 text-sm">Loading...</p>
        </div>
      }
    >
      <InviteContent />
    </Suspense>
  );
}

"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    window.location.replace("/portfolio/");
  }, []);

  return (
    <main className="section-shell flex min-h-screen items-center justify-center py-20">
      <p className="text-sm font-semibold text-muted dark:text-white">Redirecting to portfolio...</p>
    </main>
  );
}

const tavernCards = [
  {
    label: "The Armoury",
    title: "Costumes & Props",
    text: "Finished builds, armor pieces, weapons, accessories and the details that make a character believable."
  },
  {
    label: "Quest Board",
    title: "Work in Progress",
    text: "Current builds, materials, experiments and the inevitable repairs that happen along the way."
  },
  {
    label: "The Chronicle",
    title: "Gallery",
    text: "Convention photos, completed looks and memorable appearances will be collected here."
  }
];

export default function Page() {
  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[#140b07] text-[#f4dfad]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 18% 18%, rgba(181,104,45,0.22), transparent 26rem), radial-gradient(circle at 85% 8%, rgba(126,54,26,0.22), transparent 24rem), repeating-linear-gradient(90deg, rgba(255,255,255,0.018) 0, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 96px)"
      }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-8 border-b border-[#5f321d] bg-[#2a150d] shadow-[0_12px_30px_rgba(0,0,0,0.45)]" />
      <div className="pointer-events-none absolute left-[7%] top-0 h-full w-5 bg-[#241209]/90 shadow-[8px_0_20px_rgba(0,0,0,0.28)]" />
      <div className="pointer-events-none absolute right-[7%] top-0 h-full w-5 bg-[#241209]/90 shadow-[-8px_0_20px_rgba(0,0,0,0.28)]" />
      <div className="pointer-events-none absolute left-[16%] top-24 h-44 w-44 rounded-full bg-[#e89b45]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[14%] top-48 h-56 w-56 rounded-full bg-[#e7b65a]/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between border-b border-[#6b4328] pb-5">
          <a href="/portfolio" className="font-serif text-sm font-bold uppercase tracking-[0.2em] text-[#d7b879] transition hover:text-white">
            Viktor Iliev
          </a>
          <a
            href="/portfolio"
            className="rounded-md border border-[#8d6039] bg-[#2b160d] px-4 py-2 font-serif text-xs font-bold uppercase tracking-[0.16em] text-[#e6cb92] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] transition hover:bg-[#3a2115]"
          >
            Leave Tavern
          </a>
        </header>

        <section className="py-16 text-center sm:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="mx-auto mb-8 flex w-fit items-center gap-4 text-[#a87843]">
              <span className="h-px w-12 bg-[#7d5230]" />
              <span className="font-serif text-sm uppercase tracking-[0.32em]">Est. in many late nights</span>
              <span className="h-px w-12 bg-[#7d5230]" />
            </div>

            <div className="relative mx-auto max-w-3xl border-[3px] border-[#6d4428] bg-[#2a160e] px-6 py-12 shadow-[0_24px_60px_rgba(0,0,0,0.5),inset_0_0_60px_rgba(141,82,38,0.12)] sm:px-10 sm:py-16">
              <div className="pointer-events-none absolute inset-2 border border-[#9a6a3c]/50" />
              <p className="relative font-serif text-sm font-bold uppercase tracking-[0.35em] text-[#c89455]">Welcome, traveler</p>
              <h1 className="relative mt-5 font-serif text-6xl font-bold leading-[0.9] tracking-[-0.045em] text-[#f1d69b] sm:text-7xl lg:text-8xl">
                The Cosplay<br />Tavern
              </h1>
              <div className="relative mx-auto mt-7 flex max-w-md items-center gap-4 text-[#bd884d]">
                <span className="h-px flex-1 bg-[#7d5230]" />
                <span className="text-xl">✦</span>
                <span className="h-px flex-1 bg-[#7d5230]" />
              </div>
              <p className="relative mx-auto mt-7 max-w-xl font-serif text-base leading-8 text-[#cdb787] sm:text-lg">
                A corner for costumes, props, armor and every strange project that starts with “I can probably make that.”
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="mb-9 text-center">
            <p className="font-serif text-xs font-bold uppercase tracking-[0.3em] text-[#a87843]">Choose a table</p>
            <h2 className="mt-3 font-serif text-4xl font-bold text-[#eed49b] sm:text-5xl">Inside the tavern</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {tavernCards.map((card, index) => (
              <article
                key={card.label}
                className="group relative min-h-80 border border-[#795035] bg-[#efe0ba] p-7 text-[#3b2418] shadow-[0_16px_35px_rgba(0,0,0,0.32)] transition duration-300 hover:-translate-y-1"
                style={{ transform: `rotate(${[-1.3, 0.8, -0.5][index]}deg)` }}
              >
                <div className="pointer-events-none absolute inset-2 border border-[#9a7550]/45" />
                <div className="relative">
                  <p className="font-serif text-xs font-bold uppercase tracking-[0.26em] text-[#8d5934]">{card.label}</p>
                  <div className="my-6 h-px bg-[#a98059]/55" />
                  <h3 className="font-serif text-3xl font-bold leading-tight">{card.title}</h3>
                  <p className="mt-5 font-serif text-sm leading-7 text-[#5b4030]">{card.text}</p>
                  <p className="mt-10 font-serif text-xs font-bold uppercase tracking-[0.22em] text-[#9a6b43]">Entries coming soon</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[#603d27] py-16">
          <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-serif text-xs font-bold uppercase tracking-[0.28em] text-[#9d7044]">Current quest</p>
              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-[#efd59a] sm:text-5xl">The board is waiting for its first tale.</h2>
              <p className="mt-5 max-w-xl font-serif leading-8 text-[#bfa879]">
                This page will grow into a proper build archive with progress photos, finished costumes and notes from each project.
              </p>
            </div>

            <div className="relative border-8 border-[#3d2115] bg-[#4b2b1d] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.4)]">
              <div className="border border-[#7c5335] bg-[#d8c397] p-7 text-[#3b261a] shadow-[inset_0_0_30px_rgba(79,46,25,0.12)]">
                <p className="font-serif text-xs font-bold uppercase tracking-[0.25em] text-[#805535]">Notice Board</p>
                <p className="mt-5 font-serif text-2xl font-bold">Wanted: more costumes, more props, fewer unfinished projects.</p>
                <p className="mt-5 font-serif text-sm leading-7 text-[#5b4130]">Reward: one suspiciously expensive convention weekend.</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-3 py-9 font-serif text-xs uppercase tracking-[0.18em] text-[#85603d] sm:flex-row sm:items-center sm:justify-between">
          <span>Viktor Iliev / Cosplay Tavern</span>
          <span>Gallery under construction</span>
        </footer>
      </div>
    </main>
  );
}

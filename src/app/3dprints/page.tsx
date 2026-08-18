const printCards = [
  { number: "01", title: "Props", text: "Wearable parts, replicas and display pieces built layer by layer." },
  { number: "02", title: "Functional", text: "Practical prints, custom parts and small solutions for everyday problems." },
  { number: "03", title: "Experiments", text: "Material tests, mechanisms, prototypes and ideas that are still evolving." }
];

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f2efe8] text-[#171717]">
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#ff7657]/70 blur-3xl" />
      <div className="pointer-events-none absolute right-[-8rem] top-[-4rem] h-96 w-96 rounded-full bg-[#5f5ce6]/35 blur-3xl" />
      <div className="pointer-events-none absolute bottom-24 left-1/2 h-80 w-80 rounded-full bg-[#54d4c5]/35 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-6 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between border-b border-black/15 pb-5">
          <a href="/portfolio" className="text-sm font-black uppercase tracking-[0.2em] transition hover:opacity-60">
            VI / 3D
          </a>
          <a
            href="/portfolio"
            className="rounded-full border border-black/20 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] backdrop-blur transition hover:bg-black hover:text-white"
          >
            Portfolio
          </a>
        </header>

        <section className="grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.32em] text-[#e34f35]">3D printing / workshop</p>
            <h1 className="mt-6 max-w-4xl text-6xl font-black uppercase leading-[0.86] tracking-[-0.07em] sm:text-7xl lg:text-[7rem]">
              Form.<br />Layer.<br />Object.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-black/65 sm:text-lg">
              A small archive of things I design, print, test and occasionally rebuild from scratch.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Bambu Lab P1S", "PLA / PETG", "Prototyping", "Props"].map((item) => (
                <span key={item} className="rounded-full border border-black/15 bg-white/55 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[560px]">
            <div className="absolute inset-[7%] rotate-[-7deg] rounded-[3rem] border-2 border-black bg-[#ffd755] shadow-[18px_18px_0_#171717]" />
            <div className="absolute left-[21%] top-[12%] h-[66%] w-[56%] rotate-[8deg] rounded-[2.5rem] border-2 border-black bg-[#ff7657] shadow-[14px_14px_0_rgba(23,23,23,0.95)]" />
            <div className="absolute left-[33%] top-[22%] flex h-[54%] w-[42%] flex-col items-center justify-center gap-3 rounded-[2rem] border-2 border-black bg-[#5f5ce6]">
              {[0, 1, 2, 3, 4, 5].map((layer) => (
                <div
                  key={layer}
                  className="h-5 rounded-full border-2 border-black bg-[#f2efe8]"
                  style={{ width: `${82 - layer * 8}%` }}
                />
              ))}
              <p className="mt-2 text-xs font-black uppercase tracking-[0.22em] text-white">Layer by layer</p>
            </div>
            <div className="absolute bottom-[8%] right-[2%] rounded-full border-2 border-black bg-[#54d4c5] px-6 py-4 text-sm font-black uppercase tracking-[0.15em] shadow-[8px_8px_0_#171717]">
              Make it real
            </div>
          </div>
        </section>

        <section className="border-t border-black/15 py-16">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-black/45">What lives here</p>
              <h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.04em] sm:text-5xl">The print shelf</h2>
            </div>
            <p className="hidden max-w-sm text-right text-sm leading-6 text-black/55 md:block">Projects and photos will be added as the collection grows.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {printCards.map((card, index) => (
              <article
                key={card.number}
                className="min-h-64 rounded-[2rem] border-2 border-black p-6 shadow-[8px_8px_0_#171717]"
                style={{ backgroundColor: ["#ffd755", "#54d4c5", "#ff7657"][index] }}
              >
                <p className="text-xs font-black uppercase tracking-[0.22em]">{card.number}</p>
                <h3 className="mt-20 text-3xl font-black uppercase tracking-[-0.04em]">{card.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-black/70">{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-black/15 py-16">
          <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[2rem] border border-black/15 bg-white/60 p-8 backdrop-blur sm:p-10">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#5f5ce6]">Gallery</p>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em]">Prints incoming.</h2>
              <p className="mt-5 max-w-xl leading-7 text-black/60">
                Finished models, work-in-progress photos and print notes will live here. For now, this is the workshop door.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[2rem] border-2 border-black bg-[#171717] p-6 text-[#f2efe8]">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">Status</p>
                <p className="mt-12 text-3xl font-black uppercase">Building</p>
              </div>
              <div className="rounded-[2rem] border-2 border-black bg-[#5f5ce6] p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">Archive</p>
                <p className="mt-12 text-3xl font-black uppercase">Soon</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-3 border-t border-black/15 py-8 text-xs font-bold uppercase tracking-[0.18em] text-black/45 sm:flex-row sm:items-center sm:justify-between">
          <span>Viktor Iliev / 3D Prints</span>
          <span>Designed to be filled with projects</span>
        </footer>
      </div>
    </main>
  );
}

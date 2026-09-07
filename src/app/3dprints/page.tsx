const printCards = [
  {
    number: "01",
    title: "Props",
    text: "Wearable parts, replicas and display pieces built layer by layer.",
    color: "bg-[#e32636]",
    shadow: "shadow-[10px_10px_0_#163e8f]",
  },
  {
    number: "02",
    title: "Functional",
    text: "Practical prints, custom parts and small solutions for everyday problems.",
    color: "bg-[#1f5bb7]",
    shadow: "shadow-[10px_10px_0_#e32636]",
  },
  {
    number: "03",
    title: "Experiments",
    text: "Material tests, mechanisms, prototypes and ideas that are still evolving.",
    color: "bg-[#d7dbe0] text-[#111827]",
    shadow: "shadow-[10px_10px_0_#111827]",
  },
];

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f6f0df] text-[#101010]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.13] [background-image:radial-gradient(#111_1.2px,transparent_1.2px)] [background-size:12px_12px]" />
      <div className="pointer-events-none absolute left-[-8rem] top-24 h-80 w-80 rotate-12 bg-[#e32636]/20 [clip-path:polygon(0_0,100%_20%,78%_100%,18%_76%)]" />
      <div className="pointer-events-none absolute right-[-7rem] top-[-4rem] h-96 w-96 -rotate-12 bg-[#1f5bb7]/18 [clip-path:polygon(10%_0,100%_18%,88%_100%,0_76%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-6 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between border-b-[4px] border-black pb-5">
          <a href="/portfolio" className="group flex items-center gap-3 font-black uppercase tracking-[0.18em]">
            <span className="grid h-11 w-11 place-items-center border-[3px] border-black bg-[#e32636] text-sm text-white shadow-[4px_4px_0_#1f5bb7] transition group-hover:-translate-y-1">
              VI
            </span>
            <span>3D PRINTS</span>
          </a>
          <a
            href="/portfolio"
            className="border-[3px] border-black bg-[#f9d33a] px-5 py-2 text-xs font-black uppercase tracking-[0.14em] shadow-[5px_5px_0_#111] transition hover:-translate-y-1 hover:shadow-[7px_7px_0_#111]"
          >
            Portfolio
          </a>
        </header>

        <section className="grid items-center gap-12 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
          <div>
            <div className="inline-block -rotate-2 border-[3px] border-black bg-[#f9d33a] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] shadow-[5px_5px_0_#111]">
              3D printing / workshop
            </div>

            <h1 className="mt-8 max-w-4xl text-6xl font-black uppercase leading-[0.82] tracking-[-0.06em] sm:text-7xl lg:text-[7rem]">
              <span className="block text-[#e32636] [text-shadow:4px_4px_0_#111]">Form.</span>
              <span className="block text-[#1f5bb7] [text-shadow:4px_4px_0_#111]">Layer.</span>
              <span className="block text-[#d7dbe0] [-webkit-text-stroke:3px_#111] [text-shadow:4px_4px_0_#e32636]">Object.</span>
            </h1>

            <p className="mt-8 max-w-xl border-l-[6px] border-[#e32636] pl-5 text-base font-bold leading-7 sm:text-lg">
              A retro workshop archive for props, practical parts, prototypes and anything worth turning from pixels into plastic.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Bambu Lab P1S", "PLA / PETG", "Prototyping", "Props"].map((item, index) => (
                <span
                  key={item}
                  className={`border-[3px] border-black px-4 py-2 text-[11px] font-black uppercase tracking-[0.12em] shadow-[4px_4px_0_#111] ${
                    index % 2 === 0 ? "bg-[#e32636] text-white" : "bg-[#1f5bb7] text-white"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto aspect-[1.05/1] w-full max-w-[620px]">
            <div className="absolute inset-[4%] rotate-[-2deg] border-[5px] border-black bg-[#1f5bb7] shadow-[14px_14px_0_#111] [clip-path:polygon(14%_0,86%_0,100%_16%,94%_83%,80%_100%,20%_100%,6%_83%,0_16%)]" />
            <div className="absolute inset-[9%] border-[4px] border-black bg-[#d7dbe0] [clip-path:polygon(14%_0,86%_0,100%_16%,94%_83%,80%_100%,20%_100%,6%_83%,0_16%)]" />

            <div className="absolute left-[11%] top-[15%] h-[38%] w-[36%] border-[4px] border-black bg-[#e32636] shadow-[6px_6px_0_#7f1420] [clip-path:polygon(10%_0,100%_10%,84%_100%,0_84%)]" />
            <div className="absolute right-[11%] top-[15%] h-[38%] w-[36%] border-[4px] border-black bg-[#e32636] shadow-[-6px_6px_0_#7f1420] [clip-path:polygon(0_10%,90%_0,100%_84%,16%_100%)]" />

            <div className="absolute left-[20%] top-[22%] h-[16%] w-[24%] -skew-x-6 border-[4px] border-black bg-[#8ed7ff]" />
            <div className="absolute right-[20%] top-[22%] h-[16%] w-[24%] skew-x-6 border-[4px] border-black bg-[#8ed7ff]" />

            <div className="absolute left-1/2 top-[45%] h-[34%] w-[50%] -translate-x-1/2 border-[4px] border-black bg-[#8d959e] [clip-path:polygon(10%_0,90%_0,100%_18%,88%_100%,12%_100%,0_18%)]">
              <div className="absolute inset-x-[12%] top-[18%] space-y-2">
                {[0, 1, 2, 3, 4].map((line) => (
                  <div key={line} className="h-[8px] border-[2px] border-black bg-[#353b42]" />
                ))}
              </div>
              <div className="absolute bottom-[7%] left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-black uppercase tracking-[0.24em]">
                Layer by layer
              </div>
            </div>

            <div className="absolute left-[14%] top-[11%] h-5 w-5 rounded-full border-[3px] border-black bg-[#f9d33a]" />
            <div className="absolute right-[14%] top-[11%] h-5 w-5 rounded-full border-[3px] border-black bg-[#f9d33a]" />

            <div className="absolute bottom-[7%] left-[6%] h-[13%] w-[25%] border-[4px] border-black bg-[#1f5bb7] [clip-path:polygon(12%_0,100%_0,84%_100%,0_82%)]" />
            <div className="absolute bottom-[7%] right-[6%] h-[13%] w-[25%] border-[4px] border-black bg-[#1f5bb7] [clip-path:polygon(0_0,88%_0,100%_82%,16%_100%)]" />

            <div className="absolute bottom-[-1%] left-1/2 -translate-x-1/2 -rotate-2 border-[4px] border-black bg-[#f9d33a] px-6 py-3 text-xs font-black uppercase tracking-[0.18em] shadow-[6px_6px_0_#111]">
              Make it real!
            </div>
          </div>
        </section>

        <section className="border-t-[4px] border-black py-16">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#e32636]">Workshop inventory</p>
              <h2 className="mt-2 text-4xl font-black uppercase tracking-[-0.04em] sm:text-5xl">The print shelf</h2>
            </div>
            <div className="hidden -rotate-1 border-[3px] border-black bg-white px-4 py-3 text-right text-sm font-bold shadow-[5px_5px_0_#111] md:block">
              More builds incoming.
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {printCards.map((card) => (
              <article
                key={card.number}
                className={`relative min-h-72 border-[4px] border-black p-6 ${card.color} ${card.shadow}`}
              >
                <div className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full border-[3px] border-black bg-[#f9d33a] text-sm font-black">
                  {card.number}
                </div>
                <div className="mt-16 h-[5px] w-16 bg-black" />
                <h3 className="mt-5 text-3xl font-black uppercase tracking-[-0.04em]">{card.title}</h3>
                <p className="mt-3 max-w-xs text-sm font-bold leading-6 opacity-80">{card.text}</p>
                <div className="pointer-events-none absolute bottom-4 right-4 h-16 w-16 opacity-20 [background-image:radial-gradient(#000_2px,transparent_2px)] [background-size:8px_8px]" />
              </article>
            ))}
          </div>
        </section>

        <section className="border-t-[4px] border-black py-16">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative border-[4px] border-black bg-white p-8 shadow-[10px_10px_0_#1f5bb7] sm:p-10">
              <div className="absolute -right-3 -top-4 rotate-3 border-[3px] border-black bg-[#e32636] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white shadow-[4px_4px_0_#111]">
                Archive bay
              </div>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em]">Prints incoming!</h2>
              <p className="mt-5 max-w-xl font-bold leading-7 text-black/70">
                Finished models, work-in-progress photos and print notes will live here. For now, this is the workshop door.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="border-[4px] border-black bg-[#e32636] p-6 text-white shadow-[7px_7px_0_#111]">
                <p className="text-xs font-black uppercase tracking-[0.18em]">Status</p>
                <p className="mt-12 text-3xl font-black uppercase">Building</p>
              </div>
              <div className="border-[4px] border-black bg-[#1f5bb7] p-6 text-white shadow-[7px_7px_0_#111]">
                <p className="text-xs font-black uppercase tracking-[0.18em]">Archive</p>
                <p className="mt-12 text-3xl font-black uppercase">Soon</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-3 border-t-[4px] border-black py-8 text-xs font-black uppercase tracking-[0.16em] sm:flex-row sm:items-center sm:justify-between">
          <span>Viktor Iliev / 3D Prints</span>
          <span className="text-[#1f5bb7]">Retro G1 workshop mode</span>
        </footer>
      </div>
    </main>
  );
}

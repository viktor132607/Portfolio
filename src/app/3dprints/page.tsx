const printCards = [
  {
    number: "01",
    title: "Props",
    text: "Wearable parts, replicas and display pieces built layer by layer.",
    bg: "bg-[#e3312d]",
    kick: "bg-[#1d4fa3]",
  },
  {
    number: "02",
    title: "Functional",
    text: "Practical prints, custom parts and small solutions for everyday problems.",
    bg: "bg-[#1d4fa3]",
    kick: "bg-[#e3312d]",
  },
  {
    number: "03",
    title: "Experiments",
    text: "Material tests, mechanisms, prototypes and ideas that are still evolving.",
    bg: "bg-[#cfd4d8] text-[#111]",
    kick: "bg-[#f2c94c]",
  },
];

const tags = ["Bambu Lab P1S", "PLA / PETG", "Prototyping", "Props"];

function Bolt({ className = "" }: { className?: string }) {
  return <span className={`absolute h-4 w-4 rounded-full border-[3px] border-black bg-[#f2c94c] ${className}`} />;
}

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4eedc] text-[#111]">
      <div className="fixed inset-0 -z-10 opacity-[0.15] [background-image:radial-gradient(#111_1.5px,transparent_1.5px)] [background-size:10px_10px]" />

      <div className="mx-auto w-full max-w-[1380px] px-4 py-4 sm:px-6 lg:px-8">
        <header className="relative flex items-center justify-between border-[4px] border-black bg-[#f4eedc] px-4 py-3 shadow-[7px_7px_0_#111]">
          <a href="/portfolio" className="flex items-center gap-3 font-black uppercase tracking-[0.16em]">
            <span className="grid h-11 w-11 rotate-[-3deg] place-items-center border-[4px] border-black bg-[#e3312d] text-sm text-white shadow-[4px_4px_0_#1d4fa3]">VI</span>
            <span>3D PRINTS</span>
          </a>
          <a href="/portfolio" className="rotate-[1deg] border-[4px] border-black bg-[#f2c94c] px-5 py-2 text-xs font-black uppercase tracking-[0.14em] shadow-[4px_4px_0_#111] transition hover:-translate-y-1">
            Portfolio
          </a>
        </header>

        <section className="relative mt-7 overflow-hidden border-[5px] border-black bg-[#6db9e8] shadow-[11px_11px_0_#111]">
          <div className="absolute inset-0 opacity-[0.16] [background-image:radial-gradient(#111_2px,transparent_2px)] [background-size:14px_14px]" />
          <div className="absolute -left-24 -top-20 h-80 w-80 rotate-12 border-[5px] border-black bg-[#e3312d] [clip-path:polygon(0_10%,100%_0,78%_100%,10%_82%)]" />
          <div className="absolute -right-28 bottom-[-5rem] h-96 w-96 -rotate-6 border-[5px] border-black bg-[#1d4fa3] [clip-path:polygon(12%_0,100%_12%,82%_100%,0_80%)]" />

          <div className="relative grid min-h-[680px] items-center gap-8 px-6 py-10 md:px-10 lg:grid-cols-[0.88fr_1.12fr] lg:px-14 lg:py-14">
            <div className="relative z-10">
              <div className="inline-block rotate-[-2deg] border-[4px] border-black bg-[#f2c94c] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] shadow-[5px_5px_0_#111]">
                Retro G1 workshop
              </div>

              <h1 className="mt-8 max-w-3xl font-black uppercase leading-[0.78] tracking-[-0.07em]">
                <span className="block text-[4.6rem] text-[#e3312d] [-webkit-text-stroke:4px_#111] [text-shadow:7px_7px_0_#f4eedc] sm:text-[6.4rem] lg:text-[7.4rem]">PRINT.</span>
                <span className="block text-[4.6rem] text-[#f4eedc] [-webkit-text-stroke:4px_#111] [text-shadow:7px_7px_0_#1d4fa3] sm:text-[6.4rem] lg:text-[7.4rem]">BUILD.</span>
                <span className="block text-[4.6rem] text-[#1d4fa3] [-webkit-text-stroke:4px_#111] [text-shadow:7px_7px_0_#e3312d] sm:text-[6.4rem] lg:text-[7.4rem]">CREATE.</span>
              </h1>

              <div className="mt-8 max-w-xl rotate-[1deg] border-[4px] border-black bg-white p-5 shadow-[6px_6px_0_#111]">
                <p className="text-base font-black leading-7 sm:text-lg">
                  Props, prototypes and practical parts — designed digitally, built layer by layer, finished by hand.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                {tags.map((tag, index) => (
                  <span key={tag} className={`border-[3px] border-black px-4 py-2 text-[11px] font-black uppercase tracking-[0.12em] shadow-[4px_4px_0_#111] ${index % 2 === 0 ? "bg-[#e3312d] text-white" : "bg-[#1d4fa3] text-white"}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto aspect-[0.95/1] w-full max-w-[610px]">
              <div className="absolute inset-[3%] rotate-[1deg] border-[5px] border-black bg-[#f4eedc] shadow-[10px_10px_0_#111] [clip-path:polygon(16%_0,84%_0,100%_14%,96%_83%,80%_100%,20%_100%,4%_83%,0_14%)]" />

              <div className="absolute left-[9%] top-[12%] h-[35%] w-[39%] border-[5px] border-black bg-[#e3312d] [clip-path:polygon(10%_0,100%_12%,86%_100%,0_82%)]" />
              <div className="absolute right-[9%] top-[12%] h-[35%] w-[39%] border-[5px] border-black bg-[#e3312d] [clip-path:polygon(0_12%,90%_0,100%_82%,14%_100%)]" />

              <div className="absolute left-[18%] top-[20%] h-[16%] w-[27%] -skew-x-[9deg] border-[5px] border-black bg-[#9be1ff] shadow-[inset_0_-10px_0_rgba(29,79,163,.22)]" />
              <div className="absolute right-[18%] top-[20%] h-[16%] w-[27%] skew-x-[9deg] border-[5px] border-black bg-[#9be1ff] shadow-[inset_0_-10px_0_rgba(29,79,163,.22)]" />

              <div className="absolute left-1/2 top-[41%] h-[38%] w-[52%] -translate-x-1/2 border-[5px] border-black bg-[#a8afb5] [clip-path:polygon(10%_0,90%_0,100%_16%,88%_100%,12%_100%,0_16%)]">
                <div className="absolute inset-x-[12%] top-[17%] space-y-2">
                  {[0, 1, 2, 3, 4, 5].map((line) => (
                    <div key={line} className="h-[9px] border-[3px] border-black bg-[#3c434a]" />
                  ))}
                </div>
              </div>

              <div className="absolute left-[6%] top-[50%] h-[27%] w-[25%] rotate-[-7deg] border-[5px] border-black bg-[#1d4fa3] [clip-path:polygon(18%_0,100%_12%,80%_100%,0_86%)]" />
              <div className="absolute right-[6%] top-[50%] h-[27%] w-[25%] rotate-[7deg] border-[5px] border-black bg-[#1d4fa3] [clip-path:polygon(0_12%,82%_0,100%_86%,20%_100%)]" />

              <div className="absolute bottom-[4%] left-[17%] h-[18%] w-[25%] border-[5px] border-black bg-[#e3312d]" />
              <div className="absolute bottom-[4%] right-[17%] h-[18%] w-[25%] border-[5px] border-black bg-[#e3312d]" />

              <Bolt className="left-[13%] top-[8%]" />
              <Bolt className="right-[13%] top-[8%]" />
              <Bolt className="left-[8%] bottom-[21%]" />
              <Bolt className="right-[8%] bottom-[21%]" />

              <div className="absolute bottom-[-2%] left-1/2 -translate-x-1/2 rotate-[-2deg] border-[5px] border-black bg-[#f2c94c] px-7 py-3 text-sm font-black uppercase tracking-[0.15em] shadow-[6px_6px_0_#111]">
                Layer by layer!
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 border-[5px] border-black bg-[#f4eedc] p-5 shadow-[9px_9px_0_#111] md:p-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="inline-block rotate-[-1deg] bg-[#111] px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white">Workshop inventory</div>
              <h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.05em] sm:text-6xl">The print shelf</h2>
            </div>
            <div className="rotate-[2deg] border-[4px] border-black bg-[#f2c94c] px-4 py-3 text-sm font-black uppercase shadow-[5px_5px_0_#111]">More builds incoming</div>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {printCards.map((card, index) => (
              <article key={card.number} className={`relative min-h-[320px] overflow-hidden border-[5px] border-black p-6 ${card.bg} shadow-[8px_8px_0_#111]`}>
                <div className={`absolute -right-10 -top-10 h-32 w-32 rotate-45 border-[5px] border-black ${card.kick}`} />
                <div className="absolute right-4 top-4 grid h-14 w-14 place-items-center rounded-full border-[4px] border-black bg-[#f2c94c] text-lg font-black text-[#111]">{card.number}</div>
                <div className="mt-16 h-[6px] w-20 bg-black" />
                <h3 className="mt-5 text-4xl font-black uppercase tracking-[-0.05em]">{card.title}</h3>
                <p className="mt-4 max-w-xs text-sm font-black leading-6 opacity-80">{card.text}</p>
                <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full opacity-[0.18] [background-image:radial-gradient(#000_2px,transparent_2px)] [background-size:9px_9px]" />
                {index < 2 && <div className="absolute bottom-5 right-5 rotate-[-4deg] border-[3px] border-black bg-white px-3 py-1 text-[10px] font-black uppercase text-black shadow-[3px_3px_0_#111]">Build mode</div>}
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative border-[5px] border-black bg-white p-8 shadow-[9px_9px_0_#1d4fa3] sm:p-10">
            <div className="absolute -right-3 -top-4 rotate-[2deg] border-[4px] border-black bg-[#e3312d] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white shadow-[4px_4px_0_#111]">Archive bay</div>
            <h2 className="text-4xl font-black uppercase tracking-[-0.05em] sm:text-5xl">Prints incoming!</h2>
            <p className="mt-5 max-w-2xl text-base font-black leading-7 text-black/70">Finished models, work-in-progress photos and print notes will live here. The page is now built like a loud 80s Saturday-morning robot comic panel instead of a modern tech landing page.</p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="border-[5px] border-black bg-[#e3312d] p-6 text-white shadow-[7px_7px_0_#111]">
              <p className="text-xs font-black uppercase tracking-[0.16em]">Status</p>
              <p className="mt-12 text-3xl font-black uppercase">Building</p>
            </div>
            <div className="border-[5px] border-black bg-[#1d4fa3] p-6 text-white shadow-[7px_7px_0_#111]">
              <p className="text-xs font-black uppercase tracking-[0.16em]">Archive</p>
              <p className="mt-12 text-3xl font-black uppercase">Soon</p>
            </div>
          </div>
        </section>

        <footer className="mt-10 flex flex-col gap-3 border-t-[5px] border-black py-8 text-xs font-black uppercase tracking-[0.16em] sm:flex-row sm:items-center sm:justify-between">
          <span>Viktor Iliev / 3D Prints</span>
          <span className="text-[#1d4fa3]">OG cartoon robot workshop</span>
        </footer>
      </div>
    </main>
  );
}

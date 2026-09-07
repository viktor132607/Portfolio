const printCards = [
  {
    number: "01",
    title: "Props",
    text: "Wearable parts, replicas and display pieces built layer by layer.",
    color: "bg-[#e5272b]",
  },
  {
    number: "02",
    title: "Functional",
    text: "Practical prints, custom parts and small solutions for everyday problems.",
    color: "bg-[#f0f1f2] text-[#101010]",
  },
  {
    number: "03",
    title: "Experiments",
    text: "Material tests, mechanisms, prototypes and ideas that are still evolving.",
    color: "bg-[#224ca0]",
  },
];

const tags = ["Bambu Lab P1S", "PLA / PETG", "Prototyping", "Props"];

const steps = [
  "left-[0%] w-[13%] h-5",
  "left-[14%] w-[8%] h-9",
  "left-[24%] w-[12%] h-3",
  "left-[38%] w-[9%] h-7",
  "left-[49%] w-[10%] h-4",
  "left-[65%] w-[7%] h-8",
  "left-[74%] w-[15%] h-4",
  "left-[91%] w-[8%] h-6",
];

function Bolt({ className = "" }: { className?: string }) {
  return <span className={`absolute h-3 w-3 rounded-full border-2 border-black bg-[#f1d43a] ${className}`} />;
}

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#4650cf] text-white">
      <div className="absolute inset-x-0 top-0 h-24 bg-[#f51e29]" />
      {steps.map((step, index) => (
        <div key={index} className={`absolute top-20 bg-[#f51e29] ${step}`} />
      ))}

      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#000_1.2px,transparent_1.2px)] [background-size:9px_9px]" />

      <div className="relative mx-auto w-full max-w-[1380px] px-4 py-5 sm:px-6 lg:px-8">
        <header className="flex min-h-16 items-center justify-between border-b-[4px] border-black/80 pb-4 text-white">
          <a href="/portfolio" className="flex items-center gap-3 font-black uppercase tracking-[0.16em]">
            <span className="grid h-12 w-12 place-items-center border-[4px] border-black bg-[#d9dde1] text-sm text-[#e5272b] shadow-[5px_5px_0_#193f8e]">VI</span>
            <span>3D PRINTS</span>
          </a>
          <a href="/portfolio" className="border-[4px] border-black bg-[#f0f1f2] px-5 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#101010] shadow-[5px_5px_0_#193f8e] transition hover:-translate-y-1">
            Portfolio
          </a>
        </header>

        <section className="grid items-center gap-10 pb-14 pt-16 lg:grid-cols-[0.86fr_1.14fr] lg:pb-20 lg:pt-20">
          <div className="relative z-10">
            <div className="inline-block border-[4px] border-black bg-[#f0f1f2] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#17397f] shadow-[5px_5px_0_#101010]">
              80s robot workshop
            </div>

            <h1 className="mt-7 max-w-3xl font-black uppercase leading-[0.8] tracking-[-0.065em]">
              <span className="block text-[4.7rem] text-[#f0f1f2] [-webkit-text-stroke:4px_#101010] [text-shadow:6px_6px_0_#e5272b] sm:text-[6.5rem] lg:text-[7.5rem]">PRINT.</span>
              <span className="block text-[4.7rem] text-[#e5272b] [-webkit-text-stroke:4px_#101010] [text-shadow:6px_6px_0_#f0f1f2] sm:text-[6.5rem] lg:text-[7.5rem]">BUILD.</span>
              <span className="block text-[4.7rem] text-[#86d8ff] [-webkit-text-stroke:4px_#101010] [text-shadow:6px_6px_0_#17397f] sm:text-[6.5rem] lg:text-[7.5rem]">CREATE.</span>
            </h1>

            <div className="mt-8 max-w-xl border-[4px] border-black bg-[#f0f1f2] p-5 text-[#101010] shadow-[7px_7px_0_#101010]">
              <p className="text-base font-black leading-7 sm:text-lg">
                Props, prototypes and practical parts — designed digitally, built layer by layer, finished by hand.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {tags.map((tag, index) => (
                <span
                  key={tag}
                  className={`border-[3px] border-black px-4 py-2 text-[11px] font-black uppercase tracking-[0.12em] shadow-[4px_4px_0_#101010] ${
                    index % 2 === 0 ? "bg-[#e5272b]" : "bg-[#f0f1f2] text-[#17397f]"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto aspect-[1.05/1] w-full max-w-[650px]">
            <div className="absolute inset-x-[9%] top-[5%] h-[31%] border-[5px] border-black bg-[#e5272b] shadow-[10px_10px_0_#101010] [clip-path:polygon(8%_0,92%_0,100%_17%,96%_100%,4%_100%,0_17%)]" />

            <div className="absolute left-[15%] top-[14%] h-[18%] w-[31%] -skew-x-[8deg] border-[5px] border-black bg-[#91dcff] shadow-[inset_0_-9px_0_#64b6e5]" />
            <div className="absolute right-[15%] top-[14%] h-[18%] w-[31%] skew-x-[8deg] border-[5px] border-black bg-[#91dcff] shadow-[inset_0_-9px_0_#64b6e5]" />

            <div className="absolute left-[5%] top-[31%] h-[34%] w-[28%] border-[5px] border-black bg-[#e5272b] [clip-path:polygon(7%_0,100%_10%,85%_100%,0_86%)]" />
            <div className="absolute right-[5%] top-[31%] h-[34%] w-[28%] border-[5px] border-black bg-[#e5272b] [clip-path:polygon(0_10%,93%_0,100%_86%,15%_100%)]" />

            <div className="absolute left-1/2 top-[33%] h-[39%] w-[47%] -translate-x-1/2 border-[5px] border-black bg-[#c9cdd1] [clip-path:polygon(8%_0,92%_0,100%_14%,90%_100%,10%_100%,0_14%)]">
              <div className="absolute inset-x-[11%] top-[17%] space-y-[7px]">
                {[0, 1, 2, 3, 4, 5].map((line) => (
                  <div key={line} className="h-[9px] border-[3px] border-black bg-[#4c535a]" />
                ))}
              </div>
              <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-[0.24em] text-[#101010]">Layer by layer</div>
            </div>

            <div className="absolute left-[12%] bottom-[7%] h-[26%] w-[31%] border-[5px] border-black bg-[#214da3] [clip-path:polygon(10%_0,100%_6%,91%_100%,0_88%)]" />
            <div className="absolute right-[12%] bottom-[7%] h-[26%] w-[31%] border-[5px] border-black bg-[#214da3] [clip-path:polygon(0_6%,90%_0,100%_88%,9%_100%)]" />

            <div className="absolute left-[21%] bottom-[2%] h-[12%] w-[20%] border-[5px] border-black bg-[#c9cdd1]" />
            <div className="absolute right-[21%] bottom-[2%] h-[12%] w-[20%] border-[5px] border-black bg-[#c9cdd1]" />

            <Bolt className="left-[11%] top-[28%]" />
            <Bolt className="right-[11%] top-[28%]" />
            <Bolt className="left-[10%] bottom-[28%]" />
            <Bolt className="right-[10%] bottom-[28%]" />
          </div>
        </section>

        <section className="border-t-[5px] border-black bg-[#173f91] px-5 py-12 shadow-[inset_0_8px_0_rgba(0,0,0,.2)] md:px-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="inline-block border-[3px] border-black bg-[#e5272b] px-3 py-1 text-xs font-black uppercase tracking-[0.18em] shadow-[4px_4px_0_#101010]">Workshop inventory</div>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.05em] text-[#f0f1f2] sm:text-6xl">The print shelf</h2>
            </div>
            <div className="border-[4px] border-black bg-[#f0f1f2] px-4 py-3 text-sm font-black uppercase text-[#101010] shadow-[5px_5px_0_#101010]">More builds incoming</div>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {printCards.map((card) => (
              <article key={card.number} className={`relative min-h-[300px] border-[5px] border-black p-6 ${card.color} shadow-[9px_9px_0_#101010]`}>
                <div className="absolute right-4 top-4 grid h-14 w-14 place-items-center border-[4px] border-black bg-[#f1d43a] text-lg font-black text-[#101010]">{card.number}</div>
                <div className="mt-16 h-[7px] w-20 bg-black" />
                <h3 className="mt-5 text-4xl font-black uppercase tracking-[-0.05em]">{card.title}</h3>
                <p className="mt-4 max-w-xs text-sm font-black leading-6 opacity-85">{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-x-[5px] border-b-[5px] border-black bg-[#4650cf] px-5 py-12 md:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative border-[5px] border-black bg-[#f0f1f2] p-8 text-[#101010] shadow-[9px_9px_0_#101010] sm:p-10">
            <div className="absolute -right-3 -top-4 border-[4px] border-black bg-[#e5272b] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white shadow-[4px_4px_0_#101010]">Archive bay</div>
            <h2 className="text-4xl font-black uppercase tracking-[-0.05em] sm:text-5xl">Prints incoming!</h2>
            <p className="mt-5 max-w-2xl text-base font-black leading-7 text-black/70">Finished models, work-in-progress photos and print notes will live here.</p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="border-[5px] border-black bg-[#e5272b] p-6 shadow-[7px_7px_0_#101010]">
              <p className="text-xs font-black uppercase tracking-[0.16em]">Status</p>
              <p className="mt-12 text-3xl font-black uppercase">Building</p>
            </div>
            <div className="border-[5px] border-black bg-[#c9cdd1] p-6 text-[#101010] shadow-[7px_7px_0_#101010]">
              <p className="text-xs font-black uppercase tracking-[0.16em]">Archive</p>
              <p className="mt-12 text-3xl font-black uppercase">Soon</p>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-3 py-8 text-xs font-black uppercase tracking-[0.16em] sm:flex-row sm:items-center sm:justify-between">
          <span>Viktor Iliev / 3D Prints</span>
          <span className="text-[#f0f1f2]">OG G1 cartoon workshop</span>
        </footer>
      </div>
    </main>
  );
}

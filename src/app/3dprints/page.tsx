export default function Page() {
  return (
    <main className="section-shell flex min-h-screen items-center py-20">
      <div className="w-full rounded-[2rem] border border-line bg-panel/80 p-8 shadow-soft backdrop-blur dark:border-cyan-900/50 dark:bg-slate-950/80 sm:p-12">
        <p className="kicker">Viktor Iliev</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-ink dark:text-white sm:text-6xl">
          3D Prints
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-muted dark:text-white sm:text-lg">
          3D printing projects and models will be added here soon.
        </p>
      </div>
    </main>
  );
}

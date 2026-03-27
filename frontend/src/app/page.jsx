import Button from "./components/Button";
import GlassBadge from "./components/GlassBadge";

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(167,139,250,0.28),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(217,70,239,0.22),_transparent_24%),linear-gradient(135deg,_#020617_0%,_#140d2e_45%,_#111827_100%)]" />
      <div className="absolute left-[-6rem] top-20 -z-10 h-56 w-56 rounded-full bg-violet-400/20 blur-3xl" />
      <div className="absolute bottom-10 right-[-4rem] -z-10 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />

      <section className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-16 sm:px-10 lg:px-12">
        <div className="mx-auto flex w-full max-w-4xl justify-center">
          <div className="space-y-8 text-center">
            <div className="flex justify-center">
              <GlassBadge>Conheca a nova experiência da INSERT</GlassBadge>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-[4.25rem] font-semibold leading-[0.9] text-white sm:text-[5.5rem] lg:text-[6.75rem]">
                <span className="bg-gradient-to-r from-violet-200 via-violet-400 to-fuchsia-300 bg-clip-text text-transparent">
                  INSERT
                </span>
              </h1>
              <p className="text-lg font-medium uppercase tracking-[0.4em] text-slate-200 sm:text-xl">
                Discover. Share. Repeat.
              </p>
              <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Descubra uma rede social elegante, direta e feita para conectar pessoas, ideias e momentos.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button>Conhecer a INSERT</Button>
              <Button variant="secondary">Entrar</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

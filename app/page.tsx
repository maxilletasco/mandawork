const navigation = [
  { label: "Home", href: "#home" },
  { label: "Cursos", href: "#cursos" },
  { label: "Vagas", href: "#vagas" },
  { label: "Comunidade", href: "#comunidade" },
  { label: "Parceiros", href: "#parceiros" },
  { label: "Sobre", href: "#sobre" },
];

const courses = [
  {
    number: "01",
    category: "DESENVOLVIMENTO",
    title: "Desenvolvimento Web",
    description:
      "Aprenda a construir aplicações web modernas, do frontend ao backend.",
    color: "bg-yellow-100",
  },
  {
    number: "02",
    category: "TECNOLOGIA",
    title: "Fundamentos da Programação",
    description:
      "Desenvolva sua lógica e construa a base para sua carreira em tecnologia.",
    color: "bg-blue-100",
  },
  {
    number: "03",
    category: "CARREIRA",
    title: "Prepare-se para o mercado",
    description:
      "Desenvolva habilidades práticas e prepare-se para novas oportunidades.",
    color: "bg-green-100",
  },
];

export default function Home() {
  return (
    <main
      id="home"
      className="min-h-screen bg-white text-zinc-900"
    >
      {/* Navbar */}
      <header className="border-b border-zinc-200 bg-white">
        <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-lg font-black">
              M
            </span>

            <span className="text-xl font-extrabold tracking-tight">
              Manda<span className="text-yellow-600">Work</span>
            </span>
          </a>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-zinc-600">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-yellow-700"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 text-sm font-medium text-yellow-900">
            <span className="h-2 w-2 rounded-full bg-yellow-500" />
            Conhecimento que abre caminhos
          </div>

          <h1 className="max-w-2xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
            Seu próximo passo na tecnologia{" "}
            <span className="text-yellow-600">começa aqui.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
            Aprenda novas habilidades, desenvolva projetos e encontre
            oportunidades para construir sua carreira em tecnologia.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#cursos"
              className="rounded-lg bg-yellow-400 px-6 py-3.5 font-bold text-zinc-950 transition-colors hover:bg-yellow-300"
            >
              Explorar cursos →
            </a>

            <a
              href="#vagas"
              className="rounded-lg border border-zinc-300 px-6 py-3.5 font-semibold transition-colors hover:bg-zinc-100"
            >
              Encontrar vagas
            </a>
          </div>

          <p className="mt-8 text-sm text-zinc-500">
            Aprendizado, comunidade e oportunidades em um só lugar.
          </p>
        </div>

        {/* Destaque visual */}
        <div className="relative">
          <div className="absolute -right-4 -top-4 h-28 w-28 rounded-full bg-yellow-200" />

          <div className="relative rounded-3xl bg-zinc-950 p-8 text-white md:p-10">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-yellow-400">
                MANDAWORK / 001
              </span>

              <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                Seu futuro
              </span>
            </div>

            <div className="my-12">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-3xl font-black text-zinc-950">
                {"</>"}
              </div>

              <h2 className="text-3xl font-bold leading-snug">
                Transforme conhecimento em possibilidades.
              </h2>

              <p className="mt-4 leading-7 text-zinc-400">
                Cada habilidade aprendida é uma nova porta que pode se abrir.
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-zinc-800 pt-5">
              <span className="text-sm text-zinc-400">
                Aprenda. Construa. Conquiste.
              </span>

              <span className="text-2xl text-yellow-400">↗</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos */}
      <section id="cursos" className="bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-yellow-700">
                Aprenda fazendo
              </p>

              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                Conhecimento para avançar.
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-zinc-600">
                Explore áreas da tecnologia, aprenda no seu ritmo e
                desenvolva habilidades para o mercado de trabalho.
              </p>
            </div>

            <a
              href="#cursos"
              className="font-semibold text-zinc-900 hover:text-yellow-700"
            >
              Ver todos os cursos →
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {courses.map((course) => (
              <article
                key={course.number}
                className="rounded-2xl border border-zinc-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-yellow-400"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${course.color} font-bold`}
                  >
                    {course.number}
                  </span>

                  <span className="text-xl text-zinc-400">↗</span>
                </div>

                <p className="text-xs font-bold tracking-widest text-yellow-700">
                  {course.category}
                </p>

                <h3 className="mt-3 text-xl font-bold">{course.title}</h3>

                <p className="mt-3 leading-7 text-zinc-600">
                  {course.description}
                </p>

                <a
                  href="#comunidade"
                  className="mt-6 inline-block font-semibold text-zinc-900 hover:text-yellow-700"
                >
                  Conhecer trilha →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Vagas */}
      <section id="vagas" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 rounded-3xl border border-zinc-200 p-8 md:grid-cols-2 md:items-center md:p-12">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-yellow-700">
              Sua carreira começa aqui
            </p>

            <h2 className="text-3xl font-extrabold md:text-4xl">
              O próximo passo pode ser uma oportunidade.
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-zinc-600">
              Descubra vagas de estágio e emprego na área de tecnologia
              e encontre oportunidades para colocar seus conhecimentos em prática.
            </p>
          </div>

          <div className="flex md:justify-end">
            <a
              href="#vagas"
              className="rounded-lg bg-zinc-950 px-6 py-3.5 font-bold text-white transition-colors hover:bg-zinc-800"
            >
              Explorar oportunidades →
            </a>
          </div>
        </div>
      </section>

      {/* Comunidade */}
      <section id="comunidade" className="bg-yellow-400">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <h2 className="max-w-2xl text-3xl font-black tracking-tight md:text-4xl">
            Ninguém precisa construir uma carreira sozinho.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-zinc-800">
            Conecte-se com outros estudantes, compartilhe experiências,
            desenvolva projetos e cresça junto com a comunidade de tecnologia.
          </p>

          <a
            href="#parceiros"
            className="mt-7 inline-block rounded-lg bg-zinc-950 px-6 py-3.5 font-bold text-white hover:bg-zinc-800"
          >
            Conheça nossa comunidade →
          </a>
        </div>
      </section>

      {/* Parceiros e Sobre */}
      <section
        id="parceiros"
        className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2"
      >
        <div>
          <h2 className="text-2xl font-extrabold">Parceiros</h2>

          <p className="mt-4 leading-7 text-zinc-600">
            Aproximamos instituições de ensino, empresas e profissionais
            para criar novas possibilidades na área de tecnologia.
          </p>

          <a
            href="#sobre"
            className="mt-5 inline-block font-semibold hover:text-yellow-700"
          >
            Conheça a proposta →
          </a>
        </div>

        <div id="sobre">
          <h2 className="text-2xl font-extrabold">Sobre o MandaWork</h2>

          <p className="mt-4 leading-7 text-zinc-600">
            Uma plataforma que conecta capacitação profissional,
            oportunidades de trabalho e comunidade para ajudar pessoas
            a construir seu futuro na tecnologia.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-8">
          <a href="#home" className="font-extrabold">
            Manda<span className="text-yellow-600">Work</span>
          </a>

          <p className="text-sm text-zinc-500">
            Aprenda. Construa. Conquiste.
          </p>

          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} MandaWork
          </p>
        </div>
      </footer>
    </main>
  );
}
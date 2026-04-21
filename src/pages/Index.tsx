import AnimatedShaderBackground from "@/components/ui/animated-shader-background";
import { TiltCard } from "@/components/ui/tilt-card";

const Index = () => {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <AnimatedShaderBackground className="w-full h-full" />
      </div>
      {/* Top Nav */}
      <nav className="fixed top-0 w-full z-50 glass inner-glow-top">
        <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="text-2xl font-bold tracking-tighter text-foreground">QuizMaster</div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <a className="text-foreground hover:text-white transition-all duration-300 hover:scale-105" href="#">Home</a>
            <a className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105" href="#how-it-works">How It Works</a>
            <a className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105" href="#features">Features</a>
          </div>
          <a
            href="#features"
            className="bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-5 md:px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-primary/20"
          >
            Play Now
          </a>
        </div>
      </nav>

      <main className="relative z-10 pt-20">
        {/* Hero */}
        <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" aria-hidden />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]" aria-hidden />

          <div className="max-w-5xl mx-auto text-center relative z-30 animate-fade-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[0.95]">
              Master Every Topic,
              <br />
              <span className="text-gradient-brand">Challenge Your Mind</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-lg md:text-xl leading-relaxed">
              Sculpt your knowledge through an immersive quiz experience designed for high-end intellectual rigor and tactile engagement.
            </p>
            <div className="flex items-center justify-center">
              <a
                href="#features"
                className="group relative px-10 py-5 bg-gradient-to-br from-primary to-primary-container text-primary-foreground font-bold text-lg rounded-full transition-all duration-500 hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-glow-primary)" }}
              >
                <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative">Start Quiz</span>
              </a>
            </div>
          </div>

        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24 md:py-32 px-6 md:px-8 max-w-screen-2xl mx-auto">
          <div className="mb-16 md:mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">How It Works</h2>
            <p className="text-muted-foreground uppercase tracking-[0.3em] text-xs font-bold">
              The Three Pillars of Mastery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                icon: "tune",
                bg: "bg-primary/20",
                color: "text-primary",
                title: "Choose Difficulty",
                desc: "From casual learner to academic expert, tailor the challenge to your current intellectual capacity.",
                cardBg: "bg-surface-container-low",
                offset: "",
              },
              {
                icon: "category",
                bg: "bg-secondary/20",
                color: "text-secondary",
                title: "Pick a Category",
                desc: "Explore 19+ subjects spanning history, science, geography, music and more — each crafted for depth.",
                cardBg: "bg-surface-container-high",
                offset: "md:mt-16",
              },
              {
                icon: "timer",
                bg: "bg-primary-container/20",
                color: "text-primary-container",
                title: "Beat the Timer",
                desc: "Precision under pressure. Execute your knowledge within strict temporal boundaries to earn rank.",
                cardBg: "bg-surface-container-low",
                offset: "md:mt-8",
              },
            ].map((step, i) => (
              <div
                key={i}
                className={`glass card-hover-lift p-10 rounded-md relative ${step.offset}`}
              >
                <TiltCard
                  className={`w-16 h-16 rounded-2xl ${step.bg} flex items-center justify-center mb-8 badge-3d`}
                  intensity={20}
                  glareOpacity={0.2}
                >
                  <span className={`material-symbols-outlined filled ${step.color} text-3xl`}>{step.icon}</span>
                </TiltCard>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Bento */}
        <section id="features" className="py-24 md:py-32 px-6 md:px-8 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[600px]">
            <div className="lg:col-span-7 glass rounded-md overflow-hidden relative group min-h-[380px]">
              <div
                className="absolute inset-0 opacity-60 group-hover:scale-110 transition-transform duration-1000"
                style={{
                  background:
                    "radial-gradient(at 20% 30%, hsl(263 100% 25%) 0%, transparent 60%), radial-gradient(at 80% 70%, hsl(190 100% 13%) 0%, transparent 60%), radial-gradient(at 50% 50%, hsl(261 100% 74% / 0.3) 0%, transparent 70%)",
                }}
                aria-hidden
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-background/10 to-transparent" aria-hidden />
              <div className="relative z-10 h-full p-8 md:p-12 flex flex-col justify-end">
                <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4">Core Stats</span>
                <h2 className="text-3xl md:text-5xl font-black mb-6 leading-none">1000+ Deep Knowledge Questions</h2>
                <p className="text-muted-foreground max-w-md text-base md:text-lg">
                  Every question is hand-sculpted by subject matter experts to ensure accuracy and cognitive challenge.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="flex-1 glass p-6 md:p-8 rounded-md flex items-center gap-6 md:gap-8">
                <TiltCard className="badge-3d badge-3d-primary rounded-2xl px-5 py-3 text-5xl md:text-6xl font-black text-primary" intensity={20}>
                  <span>19</span>
                </TiltCard>
                <div>
                  <h4 className="text-xl font-bold mb-1">Categories</h4>
                  <p className="text-muted-foreground text-sm">From Current Affairs, Science &amp; Technology, History, Geography and Music &amp; Entertainment.</p>
                </div>
              </div>
              <div className="flex-1 glass p-6 md:p-8 rounded-md flex items-center gap-6 md:gap-8">
                <TiltCard className="badge-3d badge-3d-secondary rounded-2xl px-5 py-3 text-5xl md:text-6xl font-black text-secondary" intensity={20}>
                  <span>3</span>
                </TiltCard>
                <div>
                  <h4 className="text-xl font-bold mb-1">Difficulties</h4>
                  <p className="text-muted-foreground text-sm">Easy, Medium, and Hard tiers.</p>
                </div>
              </div>
              <div className="flex-1 glass p-6 md:p-8 rounded-md flex items-center gap-6 md:gap-8">
                <TiltCard className="badge-3d badge-3d-primary rounded-2xl px-5 py-3 text-primary" intensity={20}>
                  <span className="material-symbols-outlined text-5xl rounded-none shadow-none">emoji_events</span>
                </TiltCard>
                <div>
                  <h4 className="text-xl font-bold mb-1">Global Ranking</h4>
                  <p className="text-muted-foreground text-sm">Compete with the sharpest minds globally.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 px-6 md:px-8 text-center max-w-4xl mx-auto">
          <div className="glass-strong rounded-md p-10 md:p-16 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" aria-hidden />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]" aria-hidden />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-6 md:mb-8">Ready to challenge your intellect?</h2>
              <p className="text-muted-foreground text-lg md:text-xl mb-10 md:mb-12">
                Join the collective of elite thinkers and start your first session today.
              </p>
              <a
                href="#features"
                className="inline-block bg-primary text-primary-foreground font-black px-10 md:px-12 py-4 md:py-5 rounded-full text-lg hover:bg-primary-container transition-all shadow-xl shadow-primary/25 hover:-translate-y-1 duration-300"
              >
                Start Now — It's Free
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full rounded-t-xl mt-20 glass">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 md:px-12 py-12 md:py-16 gap-8 max-w-screen-2xl mx-auto">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="text-lg font-black uppercase tracking-tighter">QuizMaster</div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              © {year} QuizMaster. Sculpting knowledge through light.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-xs uppercase tracking-widest">
            <a className="text-muted-foreground hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="text-muted-foreground hover:text-primary transition-colors" href="#">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

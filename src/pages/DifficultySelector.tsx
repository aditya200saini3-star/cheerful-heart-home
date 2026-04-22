import { Link } from "react-router-dom";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";
import QuizNav from "@/components/QuizNav";
import QuizFooter from "@/components/QuizFooter";

const DIFFICULTIES = [
  {
    id: "easy",
    name: "Easy",
    icon: "spa",
    tagline: "A relaxed pace for casual learning. Perfect for warming up or exploring new topics.",
    perks: ["10 questions per quiz", "20s per question", "Beginner-friendly hints"],
    accent: "from-emerald-400/30 to-teal-500/20",
    accentText: "text-emerald-300",
    border: "hover:border-emerald-400/60",
  },
  {
    id: "medium",
    name: "Medium",
    icon: "bolt",
    tagline: "A balanced challenge for regular learners. Sharpen your knowledge with deeper questions.",
    perks: ["15 questions per quiz", "15s per question", "Tactical hints"],
    accent: "from-amber-300/30 to-orange-400/20",
    accentText: "text-amber-300",
    border: "hover:border-amber-400/60",
  },
  {
    id: "hard",
    name: "Hard",
    icon: "local_fire_department",
    tagline: "An intense gauntlet for true experts. Only the sharpest minds will master this tier.",
    perks: ["20 questions per quiz", "10s per question", "Cryptic hints"],
    accent: "from-rose-400/30 to-red-500/20",
    accentText: "text-rose-300",
    border: "hover:border-rose-400/60",
  },
];

const DifficultySelector = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <AnimatedShaderBackground className="w-full h-full" />
      </div>
      <QuizNav />

      <main className="relative z-10 pt-32 pb-20 px-6 md:px-8 max-w-6xl mx-auto">
        <header className="text-center mb-16 md:mb-20 animate-fade-up">
          <p className="text-secondary uppercase tracking-[0.3em] text-xs font-bold mb-6">Step 01 — Difficulty</p>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[0.95]">
            Choose Your <span className="text-gradient-brand">Challenge</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Select the difficulty level that matches your expertise and start your journey to mastery.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {DIFFICULTIES.map((d, i) => (
            <Link
              key={d.id}
              to={`/categories/${d.id}`}
              className={`group glass card-hover-lift p-8 md:p-10 rounded-md flex flex-col text-left border border-white/10 ${d.border} ${
                i === 1 ? "md:mt-12" : i === 2 ? "md:mt-6" : ""
              }`}
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${d.accent} flex items-center justify-center mb-8 badge-3d group-hover:scale-110 transition-transform duration-500`}
              >
                <span className={`material-symbols-outlined filled text-3xl ${d.accentText}`}>{d.icon}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-3">{d.name} Mode</h3>
              <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">{d.tagline}</p>
              <ul className="space-y-3 mb-8">
                {d.perks.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-tertiary">
                    <span className={`material-symbols-outlined text-base ${d.accentText}`}>check_circle</span>
                    {p}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-primary group-hover:gap-4 transition-all">
                Continue
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </Link>
          ))}
        </div>
      </main>

      <QuizFooter />
    </div>
  );
};

export default DifficultySelector;
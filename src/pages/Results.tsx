import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";
import QuizNav from "@/components/QuizNav";
import QuizFooter from "@/components/QuizFooter";
import { CATEGORIES, type Difficulty } from "@/data/quizData";

interface ResultState {
  score: number;
  total: number;
  correct: number;
  skipped: number;
  timeTaken: number;
}

const Results = () => {
  const { difficulty, category } = useParams<{ difficulty: string; category: string }>();
  const location = useLocation();
  const state = location.state as ResultState | null;

  if (!state || !difficulty || !category) {
    return <Navigate to="/difficulty" replace />;
  }

  const diff = difficulty as Difficulty;
  const cat = CATEGORIES.find((c) => c.id === category);
  const pct = state.total > 0 ? Math.round((state.correct / state.total) * 100) : 0;

  const tier =
    pct >= 90
      ? { label: "Legendary", icon: "trophy", color: "text-amber-300", glow: "from-amber-400/30 to-orange-400/20" }
      : pct >= 70
      ? { label: "Mastery", icon: "workspace_premium", color: "text-primary", glow: "from-primary/30 to-primary-container/20" }
      : pct >= 50
      ? { label: "Solid", icon: "military_tech", color: "text-secondary", glow: "from-secondary/30 to-secondary-container/20" }
      : { label: "Keep Going", icon: "rocket_launch", color: "text-rose-300", glow: "from-rose-400/30 to-rose-500/20" };

  const message =
    pct >= 90
      ? "Extraordinary precision. You belong among the masters."
      : pct >= 70
      ? "Strong performance. A few more rounds and mastery is yours."
      : pct >= 50
      ? "Solid foundation. Sharpen the edges and rise."
      : "Every master started here. Reset, refocus, return.";

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <AnimatedShaderBackground className="w-full h-full" />
      </div>
      <QuizNav />

      <main className="relative z-10 pt-32 pb-20 px-6 md:px-8 max-w-3xl mx-auto">
        <div className="glass-strong card-hover-lift rounded-md p-8 md:p-12 text-center relative overflow-hidden animate-fade-up">
          <div
            className={`absolute -top-32 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-[100px] bg-gradient-to-br ${tier.glow}`}
            aria-hidden
          />
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
              {cat?.name} · {diff}
            </p>
            <div
              className={`mx-auto w-24 h-24 rounded-full bg-gradient-to-br ${tier.glow} badge-3d flex items-center justify-center mb-6`}
            >
              <span className={`material-symbols-outlined filled text-5xl ${tier.color}`}>
                {tier.icon}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-3">
              <span className="text-gradient-brand">{tier.label}</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">{message}</p>

            {/* Big score */}
            <div className="flex items-end justify-center gap-2 mb-10">
              <span className="text-7xl md:text-8xl font-black leading-none">{pct}</span>
              <span className="text-3xl font-bold text-muted-foreground mb-2">%</span>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10">
              <Stat icon="star" label="Score" value={state.score} />
              <Stat icon="check_circle" label="Correct" value={`${state.correct}/${state.total}`} />
              <Stat icon="skip_next" label="Skipped" value={state.skipped} />
              <Stat icon="timer" label="Time" value={`${state.timeTaken}s`} />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to={`/quiz/${diff}/${category}`}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full glass text-sm font-bold hover:scale-105 transition-transform"
              >
                <span className="material-symbols-outlined text-base">refresh</span>
                Replay
              </Link>
              <Link
                to={`/categories/${diff}`}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full glass text-sm font-bold hover:scale-105 transition-transform"
              >
                <span className="material-symbols-outlined text-base">category</span>
                New Category
              </Link>
              <Link
                to="/difficulty"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-br from-primary to-primary-container text-primary-foreground text-sm font-black shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-transform"
              >
                <span className="material-symbols-outlined text-base">tune</span>
                Change Difficulty
              </Link>
            </div>
          </div>
        </div>
      </main>

      <QuizFooter />
    </div>
  );
};

const Stat = ({ icon, label, value }: { icon: string; label: string; value: string | number }) => (
  <div className="glass rounded-md p-4 flex flex-col items-center gap-1">
    <span className="material-symbols-outlined text-secondary">{icon}</span>
    <span className="text-xl md:text-2xl font-black">{value}</span>
    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</span>
  </div>
);

export default Results;
import { Link, useParams, Navigate } from "react-router-dom";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";
import QuizNav from "@/components/QuizNav";
import QuizFooter from "@/components/QuizFooter";
import { CATEGORIES, getQuiz, type Difficulty } from "@/data/quizData";

const DIFFICULTY_META: Record<Difficulty, { label: string; accent: string; tagline: string }> = {
  easy: { label: "Easy Mode", accent: "text-emerald-300", tagline: "10 questions · 20s each" },
  medium: { label: "Medium Mode", accent: "text-amber-300", tagline: "15 questions · 15s each" },
  hard: { label: "Hard Mode", accent: "text-rose-300", tagline: "20 questions · 10s each" },
};

const CategorySelector = () => {
  const { difficulty } = useParams<{ difficulty: string }>();

  if (!difficulty || !["easy", "medium", "hard"].includes(difficulty)) {
    return <Navigate to="/difficulty" replace />;
  }

  const diff = difficulty as Difficulty;
  const meta = DIFFICULTY_META[diff];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <AnimatedShaderBackground className="w-full h-full" />
      </div>
      <QuizNav />

      <main className="relative z-10 pt-32 pb-20 px-6 md:px-8 max-w-screen-2xl mx-auto">
        <header className="text-center mb-16 animate-fade-up">
          <Link
            to="/difficulty"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            Back to Difficulty
          </Link>
          <p className={`uppercase tracking-[0.3em] text-xs font-bold mb-6 ${meta.accent}`}>
            Step 02 — {meta.label}
          </p>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[0.95]">
            Pick a <span className="text-gradient-brand">Category</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            {meta.tagline}. Choose a topic to begin sculpting your knowledge.
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {CATEGORIES.map((cat) => {
            const count = getQuiz(cat.id, diff).length;
            return (
              <Link
                key={cat.id}
                to={`/quiz/${diff}/${cat.id}`}
                className="group glass card-hover-lift p-6 md:p-8 rounded-md flex flex-col items-start gap-5 border border-white/5 hover:border-primary/40"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center badge-3d badge-3d-primary group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined filled text-2xl text-primary">{cat.icon}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg md:text-xl font-bold mb-1 leading-tight">{cat.name}</h3>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    {count} {count === 1 ? "Question" : "Questions"}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary group-hover:gap-3 transition-all">
                  Start
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </Link>
            );
          })}
        </div>
      </main>

      <QuizFooter />
    </div>
  );
};

export default CategorySelector;
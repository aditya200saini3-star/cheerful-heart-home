import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";
import QuizNav from "@/components/QuizNav";
import { CATEGORIES, getQuiz, type Difficulty } from "@/data/quizData";

const TIME_PER_QUESTION: Record<Difficulty, number> = {
  easy: 20,
  medium: 15,
  hard: 10,
};

const Quiz = () => {
  const { difficulty, category } = useParams<{ difficulty: string; category: string }>();
  const navigate = useNavigate();

  const valid =
    difficulty &&
    category &&
    ["easy", "medium", "hard"].includes(difficulty) &&
    CATEGORIES.some((c) => c.id === category);

  const diff = (difficulty as Difficulty) ?? "easy";
  const questions = useMemo(
    () => (valid ? getQuiz(category!, diff) : []),
    [valid, category, diff]
  );
  const totalTime = TIME_PER_QUESTION[diff];

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [skipped, setSkipped] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [showHint, setShowHint] = useState(false);
  const [startedAt] = useState(() => Date.now());

  // Timer
  useEffect(() => {
    if (revealed) return;
    if (timeLeft <= 0) {
      handleReveal(null, true);
      return;
    }
    const t = window.setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => window.clearTimeout(t);
  }, [timeLeft, revealed]);

  // Reset on question change
  useEffect(() => {
    setSelected(null);
    setRevealed(false);
    setShowHint(false);
    setTimeLeft(totalTime);
  }, [index, totalTime]);

  if (!valid) return <Navigate to="/difficulty" replace />;
  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-6">
        <div className="glass rounded-md p-10 text-center max-w-md">
          <h2 className="text-2xl font-bold mb-4">No questions available</h2>
          <Link to="/difficulty" className="text-primary underline">
            Back to difficulty
          </Link>
        </div>
      </div>
    );
  }

  const q = questions[index];
  const category_name = CATEGORIES.find((c) => c.id === category)!.name;
  const progress = ((index + (revealed ? 1 : 0)) / questions.length) * 100;
  const timerPct = (timeLeft / totalTime) * 100;

  function handleReveal(choice: number | null, isTimeout = false) {
    if (revealed) return;
    setSelected(choice);
    setRevealed(true);
    if (choice === null && isTimeout) {
      // timeout — counts as skipped/wrong, no score
      setSkipped((s) => s + 1);
    } else if (choice === q.correctAnswer) {
      setCorrect((c) => c + 1);
      setScore((s) => s + 10);
    }
  }

  function handleSkip() {
    if (revealed) return;
    setSkipped((s) => s + 1);
    setRevealed(true);
    setSelected(null);
  }

  function handleNext() {
    if (index + 1 >= questions.length) {
      const timeTaken = Math.round((Date.now() - startedAt) / 1000);
      navigate(`/results/${diff}/${category}`, {
        state: {
          score,
          total: questions.length,
          correct,
          skipped,
          timeTaken,
        },
      });
    } else {
      setIndex((i) => i + 1);
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <AnimatedShaderBackground className="w-full h-full" />
      </div>
      <QuizNav />

      <main className="relative z-10 pt-28 md:pt-32 pb-16 px-6 md:px-8 max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">
              {diff} · {category_name}
            </p>
            <p className="text-sm text-tertiary font-medium">
              Question <span className="text-foreground font-bold">{index + 1}</span> /{" "}
              {questions.length}
            </p>
          </div>
          <div className="flex items-center gap-3 badge-3d badge-3d-primary px-4 py-2 rounded-full text-primary font-bold">
            <span className="material-symbols-outlined text-base">star</span>
            <span>{score}</span>
          </div>
        </div>

        {/* Progress */}
        <div className="h-1.5 w-full rounded-full bg-surface-container-low overflow-hidden mb-2">
          <div
            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Timer */}
        <div className="flex items-center justify-between mb-6 mt-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="material-symbols-outlined text-base">timer</span>
            <span className={timeLeft <= 5 && !revealed ? "text-rose-300 font-bold" : ""}>
              {timeLeft}s left
            </span>
          </div>
          <div className="h-1 flex-1 ml-4 rounded-full bg-surface-container-low overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 linear ${
                timeLeft <= 5 && !revealed ? "bg-rose-400" : "bg-secondary"
              }`}
              style={{ width: `${timerPct}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="glass-strong card-hover-lift rounded-md p-7 md:p-10 mb-6 animate-fade-up">
          <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-8">{q.question}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {q.options.map((opt, i) => {
              const isCorrect = revealed && i === q.correctAnswer;
              const isWrongPick = revealed && selected === i && i !== q.correctAnswer;
              const base =
                "text-left p-4 md:p-5 rounded-md font-medium transition-all duration-300 border flex items-center gap-3 group";
              let style =
                "glass border-white/10 hover:border-primary/50 hover:-translate-y-0.5";
              if (isCorrect) style = "bg-emerald-500/20 border-emerald-400 text-emerald-100";
              else if (isWrongPick) style = "bg-rose-500/20 border-rose-400 text-rose-100";
              else if (revealed) style = "glass border-white/5 opacity-60";
              return (
                <button
                  key={i}
                  disabled={revealed}
                  onClick={() => handleReveal(i)}
                  className={`${base} ${style}`}
                >
                  <span className="w-8 h-8 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="flex-1">{opt}</span>
                  {isCorrect && (
                    <span className="material-symbols-outlined text-emerald-300">check_circle</span>
                  )}
                  {isWrongPick && (
                    <span className="material-symbols-outlined text-rose-300">cancel</span>
                  )}
                </button>
              );
            })}
          </div>

          {showHint && !revealed && (
            <div className="mt-6 p-4 rounded-md bg-secondary/10 border border-secondary/30 text-sm text-tertiary flex gap-3">
              <span className="material-symbols-outlined text-secondary">lightbulb</span>
              <span>{q.hint}</span>
            </div>
          )}

          {revealed && (
            <div className="mt-6 p-4 rounded-md bg-surface-container-low border border-white/10 text-sm text-tertiary">
              <span className="font-bold text-foreground">Hint: </span>
              {q.hint}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => setShowHint(true)}
            disabled={revealed || showHint}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass text-sm font-bold disabled:opacity-50 hover:scale-105 transition-transform"
          >
            <span className="material-symbols-outlined text-base text-secondary">lightbulb</span>
            Hint
          </button>
          <div className="flex items-center gap-3">
            {!revealed && (
              <button
                onClick={handleSkip}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass text-sm font-bold text-muted-foreground hover:text-foreground hover:scale-105 transition-transform"
              >
                <span className="material-symbols-outlined text-base">skip_next</span>
                Skip
              </button>
            )}
            {revealed && (
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-br from-primary to-primary-container text-primary-foreground text-sm font-black shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-transform"
              >
                {index + 1 >= questions.length ? "See Results" : "Next"}
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Quiz;
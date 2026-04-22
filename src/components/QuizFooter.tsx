const QuizFooter = () => {
  const year = new Date().getFullYear();
  return (
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
  );
};

export default QuizFooter;
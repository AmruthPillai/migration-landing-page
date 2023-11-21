export const App = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-y-6 text-center">
      <img
        src="/logo.svg"
        alt="Reactive Resume"
        className="h-24 w-24 rounded shadow-2xl shadow-zinc-50/10 duration-1000 animate-in fade-in slide-in-from-top-1/2"
      />

      <h1 className="text-xl font-bold delay-500 duration-1000 animate-in fade-in fill-mode-backwards">
        Get ready for something amazing!
      </h1>

      <div className="prose prose-sm prose-invert max-w-md delay-1000 duration-1000 animate-in fade-in fill-mode-backwards">
        <p>
          I'm currently working on migrating the existing infrastructure to
          release the new version of Reactive Resume. The estimated release date
          is on the <strong>25th of November, 2023</strong>, so mark your
          calendars!
        </p>

        <p>
          Your data is safe and will be migrated to the latest version
          automatically. There is no action required from your side.
        </p>

        <p>Thank you for your patience and understanding!</p>
      </div>
    </div>
  );
};

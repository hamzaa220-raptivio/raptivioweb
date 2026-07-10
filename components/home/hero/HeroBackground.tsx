export default function HeroBackground() {
  return (
    <>
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-200/20 blur-[120px]" />

      <div className="absolute -left-20 top-40 h-80 w-80 rounded-full bg-blue-300/10 blur-[120px]" />

      <div className="absolute -right-20 top-60 h-80 w-80 rounded-full bg-indigo-300/10 blur-[120px]" />
    </>
  );
}
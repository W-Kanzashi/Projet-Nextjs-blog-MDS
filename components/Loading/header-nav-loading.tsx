export default function HeaderNavLoading(): JSX.Element {
  return (
    <>
      <ul className="flex flex-row gap-6 mb-20">
        <li className="animate-pulse-slow w-20 h-6 rounded-2xl bg-slate-700"></li>
        <li className="animate-pulse-slow w-20 h-6 rounded-2xl bg-slate-700"></li>
        <li className="animate-pulse-slow w-20 h-6 rounded-2xl bg-slate-700"></li>
        <li className="animate-pulse-slow w-20 h-6 rounded-2xl bg-slate-700"></li>
      </ul>
    </>
  );
}

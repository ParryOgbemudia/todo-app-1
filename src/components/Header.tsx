import StatsBar from "./StatsBar";
import NavIcon from "./NavIcon";

export default function Header() {
  return (
    <header className="col-[1/3] flex justify-between border-b border-black/[0.08] bg-blue-300 px-4">
      <NavIcon />
      <StatsBar />
    </header>
  );
}

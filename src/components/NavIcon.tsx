import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export default function NavIcon() {
  return (
    <div className="flex items-center justify-center gap-2">
      <ArrowCircleLeftIcon className="size-8 cursor-pointer text-red-500 hover:text-red-800" />
      <ArrowCircleRightIcon className="size-8 cursor-pointer text-blue-500 hover:text-blue-800" />
    </div>
  );
}

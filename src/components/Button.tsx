type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};
export default function Button({
  onClick,
  children,
  type = "submit",
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "h-[45px] max-md:h-[30px] w-full rounded-[5px] text-white transition-colors";
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600 ",
    secondary: "bg-blue-500 hover:bg-blue-600 opacity-70",
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${base} ${className} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

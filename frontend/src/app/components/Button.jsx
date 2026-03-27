export default function Button({ children, variant = "primary" }) {
    const baseClasses = "cursor-pointer rounded-2xl px-6 py-3 font-medium transition-all duration-300 active:scale-95";
    const variants = {
        primary: "border border-violet-200/30 bg-violet-100 text-slate-950 shadow-lg shadow-violet-500/25 hover:-translate-y-0.5 hover:bg-white",
        secondary: "border border-white/15 bg-white/8 text-white backdrop-blur-xl shadow-lg shadow-violet-950/20 hover:-translate-y-0.5 hover:bg-white/12",
    };

    return (
        <button className={`${baseClasses} ${variants[variant] ?? variants.primary}`}>
            {children}
        </button>
    );
}

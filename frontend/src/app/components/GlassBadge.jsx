export default function GlassBadge({ children }) {
    return (
        <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-slate-100 backdrop-blur-xl">
            <span className="h-2.5 w-2.5 rounded-full bg-violet-300 shadow-[0_0_14px_rgba(196,181,253,0.95)]" />
            {children}
        </div>
    );
}

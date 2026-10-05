// app/login/layout.tsx
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#1c1c24] p-4 flex items-center justify-center">
      {/* Auth-specific container card */}
      <div className="bg-slate-800 rounded-xl">
        {children}
      </div>
    </div>
  );
}
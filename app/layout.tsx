export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main className="flex-1">{children}</main>
    </div>
  );
}

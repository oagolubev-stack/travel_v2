export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;  // Только контент главной, без hero
}

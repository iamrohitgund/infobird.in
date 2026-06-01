export default function Layout({ children }) {
  return (
    <div className="min-h-screen overflow-hidden">
      <div className="mx-auto flex w-full max-w-5xl flex-col px-5 sm:px-8">
        {children}
      </div>
    </div>
  );
}

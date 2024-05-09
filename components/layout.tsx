interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto flex flex-col space-y-4">
      <header className="sticky top-0 z-40 bg-white">
        <div className="container mx-auto h-16 border-b border-b-slate-200 flex items-center justify-between px-4">
          <nav>
            <h1>
              <b>
                <img src="/Designer-4.png" alt="PDF-GPT Logo" className="h-8" />
                PDF-GPT
              </b>
            </h1>
          </nav>
        </div>
      </header>
      <div>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}

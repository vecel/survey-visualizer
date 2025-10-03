import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex size-full">
          <nav className="w-64 flex flex-col border-r">
            <div className="h-16 border-b" />
            <ul>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
            </ul>
          </nav>
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
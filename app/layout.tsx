import NavLink from "./components/NavLink"
import "./globals.css"

import { MdDashboard, MdHome } from "react-icons/md"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex size-full bg-surface text-on-surface">
          <nav className="w-64 flex flex-col border-r bg-surface-container text-on-surface-container border-surface-container-high">
            <div className="h-16 border-b border-surface-container-high" />
            <ul className="">
              <NavLink link="/" title="Home" Icon={MdHome} />
              <NavLink link="dashboard" title="Dashboard" Icon={MdDashboard} />
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
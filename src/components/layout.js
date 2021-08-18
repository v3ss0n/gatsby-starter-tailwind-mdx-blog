import * as React from "react"
import Bio from "./bio"
import Header from "./header"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <div className="w-full md:w-1/3 relative">
        <div className="md:h-full p-8 flex flex-col justify-center bg-gray-800">
          <Bio />
        </div>
      </div>
    )
  } else {
    header = <Header />
  }

  return (
    <div
      className={`md:h-screen antialiased flex flex-col ${
        isRootPath && "md:flex-row"
      } selection:bg-yellow-200 selection:text-black overflow-hidden`}
    >
      {header}
      <main className="flex-1 bg-gradient-to-br from-blue-900 to-purple-900 px-8 lg:px-24 py-8 md:py-16 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}

export default Layout

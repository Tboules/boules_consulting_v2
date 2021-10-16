import React from "react"
import FixedLogoBackground from "./FixedLogoBackground"
import Footer from "./Footer"
import Header from "./Header"

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <FixedLogoBackground />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

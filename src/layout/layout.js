import React, { useState } from "react"
import "./layout.scss"
import { Link, useStaticQuery, graphql } from "gatsby"
import MenuButton from "./menuButton.js"
import Overlay from "./overlay"

const Layout = ({ children }) => {
  const [hidden, changeHidden] = useState(true)

  const activeLink = {
    color: "white",
    backgroundColor: "#1f8dd6",
  }

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="app">
      <Overlay />

      <div className="gatsby">
        <nav className={hidden ? "hideNav" : "showNav"}>
          <div className="nav-title">
            <Link to="/">{data.site.siteMetadata.title}</Link>
          </div>
          <div className="nav-list">
            <ul>
              <Link to="/css-grid" activeStyle={activeLink}>
                CSS Grid
              </Link>
              <Link to="/cs-basics" activeStyle={activeLink}>
                CS Basics
              </Link>
              <Link to="/algorithms" activeStyle={activeLink}>
                Algorithms
              </Link>
              <Link to="/philosophy" activeStyle={activeLink}>
                Philosophy
              </Link>
            </ul>
          </div>
        </nav>

        <div className="main">{children}</div>

        <button className="menu-button" onClick={() => changeHidden(!hidden)}>
          <MenuButton hiddenMenu={hidden} />
        </button>
      </div>
    </div>
  )
}

export default Layout

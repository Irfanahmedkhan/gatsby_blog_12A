import React from "react"
import { Link } from "gatsby"
import NavBar from "./Navbar"
import TotalSlug from "./TotalSlug"
import Particles from "react-particles-js"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  let header

  if (isRootPath) {
    header = (
      <h1>
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = <Link to="/">{title}</Link>
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      {/* <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          minHeight: "100%",
          // zIndex: -1
        }}
      >
        <Particles
          params={{
            particles: {
              number: {
                value: 150,
              },
              size: {
                value: 2,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
      </div> */}

      <NavBar />

      {/* <TotalSlug /> */}

      <div>{children}</div>

      <footer style={{display: "flex", textAlign: "center", justifyContent: "center"}}>
   
        <p>
        © {new Date().getFullYear()}, Built with
        {` `}       Gatsby & Contectfull by <strong>Irfan Ahmed</strong>{" "}
        </p>
      </footer>
    </div>
  )
}

export default Layout

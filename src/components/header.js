import { Link } from "gatsby"

import React from "react"

export function Header() {
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Echo Church
          </Link>
        </h1>
      </div>
    </header>
  )
}

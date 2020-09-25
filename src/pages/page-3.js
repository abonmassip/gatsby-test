import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const ThirdPage = () => (
  <Layout>
    <h1>
      Hello from the THIRD PAGE!
      <span role="img" aria-label="fire">🔥</span>
    </h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage

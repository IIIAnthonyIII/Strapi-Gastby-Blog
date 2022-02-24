import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      {data.allStrapiArticulo.edges.map( ({ node }) => (
          node.data.map(itemData => (
              <li key={itemData.id}>
                <h2>
                  <Link to={`/${itemData.id}`}>
                    {itemData.attributes.titulo}
                  </Link>
                </h2>
                <p>{itemData.attributes.descripcion}</p>
              </li>
            )
          )
        )
      )}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)
 
export default IndexPage
 
export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticulo {
      edges {
        node {
          data {
            attributes {
              descripcion
              titulo
            }
            id
          }
        }
      }
    }
  }
`
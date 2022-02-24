import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
 
const ArticleTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiArticulo.data.map(itemData => (itemData.attributes.titulo))}</h1>
    <p>{data.strapiArticulo.data.map(itemData => (itemData.attributes.descripcion))}</p>
  </Layout>
)
 
export default ArticleTemplate
 
export const query = graphql`
    query ArticleTemplate($id: Int!) {
        strapiArticulo(data:{elemMatch: {id: {eq: $id}}}) {
            data {
                attributes {
                    descripcion
                    titulo
                }
            id
            }
        }
    }
`
import * as React from "react"
import { Link, graphql } from "gatsby"

import Sectionblog from "./Sectionblog"
import Banner from "../Banner"
import Seo from "../seo"
import Post from "./Post"
import Newsletter from "./Newsletter"
import { useState } from "react"

const Blog = ({ posts }) => {
const [name , setName] = useState('')
  return (
      <>
      <Sectionblog name={name} setName={setName} />
      <Seo title="All posts" />


      <div className="max-w-[1200px] m-auto flex justify-start items-center px-2">
        {posts.map(post => (
            name != post.frontmatter.description ?
          <Post
            title={post.frontmatter.title}
            link={post.fields.slug}
            key={post.fields.slug}
            description={post.frontmatter.description}
            readtime={post.frontmatter.readtime}
            date={post.frontmatter.date}
            thumbnail={
              post.frontmatter.thumbnail.childImageSharp.gatsbyImageData.images
                .fallback.src
            }
            excerpt={post.excerpt}
            name={name}
            setName={setName}
          /> : null
        ))}

      </div>
      <Newsletter />
     </>
   )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          readtime
          thumbnail {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`

import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import Banner from "../components/Banner"
const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  const thumbnail = post.frontmatter.thumbnail.childImageSharp.gatsbyImageData.images.fallback.src

  return (
    <Layout location={location} title={siteTitle}>
         <Banner title='' img={`../blogs.png`} />
      
      <article
        className="max-w-[1400px] m-auto"
        itemScope
        itemType="http://schema.org/Article"
      >
                    
        <header>      <p className="py-5"><span className="text-primary opacity-[0.6]">Blog</span> > Artilce View</p>          <p className="capitalize text-primary opacity-[0.6]">{post.frontmatter.description}</p>
          <h1 className="text-[28px] leading-[36px] max-w-[1200px] py-2" itemProp="headline">{post.frontmatter.title}</h1>
          <img className="max-h-[400px] w-full" src={thumbnail} />
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
          className="max-w-[1200px] m-auto opacity-[0.8] text-[20px] leading-[28px]  py-2"
        />
        <hr />
        <footer>
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul className="mt-10"
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-around`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
                <div className="w-[400px]">
                <img src={ previous.frontmatter.thumbnail.childImageSharp.gatsbyImageData.images
                .fallback.src} />
                ← 
                <p className="sml:text-[18px] mt-2">{previous.frontmatter.title}</p>
                <section
                    dangerouslySetInnerHTML={{ __html: previous.excerpt }}
                    itemProp="articleBody"
                    className="text-[12px] sml:text-[12px] max-h-[100px] py-2"
                  />           
                  <div className="flex justify-between items-center">
                    <p>{previous.frontmatter.readtime}</p>
                    <Link to={previous.fields.slug} rel="prev">
                    <p>Read More</p>
                    </Link>
                  </div>

                       </div>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnail {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      excerpt(pruneLength: 100)
      fields {
        slug
      }
      frontmatter {
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
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        thumbnail {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

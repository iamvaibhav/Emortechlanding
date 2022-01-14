import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import Sectionblog from "../components/Blog/Sectionblog"
import Banner from "../components/Banner"
import "../styles/Banner.css"
import Newsletter from "../components/Blog/Newsletter"


const blogs = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Banner title="blogs" img={`./blog2.png`} />
      <Sectionblog />
      <Seo title="All posts" />

      <div className="max-w-[1200px] m-auto flex justify-start items-center px-2">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const thumbnail =
            post.frontmatter.thumbnail.childImageSharp.gatsbyImageData.images
              .fallback.src
          console.log(post)
          return (
            <article
              className="mr-10"
              itemScope
              itemType="http://schema.org/Article"
            >
              <header className="h-[408px] w-[497px] bg-white shadow-lg rounded-[10px]">
                <img className="rounded-t-[5px] h-[151px]" src={thumbnail} />

                <section
                  className="h-[257px] shadow-lg rounded-b-[5px] py-2 px-10"
                  style={{
                    background:
                      "linear-gradient(93.93deg, #26C0D5 -6.86%, #1B8CCC 107.58%, #1B6CCC 107.58%)",
                  }}
                >
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                    className="text-white"
                  />
                  <h2 className="text-[24px] leading-[36px] font-bold ">
                    <Link to={post.fields.slug} itemProp="url">
                      <span
                        className="text-[24px] leading-[36px] font-bold "
                        itemProp="headline"
                      >
                        {title}
                      </span>
                    </Link>
                  </h2>
              
                  <section
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                    itemProp="articleBody"
                    className="py-2"
                  />
                </section>
              </header>
            </article>
          )
        })}
      </div>
      <Newsletter />
    </Layout>
  )
}

export default blogs

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

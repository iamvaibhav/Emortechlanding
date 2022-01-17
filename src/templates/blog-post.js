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
        className="max-w-[1400px] m-auto text-primary px-2"
        itemScope
        itemType="http://schema.org/Article"
      >
                    
        <header>      <p className="py-5"><span className="text-primary opacity-[0.6]">Blog</span> > Artilce View</p>          <p className="capitalize text-primary opacity-[0.6]">{post.frontmatter.description}</p>
<<<<<<< HEAD
<<<<<<< HEAD
          <h1 className="text-[24px] sml:text-[28px] leading-[36px] max-w-[1200px] py-2" itemProp="headline">{post.frontmatter.title}</h1>
=======
          <h1 className="text-[28px] leading-[36px] max-w-[1200px] py-2" itemProp="headline">{post.frontmatter.title}</h1>
>>>>>>> eeb02de (added responsive style and blog post)
=======
          <h1 className="text-[24px] sml:text-[28px] leading-[36px] max-w-[1200px] py-2" itemProp="headline">{post.frontmatter.title}</h1>
>>>>>>> f2c6c1e (add read more blogs)
          <img className="max-h-[400px] w-full" src={thumbnail} />
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
<<<<<<< HEAD
<<<<<<< HEAD
          className="max-w-[1200px] m-auto opacity-[0.8] sml:text-[18px] sm:text-[20px] sm:leading-[28px]  py-2"
=======
          className="max-w-[1200px] m-auto opacity-[0.8] text-[20px] leading-[28px]  py-2"
>>>>>>> eeb02de (added responsive style and blog post)
=======
          className="max-w-[1200px] m-auto opacity-[0.8] sml:text-[18px] sm:text-[20px] sm:leading-[28px]  py-2"
>>>>>>> f2c6c1e (add read more blogs)
        />
        <hr />
        <footer>
        </footer>
      </article>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f2c6c1e (add read more blogs)
      <p className="text-primary text-[24px] sml:text-[28px] text-[#1382C7] mt-10 text-center">More Blogs</p>
      <nav className="text-primary">
        <ul className="mt-10 flex flex-wrap justify-around"
       >
<<<<<<< HEAD
          <li>
            {previous && (
                <div className="max-w-[400px] mt-5">
                <img className="h-[140px]" src={ previous.frontmatter.thumbnail.childImageSharp.gatsbyImageData.images
=======
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
>>>>>>> eeb02de (added responsive style and blog post)
=======
          <li>
            {previous && (
                <div className="max-w-[400px] mt-5">
                <img className="h-[140px]" src={ previous.frontmatter.thumbnail.childImageSharp.gatsbyImageData.images
>>>>>>> f2c6c1e (add read more blogs)
                .fallback.src} />
                ← 
                <p className="sml:text-[18px] mt-2">{previous.frontmatter.title}</p>
                <section
                    dangerouslySetInnerHTML={{ __html: previous.excerpt }}
                    itemProp="articleBody"
                    className="text-[12px] sml:text-[12px] max-h-[100px] py-2"
                  />           
                  <div className="flex justify-between items-center">
<<<<<<< HEAD
<<<<<<< HEAD
                    <p className="opacity-[0.4]">{previous.frontmatter.readtime}</p>
                    <Link to={previous.fields.slug} rel="prev">
                    <p className="sml:text-[18px]">Read More</p>
=======
                    <p>{previous.frontmatter.readtime}</p>
                    <Link to={previous.fields.slug} rel="prev">
                    <p>Read More</p>
>>>>>>> eeb02de (added responsive style and blog post)
=======
                    <p className="opacity-[0.4]">{previous.frontmatter.readtime}</p>
                    <Link to={previous.fields.slug} rel="prev">
                    <p className="sml:text-[18px]">Read More</p>
>>>>>>> f2c6c1e (add read more blogs)
                    </Link>
                  </div>

                       </div>
            )}
          </li>
          <li>
            {next && (
               <div className="max-w-[400px] mt-5">
               <img className="h-[140px] w-full" src={ next.frontmatter.thumbnail.childImageSharp.gatsbyImageData.images
               .fallback.src} />
               ← 
               <p className="sml:text-[18px] mt-2">{next.frontmatter.title}</p>
               <section
                   dangerouslySetInnerHTML={{ __html: next.excerpt }}
                   itemProp="articleBody"
                   className="text-[12px] sml:text-[12px] max-h-[100px] py-2"
                 />           
                 <div className="flex justify-between items-center">
                   <p className="opacity-[0.4]">{next.frontmatter.readtime}</p>
                   <Link to={next.fields.slug} rel="prev">
                   <p className="sml:text-[18px]">Read More</p>
                   </Link>
                 </div>

                      </div>
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
      excerpt(pruneLength: 100)
      fields {
        slug
      }
      frontmatter {
        title
        description
<<<<<<< HEAD
<<<<<<< HEAD
        readtime
=======
>>>>>>> eeb02de (added responsive style and blog post)
=======
        readtime
>>>>>>> f2c6c1e (add read more blogs)
        thumbnail {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

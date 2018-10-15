import React, { Component } from 'react'
import Link from 'next/link'

import Layout from '../components/Layout'
import withHeaderMenu, { InjectedMenuProps } from '../hoc/withHeaderMenu'
import { Config } from '../config'
import { WPPost } from 'interfaces/api'

interface IndexPageProps extends InjectedMenuProps {
  posts: WPPost[]
  pages: WPPost[]
  page: WPPost
}

class IndexPage extends Component<IndexPageProps> {
  public static async getInitialProps() {
    const page = await fetch(`${Config.apiUrl}/wp-json/postlight/v1/frontpage`).then(res => res.json())
    const posts = await fetch(`${Config.apiUrl}/wp-json/wp/v2/posts?_embed`).then(res => res.json())
    const pages = await fetch(`${Config.apiUrl}/wp-json/wp/v2/pages?_embed`).then(res => res.json())

    return { page, posts, pages }
  }

  public render() {
    const { posts, pages, page, headerMenu } = this.props

    const allPosts = posts.map((post, index) => {
      return (
        <ul key={index}>
          <li>
            <Link as={`/post/${post.slug}`} href={`/post?slug=${post.slug}&apiRoute=post`}>
              <a>{post.title.rendered}</a>
            </Link>
          </li>
        </ul>
      )
    })
    const allPages = pages.map((pg, index) => {
      return (
        <ul key={index}>
          <li>
            <Link as={`/page/${pg.slug}`} href={`/post?slug=${pg.slug}&apiRoute=page`}>
              <a>{pg.title.rendered}</a>
            </Link>
          </li>
        </ul>
      )
    })
    return (
      <Layout menu={headerMenu}>
        <img src="/static/images/wordpress-plus-react-header.png" width="815" className="header-image" />
        <h1>{page.title.rendered}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: page.content.rendered
          }}
        />
        <h2>Posts</h2>
        {allPosts}
        <h2>Pages</h2>
        {allPages}

        <style jsx>{`
          .header-image {
            margin-top: 50px;
            margin-bottom: 50px;
          }
        `}</style>
      </Layout>
    )
  }
}

export default withHeaderMenu(IndexPage)

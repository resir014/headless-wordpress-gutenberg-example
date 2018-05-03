import React, { Component } from 'react'
import Link from 'next/link'

import Layout from '../components/Layout'
import withHeaderMenu, { InjectedMenuProps } from '../components/withHeaderMenu'
import Menu from '../components/Menu'
import { Config } from '../config'
import { WPPost } from 'interfaces/api'

interface IndexPageProps extends InjectedMenuProps {
  posts: WPPost[]
  pages: WPPost[]
  page: WPPost
}

class IndexPage extends Component<IndexPageProps> {
  public static async getInitialProps() {
    const pageRes = await fetch(`${Config.apiUrl}/wp-json/postlight/v1/frontpage`)
    const page = await pageRes.json()
    const postsRes = await fetch(`${Config.apiUrl}/wp-json/wp/v2/posts?_embed`)
    const posts = await postsRes.json()
    const pagesRes = await fetch(`${Config.apiUrl}/wp-json/wp/v2/pages?_embed`)
    const pages = await pagesRes.json()
    return { page, posts, pages }
  }

  public render() {
    const posts = this.props.posts.map((post: any, index: number) => {
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
    const pages = this.props.pages.map((page: any, index: number) => {
      return (
        <ul key={index}>
          <li>
            <Link as={`/page/${page.slug}`} href={`/post?slug=${page.slug}&apiRoute=page`}>
              <a>{page.title.rendered}</a>
            </Link>
          </li>
        </ul>
      )
    })
    return (
      <Layout>
        <Menu menu={this.props.headerMenu} />
        <img
          src="/static/images/wordpress-plus-react-header.png"
          width="815"
          className="header-image"
        />
        <h1>{this.props.page.title.rendered}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: this.props.page.content.rendered
          }}
        />
        <h2>Posts</h2>
        {posts}
        <h2>Pages</h2>
        {pages}

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

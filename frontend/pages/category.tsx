import React, { Component } from 'react'
import Link from 'next/link'
import Error from 'next/error'

import Layout from '../components/Layout'
import withHeaderMenu, { InjectedMenuProps } from '../hoc/withHeaderMenu'
import Menu from '../components/Menu'
import { Config } from '../config'
import { NextContext } from 'next'
import { WPPost } from 'interfaces/api'

interface IndexPageProps extends InjectedMenuProps {
  categories: any
  posts: WPPost[]
}

class CategoryPage extends Component<IndexPageProps> {
  public static async getInitialProps(context: NextContext) {
    const { slug } = context.query
    const categories = await fetch(`${Config.apiUrl}/wp-json/wp/v2/categories?slug=${slug}`).then(res => res.json())

    if (categories.length > 0) {
      const postsRes = await fetch(`${Config.apiUrl}/wp-json/wp/v2/posts?_embed&categories=${categories[0].id}`)
      const posts = await postsRes.json()
      return { categories, posts }
    }
    return { categories }
  }

  public render() {
    if (this.props.categories.length === 0) return <Error statusCode={404} />

    const posts = this.props.posts.map((post, index) => {
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
    return (
      <Layout>
        <Menu menu={this.props.headerMenu} />
        <h1>{this.props.categories[0].name} Posts</h1>
        {posts}
      </Layout>
    )
  }
}

export default withHeaderMenu(CategoryPage)

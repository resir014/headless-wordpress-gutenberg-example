import React, { Component } from 'react'
import { NextContext } from 'next'
import Error from 'next/error'

import Layout from '../components/Layout'
import withHeaderMenu, { InjectedMenuProps } from '../hoc/withHeaderMenu'
import { Config } from '../config'
import { WPPost } from '../interfaces/api'

import blockStyles from '@wordpress/block-library/build-style/style.css'

interface PostProps extends InjectedMenuProps {
  post: WPPost
}

class PostPage extends Component<PostProps> {
  public static async getInitialProps(context: NextContext) {
    const { slug, apiRoute } = context.query
    const res = await fetch(`${Config.apiUrl}/wp-json/postlight/v1/${apiRoute}?slug=${slug}`)
    const post = await res.json()
    return { post }
  }

  public render() {
    const { post, headerMenu } = this.props

    if (!post.title) return <Error statusCode={404} />

    return (
      <Layout menu={headerMenu}>
        <h1>{post.title.rendered}</h1>
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: post.content.rendered
          }}
        />
        <style global jsx>
          {blockStyles}
        </style>
      </Layout>
    )
  }
}

export default withHeaderMenu(PostPage)

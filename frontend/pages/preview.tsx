import React, { Component } from 'react'
import { withRouter, WithRouterProps } from 'next/router'
import Error from 'next/error'

import Layout from '../components/Layout'
import withHeaderMenu, { InjectedMenuProps } from '../hoc/withHeaderMenu'
import { Config } from '../config'
import { WPPost, WPErrorResponse } from '../interfaces/api'

import blockStyles from '@wordpress/block-library/build-style/style.css'

interface PageQuery {
  id: string
  wpnonce: string
}

interface PreviewProps extends InjectedMenuProps, WithRouterProps<PageQuery> {
  url: {
    query: {
      [key: string]: string
    }
  }
}

interface PreviewState {
  post?: WPPost
  error?: WPErrorResponse
}

class PreviewPage extends Component<PreviewProps, PreviewState> {
  constructor(props: PreviewProps) {
    super(props)
    this.state = {
      post: undefined
    }
  }

  public componentDidMount() {
    const { id, wpnonce } = this.props.router.query
    fetch(
      `${Config.apiUrl}/wp-json/postlight/v1/post/preview?id=${id}&_wpnonce=${wpnonce}`,
      { credentials: 'include' } // required for cookie nonce auth
    )
      .then(res => res.json())
      .then(res => {
        if (res.code || res.code === 'rest_cookie_invalid_nonce') {
          this.setState({
            error: res
          })
        } else {
          this.setState({
            post: res
          })
        }
      })
  }

  public render() {
    const { headerMenu } = this.props
    const { post, error } = this.state

    if (error) return <Error statusCode={error.data.status || 404} />

    return (
      <Layout menu={headerMenu}>
        <h1>{post ? post.title.rendered : ''}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: post ? post.content.rendered : ''
          }}
        />
        <style global jsx>
          {blockStyles}
        </style>
      </Layout>
    )
  }
}

export default withRouter(withHeaderMenu(PreviewPage))

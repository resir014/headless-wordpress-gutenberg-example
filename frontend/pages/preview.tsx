import React, { Component } from 'react'
import Error from 'next/error'

import Layout from '../components/Layout'
import PageWrapper, { InjectedProps } from '../components/PageWrapper'
import Menu from '../components/Menu'
import { Config } from '../config'
import { WPPost, WPErrorResponse } from '../interfaces/api'

interface PreviewProps extends InjectedProps {
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

class Preview extends Component<PreviewProps, PreviewState> {
  constructor(props: PreviewProps) {
    super(props)
    this.state = {
      post: undefined
    }
  }

  public componentDidMount() {
    const { id, wpnonce } = this.props.url.query
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
    if (this.state.error) return <Error statusCode={404} />

    return (
      <Layout>
        <Menu menu={this.props.headerMenu} />
        <h1>{this.state.post ? this.state.post.title.rendered : ''}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: this.state.post ? this.state.post.content.rendered : ''
          }}
        />
      </Layout>
    )
  }
}

export default PageWrapper(Preview)

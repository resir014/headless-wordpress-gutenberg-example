import React, { Component } from 'react'
import Link from 'next/link'
import { WPMenu, WPMenuItem } from 'interfaces/api'

interface MenuProps {
  menu: WPMenu
}

class Menu extends Component<MenuProps> {
  constructor(props: any) {
    super(props)
  }

  public getSlug(url: string) {
    const parts = url.split('/')
    return parts.length > 2 ? parts[parts.length - 2] : ''
  }

  public render() {
    const { menu } = this.props

    return (
      <nav>
        <Link href="/">
          <a className="menu-link">Home</a>
        </Link>

        {menu.items.map((item: WPMenuItem) => {
          if (item.object === 'custom') {
            return (
              <Link href={item.url} key={item.ID}>
                <a className="menu-link">{item.title}</a>
              </Link>
            )
          }
          const slug = this.getSlug(item.url)
          const actualPage = item.object === 'category' ? 'category' : 'post'
          return (
            <Link as={`/${item.object}/${slug}`} href={`/${actualPage}?slug=${slug}&apiRoute=${item.object}`} key={item.ID}>
              <a className="menu-link">{item.title}</a>
            </Link>
          )
        })}

        <style jsx>{`
          .menu-link {
            margin-right: 15px;
          }
        `}</style>
      </nav>
    )
  }
}

export default Menu

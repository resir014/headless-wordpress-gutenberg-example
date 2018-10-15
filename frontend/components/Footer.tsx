import * as React from 'react'
import Link from 'next/link'

const Footer = () => (
  <footer>
    <hr className="footer-rule" />
    <p>
      ❤️{' '}
      <Link href="https://postlight.com">
        <a>Made by Postlight</a>
      </Link>
      . 🍴{' '}
      <Link href="https://github.com/postlight/headless-wp-starter">
        <a>Fork on GitHub</a>
      </Link>
      .
    </p>
    <p>
      👋 Need help with your publishing platform?{' '}
      <Link href="mailto:hello@postlight.com?subject=Partner+with+Postlight+on+a+headless+CMS+project">
        <a>Say hi.</a>
      </Link>
    </p>

    <style jsx>{`
      .footer-rule {
        margin-top: 75px;
      }
    `}</style>
  </footer>
)

export default Footer

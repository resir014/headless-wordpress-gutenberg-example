import * as React from 'react'
import Link from 'next/link'

import * as styles from 'styles/components/Footer.scss'

const Footer = () => (
  <div>
    <hr className={styles.footerRule} />
    <p>
      ❤️{' '}
      <Link href="https://postlight.com">
        <a>Made by Postlight</a>
      </Link>. 🍴{' '}
      <Link href="https://github.com/postlight/headless-wp-starter">
        <a>Fork on GitHub</a>
      </Link>.
    </p>
    <p>
      👋 Need help with your publishing platform?{' '}
      <Link href="mailto:hello@postlight.com?subject=Partner+with+Postlight+on+a+headless+CMS+project">
        <a>Say hi.</a>
      </Link>
    </p>
  </div>
)

export default Footer

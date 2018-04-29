import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Menu from './Menu';
import { Config } from '../config';

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title>WordPress + React Starter Kit Frontend by Postlight</title>
        </Head>
      </div>
    );
  }
}

export default Header;

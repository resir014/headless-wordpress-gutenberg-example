![WordPress + React Starter Kit](frontend/static/images/wordpress-plus-react-header.png)

This is a fork of [Postlight's Headless WordPress toolkit](https://github.com/postlight/headless-wp-starter) which includes support for [Gutenberg](https://wordpress.org/gutenberg/). You can read all about it in [this handy introduction](https://trackchanges.postlight.com/introducing-postlights-wordpress-react-starter-kit-a61e2633c48c).

## What's inside

- An automated installer script which bootstraps a core WordPress installation.
- [Gutenberg](https://wordpress.org/gutenberg/), WordPress' next-generation post editor, installed as a plugin.
- [Advanced Custom Fields](https://www.advancedcustomfields.com/) and [Custom Post Type UI](https://wordpress.org/plugins/custom-post-type-ui/).
- Plugins which expose ACF fields and WordPress menus in the [WP REST API](https://developer.wordpress.org/rest-api/) ([ACF to WP API](https://wordpress.org/plugins/acf-to-wp-api/) and [WP-REST-API V2 Menus](https://wordpress.org/plugins/wp-rest-api-v2-menus/)).
- All the starter WordPress theme code and settings headless requires, including pretty permalinks, CORS `Allow-Origin` headers, and useful logging functions for easy debugging.
- A starter frontend React app powered by [Next.js](https://nextjs.org/).
- A [Docker](https://www.docker.com/) container and scripts to manage it, for easily running the frontend React app locally or deploying it to any hosting provider with Docker support.

Let's get started.

## Prerequisites

Before you get started, make sure you have the following tools set up and added to your `PATH` environment variable.

### Node.js (8.9+)

Node.js is the JavaScript runtime we use in the frontend. Download and install it from [this link](https://nodejs.org/en/).

Alternatively, if you're on a macOS or Linux system, you can also [install Node.js](https://nodejs.org/en/download/package-manager/) through your operating system's package manager.

### PHP (7.1+)

The easiest way to install PHP on macOS + Linux is through a package manager (e.g. [Homebrew](https://brew.sh/) for macOS). This will automatically install PHP on your machine and add it to your `PATH` environment variable.

For Windows, the recommended way to install PHP is through [XAMPP](https://www.apachefriends.org/) This is an all-in-one PHP development environment which includes PHP, Apache, and MySQL out of the box. After installing, make sure that the PHP executable is added to your system's `PATH`.

### MySQL/MariaDB (10.2+)

The easiest way to install MySQL on macOS + Linux is through a package manager (e.g. [Homebrew](https://brew.sh/) for macOS). This will automatically install MySQL on your machine and add it to your `PATH` environment variable.

For Windows, if you've installed XAMPP as in the previous guide, you should already have MySQL installed! Don't forget to add the MySQL executable to your system's `PATH`.

### Composer

Once you have installed PHP and added it to your `PATH`, we can now install [Composer](https://getcomposer.org/), which is a package manager for PHP. We'll use it to install the PHP tools we use.

Follow the [installation guides](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx) for your specific operating system, and make sure that Composer is properly installed by running:

```sh-session
$ composer
```

### WP-CLI

[WP-CLI](https://wp-cli.org/) is WordPress' official CLI tool. Install it via composer:

```sh-session
$ composer global require wp-cli/wp-cli-bundle
```

Make sure that WP-CLI is properly installed by running:

```sh-session
$ wp help
```

### Robo

[Robo](https://robo.li/) is a configurable task runner. Think Gulp, but for PHP.

Install it via composer:

```sh-session
$ composer global require consolidation/robo
```

Make sure that Robo is properly installed by running:

```sh-session
$ robo -h
```

## WordPress Backend

### Initial setup

Before setting up, make a copy of the `robo-sample.yml` file, and name it `robo.yml`. This will contain your WordPress setup configurations.

To set up your new WordPress instance properly configured for headless development, run the following command.

```sh-session
$ robo wordpress:setup
```

### Running the server

Once finished, we can now run the WordPress server.

```sh-session
$ robo server
```

- The WordPress REST API is available at [http://localhost:8080](http://localhost:8080)
- The WordPress admin is at [http://localhost:8080/wp-admin/](http://localhost:8080/wp-admin/) (default login credentials: `nedstark` / `winteriscoming`)

### Extend the WordPress API

At this point you can start setting up custom fields in the WordPress admin, and if necessary, creating [custom REST API endpoints](https://developer.wordpress.org/rest-api/extending-the-rest-api/adding-custom-endpoints/) in the Postlight Headless WordPress Starter theme. The primary theme code is located in `wordpress/wp-content/themes/postlight-headless-wp`. As you modify the theme code, be sure to [use WordPress coding standards](https://github.com/postlight/headless-wp-starter/blob/master/wordpress/wp-content/themes/postlight-headless-wp/README.md).

## React Frontend

### Running the server

To spin up the frontend client app, run the following commands:

```sh-session
$ cd frontend
$ yarn
$ yarn dev
```

The Next.js app will be running on [http://localhost:3000](http://localhost:3000).

### Docker

Most WordPress hosts don't also host Node applications, so when it's time to go live, you will need to find a hosting service for the frontend.

That's why we've packaged the frontend app in a Docker container, which can be deployed to a hosting provider with Docker support like Amazon Web Services or Google Cloud Platform. For a fast, easier alternative, check out [Now](https://zeit.co/now).

To run the Docker container locally:

1.  Install [Docker](https://www.docker.com/) on your computer.
2.  In `frontend/config.js`, replace `localhost:8080` with your publicly-accessible WordPress installation's domain name or IP address.
3.  Start the container by running this command:

```sh-session
$ yarn deploy
```

## Troubleshooting Common Errors

**`ERROR 1045 (28000): Access denied for user 'root'@'localhost' (using password: NO)`**

If you receive this error, it likely means another version of MySQL, not the version that was installed by this script, is being referenced by the MySQL command.

1.  Open up your `.bash_profile`, and see if there is a reference to MySQL in your PATH or if MySQL is being exported as a function. Remove it.

2.  Repeat the installation process. If you still have errors, then look for - and remove - other versions of MySQL by following [these "Remove MySQL" instructions](https://coderwall.com/p/os6woq/uninstall-all-those-broken-versions-of-mysql-and-re-install-it-with-brew-on-mac-mavericks).

See anything else you'd like to add here? Please send a pull request!

---

Made with ❤️ by [Postlight](https://postlight.com). Happy coding!

=== Gutenberg ===
Contributors: matveb, joen, karmatosed
Requires at least: 4.9.8
Tested up to: 4.9
Stable tag: 3.8.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

A new editing experience for WordPress is in the works, with the goal of making it easier than ever to make your words, pictures, and layout look just right. This is the beta plugin for the project.

== Description ==

Gutenberg is more than an editor. While the editor is the focus right now, the project will ultimately impact the entire publishing experience including customization (the next focus area).

<a href="https://wordpress.org/gutenberg">Discover more about the project</a>.

= Editing focus =

> The editor will create a new page- and post-building experience that makes writing rich posts effortless, and has “blocks” to make it easy what today might take shortcodes, custom HTML, or “mystery meat” embed discovery. — Matt Mullenweg

One thing that sets WordPress apart from other systems is that it allows you to create as rich a post layout as you can imagine -- but only if you know HTML and CSS and build your own custom theme. By thinking of the editor as a tool to let you write rich posts and create beautiful layouts, we can transform WordPress into something users _love_ WordPress, as opposed something they pick it because it's what everyone else uses.

Gutenberg looks at the editor as more than a content field, revisiting a layout that has been largely unchanged for almost a decade.This allows us to holistically design a modern editing experience and build a foundation for things to come.

Here's why we're looking at the whole editing screen, as opposed to just the content field:

1. The block unifies multiple interfaces. If we add that on top of the existing interface, it would _add_ complexity, as opposed to remove it.
2. By revisiting the interface, we can modernize the writing, editing, and publishing experience, with usability and simplicity in mind, benefitting both new and casual users.
3. When singular block interface takes center stage, it demonstrates a clear path forward for developers to create premium blocks, superior to both shortcodes and widgets.
4. Considering the whole interface lays a solid foundation for the next focus, full site customization.
5. Looking at the full editor screen also gives us the opportunity to drastically modernize the foundation, and take steps towards a more fluid and JavaScript powered future that fully leverages the WordPress REST API.

= Blocks =

Blocks are the unifying evolution of what is now covered, in different ways, by shortcodes, embeds, widgets, post formats, custom post types, theme options, meta-boxes, and other formatting elements. They embrace the breadth of functionality WordPress is capable of, with the clarity of a consistent user experience.

Imagine a custom “employee” block that a client can drag to an About page to automatically display a picture, name, and bio. A whole universe of plugins that all extend WordPress in the same way. Simplified menus and widgets. Users who can instantly understand and use WordPress  -- and 90% of plugins. This will allow you to easily compose beautiful posts like <a href="http://moc.co/sandbox/example-post/">this example</a>.

Check out the <a href="https://wordpress.org/gutenberg/handbook/reference/faq/">FAQ</a> for answers to the most common questions about the project.

= Compatibility =

Posts are backwards compatible, and shortcodes will still work. We are continuously exploring how highly-tailored metaboxes can be accommodated, and are looking at solutions ranging from a plugin to disable Gutenberg to automatically detecting whether to load Gutenberg or not. While we want to make sure the new editing experience from writing to publishing is user-friendly, we’re committed to finding  a good solution for highly-tailored existing sites.

= The stages of Gutenberg =

Gutenberg has three planned stages. The first, aimed for inclusion in WordPress 5.0, focuses on the post editing experience and the implementation of blocks. This initial phase focuses on a content-first approach. The use of blocks, as detailed above, allows you to focus on how your content will look without the distraction of other configuration options. This ultimately will help all users present their content in a way that is engaging, direct, and visual.

These foundational elements will pave the way for stages two and three, planned for the next year, to go beyond the post into page templates and ultimately, full site customization.

Gutenberg is a big change, and there will be ways to ensure that existing functionality (like shortcodes and meta-boxes) continue to work while allowing developers the time and paths to transition effectively. Ultimately, it will open new opportunities for plugin and theme developers to better serve users through a more engaging and visual experience that takes advantage of a toolset supported by core.

= Contributors =

Gutenberg is built by many contributors and volunteers. Please see the full list in <a href="https://github.com/WordPress/gutenberg/blob/master/CONTRIBUTORS.md">CONTRIBUTORS.md</a>.

== Frequently Asked Questions ==

= How can I send feedback or get help with a bug? =

We'd love to hear your bug reports, feature suggestions and any other feedback! Please head over to <a href="https://github.com/WordPress/gutenberg/issues">the GitHub issues page</a> to search for existing issues or open a new one. While we'll try to triage issues reported here on the plugin forum, you'll get a faster response (and reduce duplication of effort) by keeping everything centralized in the GitHub repository.

= How can I contribute? =

We’re calling this editor project "Gutenberg" because it's a big undertaking. We are working on it every day in GitHub, and we'd love your help building it.You’re also welcome to give feedback, the easiest is to join us in <a href="https://make.wordpress.org/chat/">our Slack channel</a>, `#core-editor`.

See also <a href="https://github.com/WordPress/gutenberg/blob/master/CONTRIBUTING.md">CONTRIBUTING.md</a>.

= Where can I read more about Gutenberg? =

- <a href="http://matiasventura.com/post/gutenberg-or-the-ship-of-theseus/">Gutenberg, or the Ship of Theseus</a>, with examples of what Gutenberg might do in the future
- <a href="https://make.wordpress.org/core/2017/01/17/editor-technical-overview/">Editor Technical Overview</a>
- <a href="https://wordpress.org/gutenberg/handbook/reference/design-principles/">Design Principles and block design best practices</a>
- <a href="https://github.com/Automattic/wp-post-grammar">WP Post Grammar Parser</a>
- <a href="https://make.wordpress.org/core/tag/gutenberg/">Development updates on make.wordpress.org</a>
- <a href="https://wordpress.org/gutenberg/handbook/">Documentation: Creating Blocks, Reference, and Guidelines</a>
- <a href="https://wordpress.org/gutenberg/handbook/reference/faq/">Additional frequently asked questions</a>


== Changelog ==

= Latest =

* 🏗 Add support for creating reusable blocks out of multi-selected groups of blocks not just individual blocks. This means the ability to easily save templates out of an existing set of blocks.
* 🚀 Add support for importing and exporting reusable blocks (using a JSON file transport). Note that locality of resources can be a problem if importing on a separate WordPress site.
* 🔍 Allow to visually show differences between conversion options when a block is detected as invalid.
* Add a clear drag handle next to the block arrow controls to drag and move a block. Also further polishes the drag and drop experience.
* Instrument collapsible groups for the block toolbar. It allows to display groups of options as a dropdown and reduce the length and imposition of the toolbar as a whole.
* Allow conversion from Cover Image to Image and back, using caption if it exists as the main text.
* Move the reusable block UI options to the top of the block or block group.
* Focus the title when loading the editor if it’s empty.
* Adjust margin rules for nested blocks.
* Preserve aspect ratio on embedded content at different alignments and widths.
* Unselect blocks and disable inserter when switching to Code Editor.
* Add new default block icon (used when no icon is defined).
* Avoid showing stacked icon group on parent blocks if all of its children are meant to be hidden from the inserter.
* Add dark editor style support.
* Add a figure wrapper to Pullquote block.
* Add needed attributes to kses allowed tags for the Gallery block.
* Improve visual display of Classic block toolbar.
* Adjust unified block toolbar padding at medium breakpoints.
* Better align the close, chevrons, and ellipsis icons in the sidebar panel.
* Improve cropping of galleries in IE11.
* Adjust gallery caption flex alignment.
* Include Caption Styles in Video Block.
* Update RichText usage to avoid inline elements.
* Add shortcut aria label for unreadable shortcuts.
* Avoid triggering invalid block mechanisms on empty HTML content.
* Rename the Speaker block to Speaker Deck.
* Disable inserter on Column block and avoid showing stacked icon on columns.
* Send post_id to the REST API in the ServerSideRender component within the editor. This ensures the global $post object is set properly.
* Use pseudo element to prevent inspector tab width from changing when selected.
* Apply consistent spacing on the post visibility menu.
* Fix notice styling regression.
* Fix ability to select small table cells.
* Fix issue with drag and drop in Chrome when the document has iframes.
* Fix HTML validation issues.
* Fix margin style regression with block appender.
* Fix link source for outreach/articles.
* Fix Archives block alignment and issue with custom classes.
* Fix error when a taxonomy has no attached post type.
* Fix invalid block scrim overflowing toolbar on mobile.
* Fix block settings menu appearance in non wp-admin contexts.
* Fix incorrect unlink shortcut.
* Fix placeholder text contrast.
* Fix issue with shortcut inserter on invalid paragraphs.
* Fix camelCase and cross-component class name.
* Fix qs dependency typo.
* Pluralize “kind” to fix typo.
* Remove isButton prop.
* Remove wrapper div from Categories block.
* Remove prop-type-like check in Popover component.
* Remove unnecessary duplicated class from Embed placeholder.
* Flatten BlockListLayout into base BlockList.
* Add isEmptyElement utility function under wp.Element.
* Use HTML Document for finding iframe in embed previews.
* Add wp-polyfill as central polyfill.
* Update docke-compose setup order to create MySQL container before WordPress container.
* Improve comments in transforms object of Quote block.
* Do not assume that singular form in _n() is used just for single item.
* Update examples for components to look according to guidelines.
* Update release docs to include process for RC.
* Add simplified block grammar spec to the handbook.
* Add lint rule for path on Lodash property functions.
* Add user for cli image in docker-compose.
* Show lint errors when there are lint problems.
* Minor updates and improvements to documents and code references.
* Improve docs build to consider memoized selectors.
* Add Heading toolbar for changing heading sizes.
* Save level to heading block attributes for parsing.
* Add onEnter callback and function placeholder to RichText implementation.
* Add Image block placeholder.
* Avoid propagating eventCount to components.
* Parser: Output freeform content before void blocks.
* Fix export block as JSON in IE11 and Firefox.
* Update demo content to avoid invalidations or automated post updates.

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Documentation and guides",
  tagline:
    "Documentation site for all my Azure DevOps Extensions as well as a developer guide to building extensions",
  url: "https://devops-extensions.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon-16x16.png",
  organizationName: "devops-extensions", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Extension Documentation",
        logo: {
          alt: "My Site Logo",
          src: "img/jd-logo.png",
        },
        items: [
          {
            type: "dropdown",
            label: "Extensions",
            position: "left",
            items: [
              {
                type: "doc",
                docId: "extensions/pull-request-utils/index",
                label: "Pull Request Utils",
              },
              {
                type: "doc",
                docId: "extensions/env-transform/index",
                label: "Env Transform",
              },
              {
                type: "doc",
                docId: "extensions/gitguard/index",
                label: "GitGuard",
              },
              {
                type: "doc",
                docId: "extensions/auto-state/index",
                label: "Auto State",
              },
            ],
          },
          {
            type: "dropdown",
            label: "Tools",
            position: "left",
            items: [
              {
                href: "https://github.com/joachimdalen/azext/blob/master/docs/index.md",
                label: "AzExt",
              },
              {
                href: "https://github.com/joachimdalen/azdevops-ext-core",
                label: "Ext Core",
              },
            ],
          },
          // {
          //   type: "doc",
          //   docId: "guide/index",
          //   label: "Guide",
          //   position: "left",
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          // {
          //   title: "Docs",
          //   items: [
          //     {
          //       label: "Tutorial",
          //       to: "/docs/intro",
          //     },
          //   ],
          // },
          // {
          //   title: "GitHub",
          //   items: [
          //     {
          //       label: "Auto State",
          //       href: "https://github.com/joachimdalen/azdevops-auto-state",
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Joachim Dalen. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

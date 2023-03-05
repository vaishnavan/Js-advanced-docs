// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "JS World",
  tagline: "Learn how to start your career in web development",
  favicon:
    "data:image/png;base64,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",

  // Set the production url of your site here
  url: "https://jsblogworld.netlify.app/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    (
      {
      // Replace with your project's social card
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true
        
      },
      navbar: {
        title: "<JS__World />",
        items: [
          {
            type: "docSidebar", // docSidebar
            position: "left",
            sidebarId: "newone", // foldername
            label: "JavaScript", // navbar title
          },
          {
            type: "docSidebar", // docSidebar
            position: "left",
            sidebarId: "newtwo", // foldername
            label: "React", // navbar title
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://vaishnavanmresume.web.app/",
            label: "Portfolio",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Javascript",
                to: "/docs/newone/intro",
              },
            ],
          },
          {
            title: "Quick links",
            items: [
              {
                label: "Portfolio",
                href: "https://vaishnavanmresume.web.app/",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/sakthi_ns_pulsar_5/",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/vaishnavan-m-60005a1b5/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/vaishnavan",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

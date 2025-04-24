// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Manual para Implementar un Gestor de Contraseñas",
  tagline: "Introducción",
  favicon: "img/logo.pngo",

  url: "https://934191747.facturalo.co",
  baseUrl: "/docusaurus/",

  organizationName: "dayannecueva",
  projectName: "docusaurus",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Manual",
        logo: {
          alt: "Gestor Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Inicio",
          },
          {
            href: "https://github.com/dayannecueva",
            label: "GitHub",
            position: "right",
          },
        ],
      },
    }),
};

export default config;

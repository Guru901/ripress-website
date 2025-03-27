import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ripress",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [],

    sidebar: [
      {
        text: "Getting Started",
        link: "/getting-started",
      },
      {
        text: "API",
        collapsed: true,
        items: [
          { text: "App", link: "/apis/app" },
          { text: "Request", link: "/apis/request" },
          { text: "Response", link: "/apis/response" },
          { text: "Router", link: "/apis/router" },
        ],
      },
      {
        text: "Examples",
        collapsed: true,
        items: [
          { text: "Basic", link: "/examples/basic" },
          { text: "Blog", link: "/examples/blog" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
      { icon: "x", link: "https://github.com/vuejs/vitepress" },
    ],
    search: {
      provider: "local",
    },
    footer: {
      message: "Released under the MIT License.",
    },
  },
});

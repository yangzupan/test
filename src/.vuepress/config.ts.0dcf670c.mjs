// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/navbar.ts
import { navbar } from "vuepress-theme-hope";
var navbar_default = navbar([
  "/",
  "/demo/",
  {
    text: "\u535A\u6587",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "\u82F9\u679C",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "\u82F9\u679C1", icon: "pen-to-square", link: "1" },
          { text: "\u82F9\u679C2", icon: "pen-to-square", link: "2" },
          "3",
          "4"
        ]
      },
      {
        text: "\u9999\u8549",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "\u9999\u8549 1",
            icon: "pen-to-square",
            link: "1"
          },
          {
            text: "\u9999\u8549 2",
            icon: "pen-to-square",
            link: "2"
          },
          "3",
          "4"
        ]
      },
      { text: "\u6A31\u6843", icon: "pen-to-square", link: "cherry" },
      { text: "\u706B\u9F99\u679C", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry"
    ]
  },
  {
    text: "V2 \u6587\u6863",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/"
  }
]);

// src/.vuepress/sidebar.ts
import { sidebar } from "vuepress-theme-hope";
var sidebar_default = sidebar({
  "/": [
    "",
    {
      text: "\u5982\u4F55\u4F7F\u7528",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure"
    },
    {
      text: "\u6587\u7AE0",
      icon: "book",
      prefix: "posts/",
      children: "structure"
    },
    "intro",
    "slides"
  ]
});

// src/.vuepress/theme.ts
var MR_HOPE_AVATAR = '<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient gradientTransform="matrix(.2478 .78133 -2.54797 .63622 910.35 281.58)" gradientUnits="userSpaceOnUse" id="a" x1="37.827" x2="159.988" y1="272.916" y2="274.63"><stop offset=".75" stop-color="#e33939"/><stop offset=".998" stop-color="#fff"/></linearGradient><linearGradient gradientTransform="matrix(.13814 .80797 2.55599 -.6032 34.087 494.369)" gradientUnits="userSpaceOnUse" id="b" x1="37.827" x2="159.988" y1="272.916" y2="274.63"><stop offset=".815" stop-color="#e33939"/><stop offset="1" stop-color="#fff"/></linearGradient></defs><path d="M135.637 588.067c-48.891-201.334 74.605-404.162 275.837-453.028 201.233-48.866 403.998 74.734 452.889 276.068 48.892 201.335-74.606 404.162-275.838 453.029-201.233 48.866-403.997-74.734-452.888-276.069Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/><path d="M596.076 197.044c-3.342-56.09 56.897-77.831 89.017-51.361m-410.65 128.819c-22.753-51.377-86.256-43.07-102.659-4.816" fill="none" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/><path d="M833.568 288.02c.05 18.046-12.584 30.699-21.346 32.211-8.762 1.512-17.031-1.099-18.584-1.341 0 0-61.363-6.103-105.627 6.921-44.265 13.026-87.04 47.387-94.637 51.892-6.627 3.928-29.112 7.697-44.462-12.938-15.351-20.636.024-41.526.024-41.526s12.685-18.279 40.771-35.123c28.088-16.844 24.624-13.226 52.326-25.696 15.247-6.865 43.319-14.186 67.429-17.069 25.193-3.011 46.348-1.384 57.673.769 22.165 4.212 28.632 5.93 39.169 9.229 12.451 3.898 27.214 14.516 27.264 32.671Z" fill="#fff" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M558.351 345.632c-3.458-14.237 5.214-28.566 19.367-32.003 14.154-3.437 28.43 5.32 31.887 19.557 3.458 14.238-5.212 28.567-19.367 32.004-14.152 3.437-28.43-5.319-31.887-19.558Z" fill="#6d5e56" fill-rule="evenodd" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.268"/><path d="M220.249 483.416c46.81-11.689 91.323-.467 99.42 25.064 8.098 25.532-23.286 55.706-70.097 67.393-46.811 11.689-91.323.467-99.42-25.064-8.097-25.532 23.286-55.706 70.097-67.393Z" fill="url(#a)" fill-rule="evenodd" opacity=".261"/><path d="M739.9 357.226c-46.959 11.082-81.367 41.469-76.853 67.871 4.514 26.402 46.241 38.821 93.198 27.738 46.958-11.081 81.366-41.467 76.853-67.869-4.514-26.403-46.241-38.821-93.198-27.74Z" fill="url(#b)" fill-rule="evenodd" opacity=".261"/><path d="M400.934 398.917c-.599 18.034-13.681 30.218-22.494 31.409-8.812 1.192-16.982-1.716-18.526-2.014 0 0-61.109-8.334-105.819 3.07-44.709 11.404-88.696 44.181-96.452 48.406-6.763 3.683-29.372 6.632-43.972-14.546-14.6-21.18 1.519-41.494 1.519-41.494s13.335-17.803 42.013-33.612c28.677-15.809 25.085-12.319 53.222-23.772 15.484-6.304 43.803-12.598 68.005-14.6 25.288-2.093 46.373.305 57.616 2.867 22 5.016 28.401 6.968 38.813 10.649 12.304 4.348 26.677 15.496 26.075 33.637Z" fill="#fff" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M129.05 445.546c-3.458-14.239 5.213-28.566 19.367-32.003 14.153-3.437 28.429 5.318 31.887 19.557 3.458 14.238-5.213 28.566-19.367 32.003-14.153 3.437-28.43-5.318-31.887-19.557Z" fill="#6d5e56" fill-rule="evenodd" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.268"/><path d="M424.381 696.386s64.427 13.646 101.996 5.757C640.653 678.146 690.8 521.894 690.8 521.894" fill="none" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/><path d="M796.04 666.774s-10.734-44.165-41.405-11.348c-9.681 10.359-10.438 40.604-28.217 81.89-15.942 37.02-39.564 60.728-42.938 76.063-3.374 15.335.451 35.992 26.352 41.537 25.902 5.545 41.967-23.381 41.967-23.381l44.241-164.761Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/><path d="M793.337 664.734c-37.075 160.045-51.73 163.145-40.343 184.845 11.387 21.701 51.417 33.716 71.876-7.313 6.734-13.505-1.31-43.317-1.511-78.077-.307-53.06 16.865-86.111 10.403-98.1-15.332-28.452-39.377-5.875-40.425-1.355Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/></svg>';
var theme_default = hopeTheme({
  hostname: "https://mister-hope.github.io",
  author: {
    name: "Mr.Hope",
    url: "https://mister-hope.com"
  },
  iconAssets: "fontawesome-with-brands",
  logo: "/logo.svg",
  repo: "vuepress-theme-hope/vuepress-theme-hope",
  docsDir: "src",
  // navbar
  navbar: navbar_default,
  // sidebar
  sidebar: sidebar_default,
  footer: "\u9ED8\u8BA4\u9875\u811A",
  displayFooter: true,
  blog: {
    description: "\u4E00\u4E2A\u524D\u7AEF\u5F00\u53D1\u8005",
    intro: "/intro.html",
    medias: {
      Baidu: "https://example.com",
      BiliBili: "https://example.com",
      Bitbucket: "https://example.com",
      Dingding: "https://example.com",
      Discord: "https://example.com",
      Dribbble: "https://example.com",
      Email: "mailto:info@example.com",
      Evernote: "https://example.com",
      Facebook: "https://example.com",
      Flipboard: "https://example.com",
      Gitee: "https://example.com",
      GitHub: "https://example.com",
      Gitlab: "https://example.com",
      Gmail: "mailto:info@example.com",
      Instagram: "https://example.com",
      Lark: "https://example.com",
      Lines: "https://example.com",
      Linkedin: "https://example.com",
      Pinterest: "https://example.com",
      Pocket: "https://example.com",
      QQ: "https://example.com",
      Qzone: "https://example.com",
      Reddit: "https://example.com",
      Rss: "https://example.com",
      Steam: "https://example.com",
      Twitter: "https://example.com",
      Wechat: "https://example.com",
      Weibo: "https://example.com",
      Whatsapp: "https://example.com",
      Youtube: "https://example.com",
      Zhihu: "https://example.com",
      MrHope: ["https://mister-hope.com", MR_HOPE_AVATAR]
    }
  },
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"]
    }
  },
  // page meta
  metaLocales: {
    editLink: "\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875"
  },
  plugins: {
    blog: true,
    // install @waline/client before enabling it
    // WARNING: This is a test server for demo only.
    // You should create and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },
    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      card: true,
      // install chart.js before enabling it
      // chart: true,
      codetabs: true,
      demo: true,
      // install echarts before enabling it
      // echarts: true,
      figure: true,
      // install flowchart.ts before enabling it
      // flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      // install katex before enabling it
      // katex: true,
      // install mathjax-full before enabling it
      // mathjax: true,
      mark: true,
      // install mermaid before enabling it
      // mermaid: true,
      playground: {
        presets: ["ts", "vue"]
      },
      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended"
              };
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true
      // install @vue/repl before enabling it
      // vuePlayground: true,
    }
    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  }
});

// src/.vuepress/config.ts
var config_default = defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "\u535A\u5BA2\u6F14\u793A",
  description: "vuepress-theme-hope \u7684\u535A\u5BA2\u6F14\u793A",
  theme: theme_default
  // Enable it with pwa
  // shouldPrefetch: false,
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOi9NeUZpbGVzLzAzX1Byb2dyYW1taW5nLzAwX1dvcmtTcGFjZS92dWVwcmVzcy90ZXN0L3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXE15RmlsZXNcXFxcMDNfUHJvZ3JhbW1pbmdcXFxcMDBfV29ya1NwYWNlXFxcXHZ1ZXByZXNzXFxcXHRlc3RcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxjb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L015RmlsZXMvMDNfUHJvZ3JhbW1pbmcvMDBfV29ya1NwYWNlL3Z1ZXByZXNzL3Rlc3Qvc3JjLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lVXNlckNvbmZpZyh7XG4gIGJhc2U6IFwiL1wiLFxuXG4gIGxhbmc6IFwiemgtQ05cIixcbiAgdGl0bGU6IFwiXHU1MzVBXHU1QkEyXHU2RjE0XHU3OTNBXCIsXG4gIGRlc2NyaXB0aW9uOiBcInZ1ZXByZXNzLXRoZW1lLWhvcGUgXHU3Njg0XHU1MzVBXHU1QkEyXHU2RjE0XHU3OTNBXCIsXG5cbiAgdGhlbWUsXG5cbiAgLy8gRW5hYmxlIGl0IHdpdGggcHdhXG4gIC8vIHNob3VsZFByZWZldGNoOiBmYWxzZSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOi9NeUZpbGVzLzAzX1Byb2dyYW1taW5nLzAwX1dvcmtTcGFjZS92dWVwcmVzcy90ZXN0L3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXE15RmlsZXNcXFxcMDNfUHJvZ3JhbW1pbmdcXFxcMDBfV29ya1NwYWNlXFxcXHZ1ZXByZXNzXFxcXHRlc3RcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFx0aGVtZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovTXlGaWxlcy8wM19Qcm9ncmFtbWluZy8wMF9Xb3JrU3BhY2UvdnVlcHJlc3MvdGVzdC9zcmMvLnZ1ZXByZXNzL3RoZW1lLnRzXCI7aW1wb3J0IHsgaG9wZVRoZW1lIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcbmltcG9ydCBuYXZiYXIgZnJvbSBcIi4vbmF2YmFyLmpzXCI7XG5pbXBvcnQgc2lkZWJhciBmcm9tIFwiLi9zaWRlYmFyLmpzXCI7XG5cbmNvbnN0IE1SX0hPUEVfQVZBVEFSID1cbiAgJzxzdmcgdmlld0JveD1cIjAgMCAxMDAwIDEwMDBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGdyYWRpZW50VHJhbnNmb3JtPVwibWF0cml4KC4yNDc4IC43ODEzMyAtMi41NDc5NyAuNjM2MjIgOTEwLjM1IDI4MS41OClcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiBpZD1cImFcIiB4MT1cIjM3LjgyN1wiIHgyPVwiMTU5Ljk4OFwiIHkxPVwiMjcyLjkxNlwiIHkyPVwiMjc0LjYzXCI+PHN0b3Agb2Zmc2V0PVwiLjc1XCIgc3RvcC1jb2xvcj1cIiNlMzM5MzlcIi8+PHN0b3Agb2Zmc2V0PVwiLjk5OFwiIHN0b3AtY29sb3I9XCIjZmZmXCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGdyYWRpZW50VHJhbnNmb3JtPVwibWF0cml4KC4xMzgxNCAuODA3OTcgMi41NTU5OSAtLjYwMzIgMzQuMDg3IDQ5NC4zNjkpXCIgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgaWQ9XCJiXCIgeDE9XCIzNy44MjdcIiB4Mj1cIjE1OS45ODhcIiB5MT1cIjI3Mi45MTZcIiB5Mj1cIjI3NC42M1wiPjxzdG9wIG9mZnNldD1cIi44MTVcIiBzdG9wLWNvbG9yPVwiI2UzMzkzOVwiLz48c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcC1jb2xvcj1cIiNmZmZcIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD1cIk0xMzUuNjM3IDU4OC4wNjdjLTQ4Ljg5MS0yMDEuMzM0IDc0LjYwNS00MDQuMTYyIDI3NS44MzctNDUzLjAyOCAyMDEuMjMzLTQ4Ljg2NiA0MDMuOTk4IDc0LjczNCA0NTIuODg5IDI3Ni4wNjggNDguODkyIDIwMS4zMzUtNzQuNjA2IDQwNC4xNjItMjc1LjgzOCA0NTMuMDI5LTIwMS4yMzMgNDguODY2LTQwMy45OTctNzQuNzM0LTQ1Mi44ODgtMjc2LjA2OVpcIiBmaWxsPVwiI2ZkZTY4YVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBzdHJva2U9XCIjZDA4ODE5XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMTBcIi8+PHBhdGggZD1cIk01OTYuMDc2IDE5Ny4wNDRjLTMuMzQyLTU2LjA5IDU2Ljg5Ny03Ny44MzEgODkuMDE3LTUxLjM2MW0tNDEwLjY1IDEyOC44MTljLTIyLjc1My01MS4zNzctODYuMjU2LTQzLjA3LTEwMi42NTktNC44MTZcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiM2ZDVlNTZcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIxMVwiLz48cGF0aCBkPVwiTTgzMy41NjggMjg4LjAyYy4wNSAxOC4wNDYtMTIuNTg0IDMwLjY5OS0yMS4zNDYgMzIuMjExLTguNzYyIDEuNTEyLTE3LjAzMS0xLjA5OS0xOC41ODQtMS4zNDEgMCAwLTYxLjM2My02LjEwMy0xMDUuNjI3IDYuOTIxLTQ0LjI2NSAxMy4wMjYtODcuMDQgNDcuMzg3LTk0LjYzNyA1MS44OTItNi42MjcgMy45MjgtMjkuMTEyIDcuNjk3LTQ0LjQ2Mi0xMi45MzgtMTUuMzUxLTIwLjYzNi4wMjQtNDEuNTI2LjAyNC00MS41MjZzMTIuNjg1LTE4LjI3OSA0MC43NzEtMzUuMTIzYzI4LjA4OC0xNi44NDQgMjQuNjI0LTEzLjIyNiA1Mi4zMjYtMjUuNjk2IDE1LjI0Ny02Ljg2NSA0My4zMTktMTQuMTg2IDY3LjQyOS0xNy4wNjkgMjUuMTkzLTMuMDExIDQ2LjM0OC0xLjM4NCA1Ny42NzMuNzY5IDIyLjE2NSA0LjIxMiAyOC42MzIgNS45MyAzOS4xNjkgOS4yMjkgMTIuNDUxIDMuODk4IDI3LjIxNCAxNC41MTYgMjcuMjY0IDMyLjY3MVpcIiBmaWxsPVwiI2ZmZlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBzdHJva2U9XCIjZDA4ODE5XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiOFwiLz48cGF0aCBkPVwiTTU1OC4zNTEgMzQ1LjYzMmMtMy40NTgtMTQuMjM3IDUuMjE0LTI4LjU2NiAxOS4zNjctMzIuMDAzIDE0LjE1NC0zLjQzNyAyOC40MyA1LjMyIDMxLjg4NyAxOS41NTcgMy40NTggMTQuMjM4LTUuMjEyIDI4LjU2Ny0xOS4zNjcgMzIuMDA0LTE0LjE1MiAzLjQzNy0yOC40My01LjMxOS0zMS44ODctMTkuNTU4WlwiIGZpbGw9XCIjNmQ1ZTU2XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIHN0cm9rZT1cIiM2ZDVlNTZcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCI2LjI2OFwiLz48cGF0aCBkPVwiTTIyMC4yNDkgNDgzLjQxNmM0Ni44MS0xMS42ODkgOTEuMzIzLS40NjcgOTkuNDIgMjUuMDY0IDguMDk4IDI1LjUzMi0yMy4yODYgNTUuNzA2LTcwLjA5NyA2Ny4zOTMtNDYuODExIDExLjY4OS05MS4zMjMuNDY3LTk5LjQyLTI1LjA2NC04LjA5Ny0yNS41MzIgMjMuMjg2LTU1LjcwNiA3MC4wOTctNjcuMzkzWlwiIGZpbGw9XCJ1cmwoI2EpXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIG9wYWNpdHk9XCIuMjYxXCIvPjxwYXRoIGQ9XCJNNzM5LjkgMzU3LjIyNmMtNDYuOTU5IDExLjA4Mi04MS4zNjcgNDEuNDY5LTc2Ljg1MyA2Ny44NzEgNC41MTQgMjYuNDAyIDQ2LjI0MSAzOC44MjEgOTMuMTk4IDI3LjczOCA0Ni45NTgtMTEuMDgxIDgxLjM2Ni00MS40NjcgNzYuODUzLTY3Ljg2OS00LjUxNC0yNi40MDMtNDYuMjQxLTM4LjgyMS05My4xOTgtMjcuNzRaXCIgZmlsbD1cInVybCgjYilcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgb3BhY2l0eT1cIi4yNjFcIi8+PHBhdGggZD1cIk00MDAuOTM0IDM5OC45MTdjLS41OTkgMTguMDM0LTEzLjY4MSAzMC4yMTgtMjIuNDk0IDMxLjQwOS04LjgxMiAxLjE5Mi0xNi45ODItMS43MTYtMTguNTI2LTIuMDE0IDAgMC02MS4xMDktOC4zMzQtMTA1LjgxOSAzLjA3LTQ0LjcwOSAxMS40MDQtODguNjk2IDQ0LjE4MS05Ni40NTIgNDguNDA2LTYuNzYzIDMuNjgzLTI5LjM3MiA2LjYzMi00My45NzItMTQuNTQ2LTE0LjYtMjEuMTggMS41MTktNDEuNDk0IDEuNTE5LTQxLjQ5NHMxMy4zMzUtMTcuODAzIDQyLjAxMy0zMy42MTJjMjguNjc3LTE1LjgwOSAyNS4wODUtMTIuMzE5IDUzLjIyMi0yMy43NzIgMTUuNDg0LTYuMzA0IDQzLjgwMy0xMi41OTggNjguMDA1LTE0LjYgMjUuMjg4LTIuMDkzIDQ2LjM3My4zMDUgNTcuNjE2IDIuODY3IDIyIDUuMDE2IDI4LjQwMSA2Ljk2OCAzOC44MTMgMTAuNjQ5IDEyLjMwNCA0LjM0OCAyNi42NzcgMTUuNDk2IDI2LjA3NSAzMy42MzdaXCIgZmlsbD1cIiNmZmZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgc3Ryb2tlPVwiI2QwODgxOVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjhcIi8+PHBhdGggZD1cIk0xMjkuMDUgNDQ1LjU0NmMtMy40NTgtMTQuMjM5IDUuMjEzLTI4LjU2NiAxOS4zNjctMzIuMDAzIDE0LjE1My0zLjQzNyAyOC40MjkgNS4zMTggMzEuODg3IDE5LjU1NyAzLjQ1OCAxNC4yMzgtNS4yMTMgMjguNTY2LTE5LjM2NyAzMi4wMDMtMTQuMTUzIDMuNDM3LTI4LjQzLTUuMzE4LTMxLjg4Ny0xOS41NTdaXCIgZmlsbD1cIiM2ZDVlNTZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgc3Ryb2tlPVwiIzZkNWU1NlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjYuMjY4XCIvPjxwYXRoIGQ9XCJNNDI0LjM4MSA2OTYuMzg2czY0LjQyNyAxMy42NDYgMTAxLjk5NiA1Ljc1N0M2NDAuNjUzIDY3OC4xNDYgNjkwLjggNTIxLjg5NCA2OTAuOCA1MjEuODk0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjZDA4ODE5XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMTFcIi8+PHBhdGggZD1cIk03OTYuMDQgNjY2Ljc3NHMtMTAuNzM0LTQ0LjE2NS00MS40MDUtMTEuMzQ4Yy05LjY4MSAxMC4zNTktMTAuNDM4IDQwLjYwNC0yOC4yMTcgODEuODktMTUuOTQyIDM3LjAyLTM5LjU2NCA2MC43MjgtNDIuOTM4IDc2LjA2My0zLjM3NCAxNS4zMzUuNDUxIDM1Ljk5MiAyNi4zNTIgNDEuNTM3IDI1LjkwMiA1LjU0NSA0MS45NjctMjMuMzgxIDQxLjk2Ny0yMy4zODFsNDQuMjQxLTE2NC43NjFaXCIgZmlsbD1cIiNmZGU2OGFcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgc3Ryb2tlPVwiI2QwODgxOVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjEwXCIvPjxwYXRoIGQ9XCJNNzkzLjMzNyA2NjQuNzM0Yy0zNy4wNzUgMTYwLjA0NS01MS43MyAxNjMuMTQ1LTQwLjM0MyAxODQuODQ1IDExLjM4NyAyMS43MDEgNTEuNDE3IDMzLjcxNiA3MS44NzYtNy4zMTMgNi43MzQtMTMuNTA1LTEuMzEtNDMuMzE3LTEuNTExLTc4LjA3Ny0uMzA3LTUzLjA2IDE2Ljg2NS04Ni4xMTEgMTAuNDAzLTk4LjEtMTUuMzMyLTI4LjQ1Mi0zOS4zNzctNS44NzUtNDAuNDI1LTEuMzU1WlwiIGZpbGw9XCIjZmRlNjhhXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIHN0cm9rZT1cIiNkMDg4MTlcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIxMFwiLz48L3N2Zz4nO1xuXG5leHBvcnQgZGVmYXVsdCBob3BlVGhlbWUoe1xuICBob3N0bmFtZTogXCJodHRwczovL21pc3Rlci1ob3BlLmdpdGh1Yi5pb1wiLFxuXG4gIGF1dGhvcjoge1xuICAgIG5hbWU6IFwiTXIuSG9wZVwiLFxuICAgIHVybDogXCJodHRwczovL21pc3Rlci1ob3BlLmNvbVwiLFxuICB9LFxuXG4gIGljb25Bc3NldHM6IFwiZm9udGF3ZXNvbWUtd2l0aC1icmFuZHNcIixcblxuICBsb2dvOiBcIi9sb2dvLnN2Z1wiLFxuXG4gIHJlcG86IFwidnVlcHJlc3MtdGhlbWUtaG9wZS92dWVwcmVzcy10aGVtZS1ob3BlXCIsXG5cbiAgZG9jc0RpcjogXCJzcmNcIixcblxuICAvLyBuYXZiYXJcbiAgbmF2YmFyLFxuXG4gIC8vIHNpZGViYXJcbiAgc2lkZWJhcixcblxuICBmb290ZXI6IFwiXHU5RUQ4XHU4QkE0XHU5ODc1XHU4MTFBXCIsXG5cbiAgZGlzcGxheUZvb3RlcjogdHJ1ZSxcblxuICBibG9nOiB7XG4gICAgZGVzY3JpcHRpb246IFwiXHU0RTAwXHU0RTJBXHU1MjREXHU3QUVGXHU1RjAwXHU1M0QxXHU4MDA1XCIsXG4gICAgaW50cm86IFwiL2ludHJvLmh0bWxcIixcbiAgICBtZWRpYXM6IHtcbiAgICAgIEJhaWR1OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIEJpbGlCaWxpOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIEJpdGJ1Y2tldDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBEaW5nZGluZzogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBEaXNjb3JkOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIERyaWJiYmxlOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIEVtYWlsOiBcIm1haWx0bzppbmZvQGV4YW1wbGUuY29tXCIsXG4gICAgICBFdmVybm90ZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBGYWNlYm9vazogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBGbGlwYm9hcmQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgR2l0ZWU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgR2l0SHViOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIEdpdGxhYjogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBHbWFpbDogXCJtYWlsdG86aW5mb0BleGFtcGxlLmNvbVwiLFxuICAgICAgSW5zdGFncmFtOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIExhcms6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgTGluZXM6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgTGlua2VkaW46IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgUGludGVyZXN0OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIFBvY2tldDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBRUTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBRem9uZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBSZWRkaXQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgUnNzOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIFN0ZWFtOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIFR3aXR0ZXI6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgV2VjaGF0OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIFdlaWJvOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIFdoYXRzYXBwOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIFlvdXR1YmU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgWmhpaHU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgTXJIb3BlOiBbXCJodHRwczovL21pc3Rlci1ob3BlLmNvbVwiLCBNUl9IT1BFX0FWQVRBUl0sXG4gICAgfSxcbiAgfSxcblxuICBlbmNyeXB0OiB7XG4gICAgY29uZmlnOiB7XG4gICAgICBcIi9kZW1vL2VuY3J5cHQuaHRtbFwiOiBbXCIxMjM0XCJdLFxuICAgIH0sXG4gIH0sXG5cbiAgLy8gcGFnZSBtZXRhXG4gIG1ldGFMb2NhbGVzOiB7XG4gICAgZWRpdExpbms6IFwiXHU1NzI4IEdpdEh1YiBcdTRFMEFcdTdGMTZcdThGOTFcdTZCNjRcdTk4NzVcIixcbiAgfSxcblxuICBwbHVnaW5zOiB7XG4gICAgYmxvZzogdHJ1ZSxcblxuICAgIC8vIGluc3RhbGwgQHdhbGluZS9jbGllbnQgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgLy8gV0FSTklORzogVGhpcyBpcyBhIHRlc3Qgc2VydmVyIGZvciBkZW1vIG9ubHkuXG4gICAgLy8gWW91IHNob3VsZCBjcmVhdGUgYW5kIHVzZSB5b3VyIG93biBjb21tZW50IHNlcnZpY2UgaW4gcHJvZHVjdGlvbi5cbiAgICAvLyBjb21tZW50OiB7XG4gICAgLy8gICBwcm92aWRlcjogXCJXYWxpbmVcIixcbiAgICAvLyAgIHNlcnZlclVSTDogXCJodHRwczovL3dhbGluZS1jb21tZW50LnZ1ZWpzLnByZXNzXCIsXG4gICAgLy8gfSxcblxuICAgIC8vIGFsbCBmZWF0dXJlcyBhcmUgZW5hYmxlZCBmb3IgZGVtbywgb25seSBwcmVzZXJ2ZSBmZWF0dXJlcyB5b3UgbmVlZCBoZXJlXG4gICAgbWRFbmhhbmNlOiB7XG4gICAgICBhbGlnbjogdHJ1ZSxcbiAgICAgIGF0dHJzOiB0cnVlLFxuICAgICAgY2FyZDogdHJ1ZSxcblxuICAgICAgLy8gaW5zdGFsbCBjaGFydC5qcyBiZWZvcmUgZW5hYmxpbmcgaXRcbiAgICAgIC8vIGNoYXJ0OiB0cnVlLFxuXG4gICAgICBjb2RldGFiczogdHJ1ZSxcbiAgICAgIGRlbW86IHRydWUsXG5cbiAgICAgIC8vIGluc3RhbGwgZWNoYXJ0cyBiZWZvcmUgZW5hYmxpbmcgaXRcbiAgICAgIC8vIGVjaGFydHM6IHRydWUsXG5cbiAgICAgIGZpZ3VyZTogdHJ1ZSxcblxuICAgICAgLy8gaW5zdGFsbCBmbG93Y2hhcnQudHMgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyBmbG93Y2hhcnQ6IHRydWUsXG5cbiAgICAgIGdmbTogdHJ1ZSxcbiAgICAgIGltZ0xhenlsb2FkOiB0cnVlLFxuICAgICAgaW1nU2l6ZTogdHJ1ZSxcbiAgICAgIGluY2x1ZGU6IHRydWUsXG5cbiAgICAgIC8vIGluc3RhbGwga2F0ZXggYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyBrYXRleDogdHJ1ZSxcblxuICAgICAgLy8gaW5zdGFsbCBtYXRoamF4LWZ1bGwgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyBtYXRoamF4OiB0cnVlLFxuXG4gICAgICBtYXJrOiB0cnVlLFxuXG4gICAgICAvLyBpbnN0YWxsIG1lcm1haWQgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyBtZXJtYWlkOiB0cnVlLFxuXG4gICAgICBwbGF5Z3JvdW5kOiB7XG4gICAgICAgIHByZXNldHM6IFtcInRzXCIsIFwidnVlXCJdLFxuICAgICAgfSxcblxuICAgICAgLy8gaW5zdGFsbCByZXZlYWwuanMgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyByZXZlYWxKczoge1xuICAgICAgLy8gICBwbHVnaW5zOiBbXCJoaWdobGlnaHRcIiwgXCJtYXRoXCIsIFwic2VhcmNoXCIsIFwibm90ZXNcIiwgXCJ6b29tXCJdLFxuICAgICAgLy8gfSxcblxuICAgICAgc3R5bGl6ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgbWF0Y2hlcjogXCJSZWNvbW1lbmRlZFwiLFxuICAgICAgICAgIHJlcGxhY2VyOiAoeyB0YWcgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRhZyA9PT0gXCJlbVwiKVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRhZzogXCJCYWRnZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGlwXCIgfSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlJlY29tbWVuZGVkXCIsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBzdWI6IHRydWUsXG4gICAgICBzdXA6IHRydWUsXG4gICAgICB0YWJzOiB0cnVlLFxuICAgICAgdlByZTogdHJ1ZSxcblxuICAgICAgLy8gaW5zdGFsbCBAdnVlL3JlcGwgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyB2dWVQbGF5Z3JvdW5kOiB0cnVlLFxuICAgIH0sXG5cbiAgICAvLyB1bmNvbW1lbnQgdGhlc2UgaWYgeW91IHdhbnQgYSBQV0FcbiAgICAvLyBwd2E6IHtcbiAgICAvLyAgIGZhdmljb246IFwiL2Zhdmljb24uaWNvXCIsXG4gICAgLy8gICBjYWNoZUhUTUw6IHRydWUsXG4gICAgLy8gICBjYWNoZVBpYzogdHJ1ZSxcbiAgICAvLyAgIGFwcGVuZEJhc2U6IHRydWUsXG4gICAgLy8gICBhcHBsZToge1xuICAgIC8vICAgICBpY29uOiBcIi9hc3NldHMvaWNvbi9hcHBsZS1pY29uLTE1Mi5wbmdcIixcbiAgICAvLyAgICAgc3RhdHVzQmFyQ29sb3I6IFwiYmxhY2tcIixcbiAgICAvLyAgIH0sXG4gICAgLy8gICBtc1RpbGU6IHtcbiAgICAvLyAgICAgaW1hZ2U6IFwiL2Fzc2V0cy9pY29uL21zLWljb24tMTQ0LnBuZ1wiLFxuICAgIC8vICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgLy8gICB9LFxuICAgIC8vICAgbWFuaWZlc3Q6IHtcbiAgICAvLyAgICAgaWNvbnM6IFtcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS1tYXNrLTUxMi5wbmdcIixcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcbiAgICAvLyAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS1tYXNrLTE5Mi5wbmdcIixcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAvLyAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS01MTIucG5nXCIsXG4gICAgLy8gICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXG4gICAgLy8gICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtMTkyLnBuZ1wiLFxuICAgIC8vICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICBdLFxuICAgIC8vICAgICBzaG9ydGN1dHM6IFtcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBuYW1lOiBcIkRlbW9cIixcbiAgICAvLyAgICAgICAgIHNob3J0X25hbWU6IFwiRGVtb1wiLFxuICAgIC8vICAgICAgICAgdXJsOiBcIi9kZW1vL1wiLFxuICAgIC8vICAgICAgICAgaWNvbnM6IFtcbiAgICAvLyAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vZ3VpZGUtbWFza2FibGUucG5nXCIsXG4gICAgLy8gICAgICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgIC8vICAgICAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcbiAgICAvLyAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgXSxcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICBdLFxuICAgIC8vICAgfSxcbiAgICAvLyB9LFxuICB9LFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6L015RmlsZXMvMDNfUHJvZ3JhbW1pbmcvMDBfV29ya1NwYWNlL3Z1ZXByZXNzL3Rlc3Qvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcTXlGaWxlc1xcXFwwM19Qcm9ncmFtbWluZ1xcXFwwMF9Xb3JrU3BhY2VcXFxcdnVlcHJlc3NcXFxcdGVzdFxcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXG5hdmJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovTXlGaWxlcy8wM19Qcm9ncmFtbWluZy8wMF9Xb3JrU3BhY2UvdnVlcHJlc3MvdGVzdC9zcmMvLnZ1ZXByZXNzL25hdmJhci50c1wiO2ltcG9ydCB7IG5hdmJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IG5hdmJhcihbXG4gIFwiL1wiLFxuICBcIi9kZW1vL1wiLFxuICB7XG4gICAgdGV4dDogXCJcdTUzNUFcdTY1ODdcIixcbiAgICBpY29uOiBcInBlbi10by1zcXVhcmVcIixcbiAgICBwcmVmaXg6IFwiL3Bvc3RzL1wiLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiXHU4MkY5XHU2NzlDXCIsXG4gICAgICAgIGljb246IFwicGVuLXRvLXNxdWFyZVwiLFxuICAgICAgICBwcmVmaXg6IFwiYXBwbGUvXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1ODJGOVx1Njc5QzFcIiwgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsIGxpbms6IFwiMVwiIH0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1ODJGOVx1Njc5QzJcIiwgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsIGxpbms6IFwiMlwiIH0sXG4gICAgICAgICAgXCIzXCIsXG4gICAgICAgICAgXCI0XCIsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlx1OTk5OVx1ODU0OVwiLFxuICAgICAgICBpY29uOiBcInBlbi10by1zcXVhcmVcIixcbiAgICAgICAgcHJlZml4OiBcImJhbmFuYS9cIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIlx1OTk5OVx1ODU0OSAxXCIsXG4gICAgICAgICAgICBpY29uOiBcInBlbi10by1zcXVhcmVcIixcbiAgICAgICAgICAgIGxpbms6IFwiMVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJcdTk5OTlcdTg1NDkgMlwiLFxuICAgICAgICAgICAgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsXG4gICAgICAgICAgICBsaW5rOiBcIjJcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiM1wiLFxuICAgICAgICAgIFwiNFwiLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHsgdGV4dDogXCJcdTZBMzFcdTY4NDNcIiwgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsIGxpbms6IFwiY2hlcnJ5XCIgfSxcbiAgICAgIHsgdGV4dDogXCJcdTcwNkJcdTlGOTlcdTY3OUNcIiwgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsIGxpbms6IFwiZHJhZ29uZnJ1aXRcIiB9LFxuICAgICAgXCJ0b21hdG9cIixcbiAgICAgIFwic3RyYXdiZXJyeVwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIlYyIFx1NjU4N1x1Njg2M1wiLFxuICAgIGljb246IFwiYm9va1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly90aGVtZS1ob3BlLnZ1ZWpzLnByZXNzL3poL1wiLFxuICB9LFxuXSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6L015RmlsZXMvMDNfUHJvZ3JhbW1pbmcvMDBfV29ya1NwYWNlL3Z1ZXByZXNzL3Rlc3Qvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcTXlGaWxlc1xcXFwwM19Qcm9ncmFtbWluZ1xcXFwwMF9Xb3JrU3BhY2VcXFxcdnVlcHJlc3NcXFxcdGVzdFxcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXHNpZGViYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L015RmlsZXMvMDNfUHJvZ3JhbW1pbmcvMDBfV29ya1NwYWNlL3Z1ZXByZXNzL3Rlc3Qvc3JjLy52dWVwcmVzcy9zaWRlYmFyLnRzXCI7aW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHNpZGViYXIoe1xuICBcIi9cIjogW1xuICAgIFwiXCIsXG4gICAge1xuICAgICAgdGV4dDogXCJcdTU5ODJcdTRGNTVcdTRGN0ZcdTc1MjhcIixcbiAgICAgIGljb246IFwibGFwdG9wLWNvZGVcIixcbiAgICAgIHByZWZpeDogXCJkZW1vL1wiLFxuICAgICAgbGluazogXCJkZW1vL1wiLFxuICAgICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIlx1NjU4N1x1N0FFMFwiLFxuICAgICAgaWNvbjogXCJib29rXCIsXG4gICAgICBwcmVmaXg6IFwicG9zdHMvXCIsXG4gICAgICBjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIixcbiAgICB9LFxuICAgIFwiaW50cm9cIixcbiAgICBcInNsaWRlc1wiLFxuICBdLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVYLFNBQVMsd0JBQXdCOzs7QUNBbkMsU0FBUyxpQkFBaUI7OztBQ0F4QixTQUFTLGNBQWM7QUFFOVksSUFBTyxpQkFBUSxPQUFPO0FBQUEsRUFDcEI7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLE1BQ1I7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
import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: "spilar's Blog",
    description: "分享读过的书、去过的地方，还有其他有趣的事情。",
    site: 'https://spilar.cn',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>zh-cn</language>`,
  });
}

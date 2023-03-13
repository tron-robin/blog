import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { POSTS_HIDDEN } from "../consts";

export async function get() {
  let allPost = await pagesGlobToRssItems(import.meta.glob('./**/*.md'));
  let items = allPost.filter(t => POSTS_HIDDEN.indexOf(t.title) === -1);
  return rss({
    title: "spilar's Blog",
    description: "分享读过的书、去过的地方，还有其他有趣的事情。",
    site: 'https://spilar.cn',
    items,
    customData: `<language>zh-cn</language>`,
  });
}

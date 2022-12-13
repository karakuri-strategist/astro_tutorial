import rss from '@astrojs/rss';

export const get = () => rss({
    title: 'Spiritual Trickster',
    description: 'Join me in my web of lies!',
    site: 'https://spiritualtrickster.netlify.app',
    items: import.meta.glob('./**/*.md'),
    customData: `<language>en-us</language>`,
});
  
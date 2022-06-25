import { Readability } from '@mozilla/readability';
import { JSDOM } from 'jsdom';
import TurndownService from 'turndown';
import fetch from 'node-fetch';

if (process.argv.length !== 3) {
  console.error('You need to pass URL as the only argument');
  process.exit(1);
}
const url = process.argv[2];

const makeMarkdownFromUrl = async (url) => {
  const downloadedPage = await (await fetch(url)).text();
  const doc = new JSDOM(downloadedPage, {
    url,
  });
  const reader = new Readability(doc.window.document);
  const article = reader.parse();
  const html = article.content;
  const turndownService = new TurndownService({
    headingStyle: 'atx',
  });
  return turndownService.turndown(html);
};
makeMarkdownFromUrl(url).then(console.log);

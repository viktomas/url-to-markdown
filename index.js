const { Readability } = require('@mozilla/readability');
const { JSDOM } = require('jsdom');
const TurndownService = require('turndown');

const testPage = require('./test-page').content;

const doc = new JSDOM(testPage, {
  url: 'https://blog.viktomas.com/posts/mermaidjs-diagrams-in-logseq/',
});
const reader = new Readability(doc.window.document);
const article = reader.parse();
const html = article.content;
const turndownService = new TurndownService();
const markdown = turndownService.turndown(html);
console.log(markdown);

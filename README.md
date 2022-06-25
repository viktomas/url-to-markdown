# url-to-markdown: Parse webpages to Markdown from your shell

`url-to-markdown` is a script that combines [mozilla/readability](https://github.com/mozilla/readability) with [mixmark-io/turndown](https://github.com/mixmark-io/turndown) to let you parse an article on the web into markdown with one command.

1. Install [Node](https://nodejs.org/en/)
1. Install [Git](https://git-scm.com/)
1. Checkout this repo `git checkout https://github.com/viktomas/url-to-markdown.git`
1. Enter the folder `cd url-to-markdown`
1. Install dependencies `npm i`
1. Run the script:

    ```sh
    ❯❯❯ node index.js https://example.com
    ```
    ```md
    This domain is for use in illustrative examples in documents. You may use this domain in literature without prior coordination or asking for permission.

    [More information...](https://www.iana.org/domains/example)
    ```
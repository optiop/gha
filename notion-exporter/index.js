const { Client } = require("@notionhq/client");
const fs = require("fs");
const { NotionToMarkdown } = require("notion-to-md");

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});
const n2m = new NotionToMarkdown({ notionClient: notion });

(async () => {
  try {
    const pageId = "168111baa618800ba7f6c549fd2ddcab";

    // Retrieve the page content
    const mdblocks = await n2m.pageToMarkdown(pageId);
    const mdString = n2m.toMarkdownString(mdblocks);

    // Save the content of the page to a Markdown file
    fs.writeFileSync("page.md", mdString.parent);
  } catch (error) {
    console.error("Error retrieving the page content:");
  }
})();

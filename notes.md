/init - creates CLAUDE.md file which contains code base tech stack details like version of libraries used, folder sturecture, available scripts etc..

/security-review runs a security check on the current changes to look for any security velunaribalities.

Adding Playwright MCP
claude mcp add playwright npx @playwright/mcp@latest -s user

"-s user" makes this mcp available in all sessions for all users

Claude code rules - it adds new persona, root CLAUDE.md file explains about the code and tech stack of current repo, rules gives us persona which is stored inside memmory/frontend/CLAUDE.md file

Copies from "https://cursor.directory/rules/next.js"

In the above step you have just added rules but it's not loaded into claude's memmory yet, you need hooks to load them based on context load different files

Spec Driven Design:

Use 'shift + tab' to swith to plan mode

use latest most advance models for planning mode.

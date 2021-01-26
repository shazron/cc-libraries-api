(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{MG1C:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),i=a("ndZU"),l=(a("qKvR"),{}),c={_frontmatter:l},s=i.a;function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.mdx)(s,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"quick-start-curl"},"Quick Start: cURL"),Object(r.mdx)("p",null,"Welcome to the Creative Cloud Libraries API!"),Object(r.mdx)("p",null,"In this Quick Start tutorial, we'll be walking you towards making your first API call via the cURL command-line tool. By the end you'll have constructed a command that looks like this:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"curl --location --request GET \\\n  https://cc-libraries.adobe.io/api/v1/libraries \\\n  -H 'x-api-key: <CLIENT_ID_HERE>' \\\n  -H 'Authorization: Bearer <ACCESS_TOKEN_HERE>'\n")),Object(r.mdx)("p",null,"This API call will return information about the libraries you have stored in Libraries:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "total_count": 2,\n  "libraries": [\n    /* Your libraries here */\n  ],\n  "_links": {}\n}\n')),Object(r.mdx)("p",null,"By starting with this basic cURL command, you'll have an idea of what's required to make ",Object(r.mdx)("inlineCode",{parentName:"p"},"GET")," requests to the Libraries API. From there, you can play with the command to make ",Object(r.mdx)("inlineCode",{parentName:"p"},"GET")," requests to different endpoints from the command line, or translate these concepts to your environment of choice, like Node.js or Python."),Object(r.mdx)("h2",{id:"technology-used"},"Technology Used"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Command-line cURL")),Object(r.mdx)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Tutorials")),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object(n.a)({parentName:"li"},{href:"./how-to-get-your-developer-credentials.md"}),"How to get your developer credentials")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object(n.a)({parentName:"li"},{href:"./tutorials/how-to-get-access-tokens-with-oauth.md"}),"How to get access tokens with OAuth"))),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Assets")),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"At least one Library associated with your Adobe ID."),Object(r.mdx)("li",{parentName:"ul"},"A terminal application for a UNIX-based system (like macOS, Linux, or Windows Subsystem for Linux)")),Object(r.mdx)("h2",{id:"development-steps"},"Development Steps"),Object(r.mdx)("blockquote",null,Object(r.mdx)("p",{parentName:"blockquote"},Object(r.mdx)("strong",{parentName:"p"},"Info"),"\nComplete code for this plugin can be found ",Object(r.mdx)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/cc-libraries-api/code-samples/tree/master/quick-start-curl"}),"on GitHub"),".")),Object(r.mdx)("h3",{id:"1-create-and-run-your-curl-command"},"1. Create and run your cURL command"),Object(r.mdx)("p",null,"In our ",Object(r.mdx)("a",Object(n.a)({parentName:"p"},{href:"./how-to-get-your-developer-credentials.md"}),"How to get your developer credentials")," tutorial, we showed you how to get your Client ID and user access token."),Object(r.mdx)("p",null,"You can take both of those values and add them to their respective headers (",Object(r.mdx)("inlineCode",{parentName:"p"},"-H"),") below. Don't include the angle brackets (",Object(r.mdx)("inlineCode",{parentName:"p"},"< >"),") in your command:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"curl --location --request GET \\\n  https://cc-libraries.adobe.io/api/v1/libraries \\\n  -H 'x-api-key: <CLIENT_ID_HERE>' \\\n  -H 'Authorization: Bearer <ACCESS_TOKEN_HERE>'\n")),Object(r.mdx)("p",null,"You're ready to make your first API call! Just paste this command into your terminal application and hit enter."),Object(r.mdx)("h3",{id:"2-get-results"},"2. Get results"),Object(r.mdx)("p",null,"Since you've sent a ",Object(r.mdx)("inlineCode",{parentName:"p"},"GET")," request to the ",Object(r.mdx)("inlineCode",{parentName:"p"},"/libraries")," endpoint, you can probably guess that you're going to get back information about the libraries you have stored in Creative Cloud Libraries—and you're right!"),Object(r.mdx)("p",null,"The response will look something like this:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "total_count": 2,\n  "libraries": [\n    /* Your libraries here */\n  ],\n  "_links": {}\n}\n')),Object(r.mdx)("p",null,"Always check ",Object(r.mdx)("a",Object(n.a)({parentName:"p"},{href:"https://cc-libraries-api.github.io/open-api/"}),"the references")," for the full details on any request or response."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-integrate-tutorials-quick-start-curl-index-md-4ea3ff3c16503cd20cfb.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{qIRi:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n("wx14"),r=n("zLVn"),o=(n("q1tI"),n("7ljp")),i=n("LHWr"),s=(n("qKvR"),{}),l={_frontmatter:s},c=i.a;function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.mdx)(c,Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"quick-start-nodejs"},"Quick Start: Node.js"),Object(o.mdx)("p",null,"Welcome to the CC Libraries API!"),Object(o.mdx)("p",null,"In this Quick Start tutorial, we'll be walking you towards making your first API call from a Node.js script. By the end you'll have a self-invoking function that makes a call to the CC Libraries API when you run the script."),Object(o.mdx)("p",null,"This API call will return information about the libraries you have stored in CC Libraries:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{}),'{\n  "total_count": 2,\n  "libraries": [\n    /* Your libraries here */\n  ],\n  "_links": {}\n}\n')),Object(o.mdx)("p",null,"By starting with this basic Node.js script, you'll have an idea of what's required to make ",Object(o.mdx)("inlineCode",{parentName:"p"},"GET")," requests to the CC Libraries API. From there, you can play with the script to make ",Object(o.mdx)("inlineCode",{parentName:"p"},"GET")," requests to different endpoints from Node.js, or translate these concepts to your environment of choice, with Node.js server frameworks like Express and beyond."),Object(o.mdx)("h2",{id:"before-you-start"},"Before you start"),Object(o.mdx)("h3",{id:"technology-used"},"Technology Used"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Node.js"),Object(o.mdx)("li",{parentName:"ul"},"npm"),Object(o.mdx)("li",{parentName:"ul"},"Axios")),Object(o.mdx)("h3",{id:"prerequisites"},"Prerequisites"),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Tutorials")),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",Object(a.a)({parentName:"li"},{href:"./how-to-get-your-developer-credentials.md"}),"How to get your developer credentials")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",Object(a.a)({parentName:"li"},{href:"./tutorials/how-to-get-access-tokens-with-oauth.md"}),"How to get access tokens with OAuth"))),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Assets")),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"At least one CC Library associated with your Adobe ID."),Object(o.mdx)("li",{parentName:"ul"},"A terminal application for a UNIX-based system (like macOS, Linux, or Windows Subsystem for Linux)")),Object(o.mdx)("h2",{id:"development-steps"},"Development Steps"),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},Object(o.mdx)("strong",{parentName:"p"},"Info"),"\nComplete code for this plugin can be found ",Object(o.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/cc-libraries-api/code-samples/tree/master/quick-start-nodejs",target:"_blank",rel:"nofollow noopener noreferrer"}),"on GitHub"),".")),Object(o.mdx)("h3",{id:"1-set-up-your-environment-variables"},"1. Set up your environment variables"),Object(o.mdx)("p",null,"The Node.js script we create here will read environment variables from a ",Object(o.mdx)("inlineCode",{parentName:"p"},".env")," file, so start by creating a file named ",Object(o.mdx)("inlineCode",{parentName:"p"},".env"),":"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"touch .env\necho .env >> .gitignore # Don't track your .env file in version control\n")),Object(o.mdx)("p",null,"In our ",Object(o.mdx)("a",Object(a.a)({parentName:"p"},{href:"./how-to-get-your-developer-credentials.md"}),"How to get your developer credentials")," tutorial, we showed you how to get your API key from the Adobe Developer Console and user access token from the OAuth 2.0 Playground. You can take both of those values and add them to their respective variables in the ",Object(o.mdx)("inlineCode",{parentName:"p"},".env")," file as seen below. Don't include the angle brackets (",Object(o.mdx)("inlineCode",{parentName:"p"},"< >"),") in your values:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{}),"API_KEY=<CLIENT_ID_HERE>\nACCESS_TOKEN=<ACCESS_TOKEN_HERE>\n")),Object(o.mdx)("p",null,"Note that we are storing the access token as a value in an ",Object(o.mdx)("inlineCode",{parentName:"p"},".env")," file for convience in getting started making API calls. Production integrations must support a proper ",Object(o.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://www.adobe.io/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/OAuth/OAuth.md",target:"_blank",rel:"nofollow noopener noreferrer"}),"OAuth workflow")," and should never store user access tokens this way. Always avoid sharing your token or committing it to a public repo."),Object(o.mdx)("h3",{id:"2-install-dependencies"},"2. Install dependencies"),Object(o.mdx)("p",null,"First, we'll create an npm package and install dependencies:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"npm init -y\nnpm install --save axios dotenv\n")),Object(o.mdx)("p",null,"We'll use ",Object(o.mdx)("inlineCode",{parentName:"p"},"axios")," to make HTTP requests, and ",Object(o.mdx)("inlineCode",{parentName:"p"},"dotenv")," to read in our environement variables from the ",Object(o.mdx)("inlineCode",{parentName:"p"},".env")," file we created in the previous step."),Object(o.mdx)("h3",{id:"3-create-your-javascript-file-and-import-your-dependencies"},"3. Create your JavaScript file and import your dependencies"),Object(o.mdx)("p",null,"Now we create the only JavaScript file we'll need for this basic script example:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"touch index.js\n")),Object(o.mdx)("p",null,"At the top of this file, we import the two packages we installed in the previous step:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'require("dotenv").config(); // Read in your .env variables\nconst axios = require("axios");\n')),Object(o.mdx)("p",null,"Your environment variables will now be available on Node.js's ",Object(o.mdx)("inlineCode",{parentName:"p"},"process.env")," object."),Object(o.mdx)("h3",{id:"4-set-up-your-request-headers"},"4. Set up your request headers"),Object(o.mdx)("p",null,"We'll start by focusing on constructing the core API call."),Object(o.mdx)("p",null,"First, we need to set up our headers:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'const options = {\n  headers: {\n    "x-api-key": process.env.API_KEY,\n    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,\n  },\n};\n')),Object(o.mdx)("p",null,"As you can see, we've created an ",Object(o.mdx)("inlineCode",{parentName:"p"},"options")," object with a ",Object(o.mdx)("inlineCode",{parentName:"p"},"headers")," property. The ",Object(o.mdx)("inlineCode",{parentName:"p"},"headers")," property contains key/value fields for our API key and user access token (which are read from Node.js's ",Object(o.mdx)("inlineCode",{parentName:"p"},"process.env")," object)."),Object(o.mdx)("p",null,"The structure of these options is defined by the ",Object(o.mdx)("inlineCode",{parentName:"p"},"axios")," module, which we'll use in the next step to set up our HTTP request."),Object(o.mdx)("h3",{id:"5-set-up-your-api-call"},"5. Set up your API call"),Object(o.mdx)("p",null,"Now all we need to do is write the request itself. We'll do this with the ",Object(o.mdx)("inlineCode",{parentName:"p"},"axios")," module:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'const response = await axios.get(\n  "https://cc-libraries.adobe.io/api/v1/libraries/",\n  options\n);\n')),Object(o.mdx)("p",null,"Here, we're making a GET request, passing in the endpoint (",Object(o.mdx)("inlineCode",{parentName:"p"},"https://cc-libraries.adobe.io/api/v1/libraries/"),"), and the ",Object(o.mdx)("inlineCode",{parentName:"p"},"options")," object containing our headers."),Object(o.mdx)("p",null,"The ",Object(o.mdx)("inlineCode",{parentName:"p"},"axios")," module returns promises, so we can opt for async/await syntax, or then/catch chains. Either is fine, but since we've opted for async/await, we'll need to wrap this call in an ",Object(o.mdx)("inlineCode",{parentName:"p"},"async")," function in the next step (unless you're using Node.js 14.3.0 or above, where top-level ",Object(o.mdx)("inlineCode",{parentName:"p"},"await")," is supported)."),Object(o.mdx)("h3",{id:"6-bring-it-all-together"},"6. Bring it all together"),Object(o.mdx)("p",null,"This is the last step, where we'll embellish on the basic setup we've done so far:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'// Wrap everything in a self-invoking async function\n(async () => {\n  // Set up your request headers\n  const options = {\n    headers: {\n      "x-api-key": process.env.API_KEY,\n      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,\n    },\n  };\n\n  try {\n    // Make your API call\n    const response = await axios.get(baseURL, options);\n    console.log(response.data);\n  } catch (error) {\n    // Catch errors\n    console.log(error.toJSON());\n  }\n})();\n')),Object(o.mdx)("p",null,"A success response will look something like this:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.a)({parentName:"pre"},{}),'{\n  "total_count": 2,\n  "libraries": [\n    /* Your libraries here */\n  ],\n  "_links": {}\n}\n')),Object(o.mdx)("p",null,"Always check ",Object(o.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://cc-libraries-api.github.io/open-api/",target:"_blank",rel:"nofollow noopener noreferrer"}),"the references")," for the full details on any request or response."),Object(o.mdx)("h2",{id:"next-steps"},"Next Steps"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",Object(a.a)({parentName:"li"},{href:"./quick-start-curl.md"}),"Quick Start: cURL")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",Object(a.a)({parentName:"li"},{href:"./getting-data/nodejs.md"}),"Getting data: Node.js"))),Object(o.mdx)("h2",{id:"other-resources"},"Other Resources"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",Object(a.a)({parentName:"li"},{href:"https://cc-libraries-api.github.io/open-api/",target:"_blank",rel:"nofollow noopener noreferrer"}),"Endpoint references"))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-integrate-tutorials-quick-start-nodejs-index-md-5b2494de24664a78e821.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"4JjK":function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return i})),o.d(t,"default",(function(){return p}));var n,a=o("wx14"),r=o("zLVn"),l=(o("q1tI"),o("7ljp")),d=o("LHWr"),i=(o("qKvR"),{}),u=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.mdx)("div",e)}),c={_frontmatter:i},m=d.a;function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(l.mdx)(m,Object(a.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("h1",{id:"how-to-get-access-tokens-with-oauth"},"How to get access tokens with OAuth"),Object(l.mdx)("p",null,"All calls to the CC Libraries API must include an access token in the headers."),Object(l.mdx)("p",null,"In a production integration, you can get a user's access token through an OAuth 2.0 workflow."),Object(l.mdx)("p",null,"Optionally, we offer the OAuth 2.0 Playground as a convenience during development, so you can start making API calls before you implement OAuth in your application."),Object(l.mdx)("p",null,"Details on both options are provided in this document."),Object(l.mdx)("h2",{id:"prerequisite"},"Prerequisite"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",Object(a.a)({parentName:"li"},{href:"./how-to-get-your-developer-credentials.md"}),"How to get your developer credentials"))),Object(l.mdx)("h2",{id:"adobe-oauth-20"},"Adobe OAuth 2.0"),Object(l.mdx)("p",null,"You can find more infomation about Adobe OAuth 2.0 in Adobe's ",Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://www.adobe.io/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/OAuth/OAuth.md",target:"_blank",rel:"nofollow noopener noreferrer"}),"OAuth 2.0 Authentication and Authorization")," documentation."),Object(l.mdx)("p",null,"We also offer a basic ",Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/cc-libraries-api/code-samples/tree/master/oauth",target:"_blank",rel:"nofollow noopener noreferrer"}),"OAuth implementation example")," as part of our body of sample code."),Object(l.mdx)("h2",{id:"oauth-20-playground"},"OAuth 2.0 Playground"),Object(l.mdx)("p",null,"For a production integration, you must set up an ",Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://www.adobe.io/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/OAuth/OAuth.md",target:"_blank",rel:"nofollow noopener noreferrer"}),"OAuth workflow"),". However, during development, you may want to temporarily skip that step and just start calling the API."),Object(l.mdx)("p",null,"Even during development, you'll need to include an access token with every API call. To simplify the process of getting your own access token, we provide the ",Object(l.mdx)("em",{parentName:"p"},"OAuth 2.0 Playground"),"."),Object(l.mdx)("p",null,"On the ",Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://adobeioruntime.net/api/v1/web/io-solutions/adobe-oauth-playground/oauth.html",target:"_blank",rel:"nofollow noopener noreferrer"}),"OAuth 2.0 Playground"),":"),Object(l.mdx)("ol",null,Object(l.mdx)("li",{parentName:"ol"},"Follow the steps on the OAuth 2.0 Playground's ",Object(l.mdx)("em",{parentName:"li"},"Authorization")," tab."),Object(l.mdx)("li",{parentName:"ol"},'In the "Scopes" field, enter ',Object(l.mdx)("inlineCode",{parentName:"li"},"openid,creative_sdk"),".")),Object(l.mdx)("p",null,"On the ",Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://console.adobe.io",target:"_blank",rel:"nofollow noopener noreferrer"}),"Adobe Developer Console"),":"),Object(l.mdx)("ol",null,Object(l.mdx)("li",{parentName:"ol"},"Find and select your project."),Object(l.mdx)("li",{parentName:"ol"},"Modify or create an OAuth Web credential with the URI indicated on the OAuth 2.0 Playground page.")),Object(l.mdx)("p",null,"Back on the OAuth 2.0 Playground:"),Object(l.mdx)("ol",null,Object(l.mdx)("li",{parentName:"ol"},'Click the "Generate Tokens" button.'),Object(l.mdx)("li",{parentName:"ol"},"From the ",Object(l.mdx)("em",{parentName:"li"},"Tokens")," tab, all you'll need is the access token."),Object(l.mdx)("li",{parentName:"ol"},"When the access token expires, you can use the OAuth 2.0 Playground to create a new one.")),Object(l.mdx)("p",null,"What you do with your access token will depend on what your next step is. See our ",Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"../../tutorials/"}),"tutorials")," to learn how to start making calls quickly."),Object(l.mdx)(u,{variant:"info",slots:"text",mdxType:"InlineAlert"}),Object(l.mdx)("p",null,"The OAuth 2.0 Playground is provided as a convenience for you during development. Production integrations must support a proper ",Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://www.adobe.io/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/OAuth/OAuth.md",target:"_blank",rel:"nofollow noopener noreferrer"}),"OAuth 2.0 workflow"),"."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-integrate-setup-oauth-index-md-70a94161fa486ba00f57.js.map
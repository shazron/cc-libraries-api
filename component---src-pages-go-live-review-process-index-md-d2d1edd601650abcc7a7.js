(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{n23q:function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return l})),o.d(t,"default",(function(){return p}));var n,i=o("wx14"),r=o("zLVn"),a=(o("q1tI"),o("7ljp")),s=o("ndZU"),l=(o("qKvR"),{}),u=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.mdx)("div",e)}),d={_frontmatter:l},c=s.a;function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.mdx)(c,Object(i.a)({},d,o,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("h1",{id:"submission-and-review"},"Submission and review"),Object(a.mdx)("p",null,"Congratulations! You've built a great Adobe integration and you're ready to release it to your customers."),Object(a.mdx)("p",null,"To be granted production status for a Client ID, ",Object(a.mdx)("strong",{parentName:"p"},"your integration must first go through a review process"),"."),Object(a.mdx)("p",null,"By reviewing every integration, Adobe aims to help developers get ready for primetime and ensure that users have great experiences with the integrations they consume."),Object(a.mdx)("p",null,"This document will give you an idea of what we’re checking for during the review process. While lengthy, working through the points below will help you make sure you’ve accounted for all of the requirements, and avoid having to fix things and resubmit before being granted production status."),Object(a.mdx)("h2",{id:"pre-submission-checklist"},"Pre-submission checklist"),Object(a.mdx)("p",null,"Our goal is to balance providing you the best developer experience during review that we can, while helping ensure that approved integrations offer a great user experience for our mutual customers."),Object(a.mdx)("p",null,"This list will give you an overview of the kinds of things we check for during review. The list will change over time, and cannot cover absolutely everything we look at."),Object(a.mdx)("h3",{id:"metadata"},"Metadata"),Object(a.mdx)("p",null,"As part of submission, you will enter two kinds of metadata on the ",Object(a.mdx)("a",Object(i.a)({parentName:"p"},{href:"https://console.adobe.io"}),"Adobe Developer Console"),": a publisher profile and details about the specific integration you are submitting."),Object(a.mdx)("p",null,"For specifics regarding character lengths, image dimensions, and required fields, always refer to the Adobe Developer Console submission form for the latest requirements."),Object(a.mdx)(u,{variant:"info",slots:"text",mdxType:"InlineAlert"}),Object(a.mdx)("p",null,"We recommend that you draft this metadata in a text editor, and not directly in the Adobe Developer Console. This will help you avoid losing your writing if your browser refreshes before submission."),Object(a.mdx)("h4",{id:"publisher-profile"},"Publisher profile"),Object(a.mdx)("p",null,"You publisher profile is about you as a company or developer as whole. Once you've submitted this information and it has been approved by Adobe, it is shown for ",Object(a.mdx)("em",{parentName:"p"},"all plugins and integrations you publish with Adobe"),"."),Object(a.mdx)("p",null,"Your publisher profile includes required details like:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Your publisher public name (often company name or, for individuals, your own name)"),Object(a.mdx)("li",{parentName:"ul"},'Your publisher marketing website (usually not the same as your "App website", which is covered in the next section)'),Object(a.mdx)("li",{parentName:"ul"},"A description of you, the publisher"),Object(a.mdx)("li",{parentName:"ul"},"A logo")),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Your publisher profile is an important thing to get right the first time!"),' After it is approved, changing it is not easy or fast: you will have to email us via the "View public profile" link on your ',Object(a.mdx)("a",Object(i.a)({parentName:"p"},{href:"https://console.adobe.io"}),"Adobe Developer Console")," project. Doing so will trigger a new review of your publisher details, and possibly of your integration as well."),Object(a.mdx)("p",null,"Frequently changing your publisher profile will confuse users and erode trust. Please be sure you're ready before entering this information."),Object(a.mdx)(u,{variant:"info",slots:"text",mdxType:"InlineAlert"}),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"You must complete your publisher profile")," in order to submit your first integration. Next time you submit an integration, your publisher profile will already be set, so you won't need to do this again."),Object(a.mdx)("h4",{id:"integration-details"},"Integration details"),Object(a.mdx)("p",null,"Your integration details are information you provide to Adobe, and in some cases your users, about the specific integration you are currently submitting. Each integration you submit will have its own set of integration details that you provide."),Object(a.mdx)("p",null,"Always check the ",Object(a.mdx)("a",Object(i.a)({parentName:"p"},{href:"https://console.adobe.io"}),"Adobe Developer Console")," for the latest list of required details. At the time of writing, those details include the following lists."),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Consent screen details")),Object(a.mdx)("p",null,"The consent screen details appear on the post-login Adobe authorization screen to help users make an informed decision when granting access to your integration."),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Public app name"),Object(a.mdx)("li",{parentName:"ul"},"App website"),Object(a.mdx)("li",{parentName:"ul"},"Privacy policy"),Object(a.mdx)("li",{parentName:"ul"},"Terms of use")),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Approval details")),Object(a.mdx)("p",null,"The approval details help Adobe learn more about the integration you are submitting."),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"App description"),Object(a.mdx)("li",{parentName:"ul"},"Publish to Adobe Enterprise Admin Console?"),Object(a.mdx)("li",{parentName:"ul"},"Notes to reviewer"),Object(a.mdx)("li",{parentName:"ul"},"Screenshots")),Object(a.mdx)(u,{variant:"info",slots:"text",mdxType:"InlineAlert"}),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Test accounts:"),' If your app or service requires a user account to test the Adobe integration, you must provide credentials for a test account in the "Notes to reviewer" field. If we are unable to access the integration, the submission will be rejected and you will need to resubmit.'),Object(a.mdx)(u,{variant:"info",slots:"text",mdxType:"InlineAlert"}),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Instructions and screenshots:")," We see a lot of integrations! It's possible this is the first time we're seeing your app (welcome!), or maybe we haven't seen it in a while (welcome back!). Please help our review team find the Adobe integration within your app by providing detailed ",Object(a.mdx)("strong",{parentName:"p"},"instructions")," and ",Object(a.mdx)("strong",{parentName:"p"},"screenshots"),". If we are unable to find the integration, the submission will be rejected and you will need to resubmit."),Object(a.mdx)("h3",{id:"auth"},"Auth"),Object(a.mdx)("p",null,"When an integration involves a logged in Adobe user, we will be reviewing the experience related to authentication and authorization."),Object(a.mdx)("h4",{id:"authentication"},"Authentication"),Object(a.mdx)("p",null,"Integrations that require access to a logged in Adobe user and their stored data should implement an appropriate authentication workflow, usually OAuth 2.0."),Object(a.mdx)("p",null,"The user must also be able to log out of their Adobe account from your integration."),Object(a.mdx)("p",null,"Your users can also revoke access from your application on the ",Object(a.mdx)("a",Object(i.a)({parentName:"p"},{href:"https://account.adobe.com/connected-accounts"}),"Connected accounts page")," of their Adobe account."),Object(a.mdx)("h4",{id:"authorization"},"Authorization"),Object(a.mdx)("p",null,"After the user first logs in to your integration, they will be prompted to authorize access to their data with a consent screen."),Object(a.mdx)("p",null,"The consent screen must present correct and complete information to the user about you, the publisher, and the integration. This data is set when you submit your publisher profile and integration details via the ",Object(a.mdx)("a",Object(i.a)({parentName:"p"},{href:"https://console.adobe.io"}),"Adobe Developer Console")," (see the Metadata section of this page for details)."),Object(a.mdx)("h4",{id:"scopes"},"Scopes"),Object(a.mdx)("p",null,"The auth scopes your integration uses will determine the level of access the user is asked to grant on the consent screen. We require that all integrations use the ",Object(a.mdx)("a",Object(i.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Principle_of_least_privilege"}),"principle of least privilege"),"; never ask for more access than you need."),Object(a.mdx)("p",null,"Integrations asking for more access than necessary ",Object(a.mdx)("em",{parentName:"p"},"at the time of submission")," will be rejected."),Object(a.mdx)("h3",{id:"content"},"Content"),Object(a.mdx)("p",null,"Content within, and associated with, your integration with be reviewed."),Object(a.mdx)("h4",{id:"adobe-branding"},"Adobe Branding"),Object(a.mdx)("p",null,"See our ",Object(a.mdx)("a",Object(i.a)({parentName:"p"},{href:"../marketing"}),'"Marketing your integration"')," page for guidelines on using Adobe brand assets and messaging your integration to customers."),Object(a.mdx)("h4",{id:"inappropriate-content"},"Inappropriate content"),Object(a.mdx)("p",null,"Your integration and associated marketing surfaces must not include any intense violence, blood, gore, sexual content, nudity, or strong language."),Object(a.mdx)("p",null,"Your integration must not promote or conduct phishing, spamming, hacking, password trafficking, or spyware, nor contain malware, trojans, or viruses."),Object(a.mdx)("h3",{id:"user-experience"},"User experience"),Object(a.mdx)("p",null,"Checking the integration's user experience is the core of our review process."),Object(a.mdx)("p",null,"Since all applications and integrations are different, there are fewer concrete guidelines we can provide. However, we are generally looking at these three things: functionality, user interface, and performance."),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"Functionality:")," Does the integration do what it suggests in the associated content and the user interface?"),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"User interface:")," Is the user able to find the integration and complete basic tasks? Is the UI broken or distorted in any way? Is the user made aware of what is (or isn't) happening?"),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"Performance:")," Are system or account resources misused or overused? Is the user left waiting for an abnormal amount of time?")),Object(a.mdx)("h2",{id:"how-to-submit"},"How to submit"),Object(a.mdx)("p",null,"You can submit your integration for approval and review on the ",Object(a.mdx)("a",Object(i.a)({parentName:"p"},{href:"https://console.adobe.io"}),"Adobe Developer Console"),"."),Object(a.mdx)("p",null,"The following is a basic overview of the steps:"),Object(a.mdx)("ol",null,Object(a.mdx)("li",{parentName:"ol"},Object(a.mdx)("a",Object(i.a)({parentName:"li"},{href:"https://console.adobe.io"}),"Visit the Adobe Developer Console")),Object(a.mdx)("li",{parentName:"ol"},"Go to the ",Object(a.mdx)("em",{parentName:"li"},"Projects")," tab"),Object(a.mdx)("li",{parentName:"ol"},"Find and select the project that contains the Client ID you are seeking production approval for"),Object(a.mdx)("li",{parentName:"ol"},"On your project page, select ",Object(a.mdx)("em",{parentName:"li"},"Approval")),Object(a.mdx)("li",{parentName:"ol"},'(First time only) Complete your publisher profile via the "View public profile" button, and save'),Object(a.mdx)("li",{parentName:"ol"},'Fill out the "Submit for approval" form, and submit')),Object(a.mdx)("p",null,"Further details on the data you are required to sumbit can be found in the ",Object(a.mdx)("a",Object(i.a)({parentName:"p"},{href:"#pre-submission-checklist"}),"Pre-submission checklist")," section of this page."),Object(a.mdx)("h2",{id:"timelines-and-outcomes"},"Timelines and outcomes"),Object(a.mdx)("p",null,"We aim to respond to all submissions within 10 business days, but we are typically much faster on average."),Object(a.mdx)("p",null,"Ultimately, your submission will either be approved or rejected. In some cases, we may reach out to you with questions before we send you the outcome of the review."),Object(a.mdx)("p",null,"If your submission is rejected, we will provide the reasons. You can ask for clarifications, if you need any. Once you have addressed the reasons for rejection in your integration and associated content, you are welcome to resubmit."),Object(a.mdx)("p",null,"Again, our goal is to provide you the best developer experience during review that we can, while helping ensure that approved integrations offer a great user experience for our mutual customers."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-go-live-review-process-index-md-d2d1edd601650abcc7a7.js.map
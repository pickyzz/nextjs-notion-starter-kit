module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'b53056a131d14c1ab17c1d85cd07d23f',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: 'd55ebb30f5384bccb6a340b29e2f3a61',

  // basic site info (required)
  name: 'Pickyzz',
  domain: 'pickyzz.dev',
  author: 'Pickyzz',

  // open graph metadata (optional)
  description: 'Just learning to code.',
  socialImageTitle: 'Pickyzz.dev',
  socialImageSubtitle: 'Just learning to code.',

  // social usernames (optional)
  twitter: 'p1ckyzz',
  github: 'pickyzz',
  linkedin: '',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: 'https://og-image-pickyzz.vercel.app/**Pickyzz.dev**.png?theme=light&md=1&fontSize=125px&images=https%3A%2F%2Fraw.githubusercontent.com%2Fpickyzz%2Fpickyzz.ga%2F9a319c06dae88b888f1c1d1e25f175152ab397b8%2Fpublic%2Ffavicon.svg',
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: 'https://cdn.pckimg.ga',

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: 'pickyzz/pickyzz-blog-comment',

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // map of notion page IDs to custom descriptions (optional)
  // example:
  //
  // pageDescriptionOverrides: {
  //   '067dd719a912471ea9a3ac10710e7fdf': 'Some description unique for `/foo`',
  //   '0be6efce9daf42688f65c76b89f8eb27': 'Some description unique for `/bar`'
  // }
  pageDescriptionOverrides: null
}

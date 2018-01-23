webpackJsonp([0x6e8c80b8ef36],{625:function(t,o){t.exports={data:{site:{siteMetadata:{docSections:{basics:["/basics/introduction/","/basics/quick-start-guide/","/basics/slow-start-guide/","/basics/guide-react/","/basics/guide-vue/","/basics/guide-angular/","/basics/writing-stories/","/basics/exporting-storybook/","/basics/faq/","/basics/community/"],configurations:["/configurations/default-config/","/configurations/custom-webpack-config/","/configurations/custom-babel-config/","/configurations/add-custom-head-tags/","/configurations/serving-static-files/","/configurations/env-vars/","/configurations/cli-options/"],testing:["/testing/react-ui-testing/","/testing/structural-testing/","/testing/interaction-testing/","/testing/css-style-testing/","/testing/manual-testing/"],addons:["/addons/introduction/","/addons/using-addons/","/addons/addon-gallery/","/addons/writing-addons/","/addons/api/"]}}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/404/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/addons/api/"},frontmatter:{title:"API",id:"api"}}},{node:{fields:{slug:"/addons/addon-gallery/"},frontmatter:{title:"Addon Gallery",id:"addon-gallery"}}},{node:{fields:{slug:"/addons/introduction/"},frontmatter:{title:"Intro to Addons",id:"introduction"}}},{node:{fields:{slug:"/addons/using-addons/"},frontmatter:{title:"Using Addons",id:"using-addons"}}},{node:{fields:{slug:"/addons/writing-addons/"},frontmatter:{title:"Writing Addons",id:"writing-addons"}}},{node:{fields:{slug:"/configurations/add-custom-head-tags/"},frontmatter:{title:"Add Custom Head Tags",id:"add-custom-head-tags"}}},{node:{fields:{slug:"/configurations/cli-options/"},frontmatter:{title:"CLI Options",id:"cli-options"}}},{node:{fields:{slug:"/configurations/custom-babel-config/"},frontmatter:{title:"Custom Babel Config",id:"custom-babel-config"}}},{node:{fields:{slug:"/configurations/custom-webpack-config/"},frontmatter:{title:"Custom Webpack Config",id:"custom-webpack-config"}}},{node:{fields:{slug:"/configurations/default-config/"},frontmatter:{title:"Default Config",id:"default-config"}}},{node:{fields:{slug:"/configurations/serving-static-files/"},frontmatter:{title:"Serving Static Files",id:"serving-static-files"}}},{node:{fields:{slug:"/basics/community/"},frontmatter:{title:"Community",id:"community"}}},{node:{fields:{slug:"/configurations/env-vars/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/basics/exporting-storybook/"},frontmatter:{title:"Exporting Storybook as a Static App",id:"exporting-storybook"}}},{node:{fields:{slug:"/basics/faq/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/basics/guide-angular/"},frontmatter:{title:"Storybook for Angular",id:"guide-angular"}}},{node:{fields:{slug:"/basics/guide-react/"},frontmatter:{title:"Storybook for React",id:"guide-react"}}},{node:{fields:{slug:"/basics/introduction/"},frontmatter:{title:"Introduction",id:"introduction"}}},{node:{fields:{slug:"/basics/guide-vue/"},frontmatter:{title:"Storybook for Vue",id:"guide-vue"}}},{node:{fields:{slug:"/basics/quick-start-guide/"},frontmatter:{title:"Quick Start Guide",id:"quick-start-guide"}}},{node:{fields:{slug:"/basics/slow-start-guide/"},frontmatter:{title:"Slow start guide",id:"slow-start-guide"}}},{node:{fields:{slug:"/basics/writing-stories/"},frontmatter:{title:"Writing Stories",id:"writing-stories"}}},{node:{fields:{slug:"/testing/interaction-testing/"},frontmatter:{title:"Interaction Testing",id:"interaction-testing"}}},{node:{fields:{slug:"/testing/css-style-testing/"},frontmatter:{title:"CSS/Style Testing",id:"css-style-testing"}}},{node:{fields:{slug:"/testing/manual-testing/"},frontmatter:{title:"Manual Testing",id:"manual-testing"}}},{node:{fields:{slug:"/testing/react-ui-testing/"},frontmatter:{title:"Introduction: React UI Testing",id:"react-ui-testing"}}},{node:{fields:{slug:"/testing/structural-testing/"},frontmatter:{title:"Structural Testing",id:"structural-testing"}}}]},markdownRemark:{html:'<p>By default, Storybook comes with a way to list stories and visualize them. Addons implement extra features for Storybooks to make them more useful.</p>\n<p>Basically, there are two types of addons. (Decorators and Native Addons)</p>\n<h2 id="1-decorators"><a href="#1-decorators" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1. Decorators</h2>\n<p>Decorators are wrapper components or Storybook decorators that wrap a story.</p>\n<h3 id="wrapper-components"><a href="#wrapper-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Wrapper Components</h3>\n<p>For example, let’s say we want to center a story rendered on the screen. For that, we can use a wrapper component like this:</p>\n<pre><code class="language-js">const styles = {\n  textAlign: \'center\',\n};\nconst Center = ({ children }) => (\n  &#x3C;div style={styles}>\n    { children }\n  &#x3C;/div>\n);\n</code></pre>\n<p>Then we can use it when writing stories.</p>\n<pre><code class="language-js">import { storiesOf } from \'@storybook/react\';\nimport { action } from \'@storybook/addon-actions\';\n\nimport Center from \'./center\';\nimport Button from \'./button\';\n\nstoriesOf(\'Button\', module)\n  .add(\'with text\', () => (\n    &#x3C;Center>\n      &#x3C;Button onClick={action(\'clicked\')}>Hello Button&#x3C;/Button>\n    &#x3C;/Center>\n  ));\n</code></pre>\n<h3 id="storybook-decorators"><a href="#storybook-decorators" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Storybook Decorators</h3>\n<p>You can also expose this functionality as a Storybook decorator and use it like this.</p>\n<pre><code class="language-js">import { storiesOf } from \'@storybook/react\';\nimport { action } from \'@storybook/addon-actions\';\n\nimport Button from \'./button\';\n\nconst styles = {\n  textAlign: \'center\',\n};\nconst CenterDecorator = (storyFn) => (\n  &#x3C;div style={styles}>\n    { storyFn() }\n  &#x3C;/div>\n);\n\nstoriesOf(\'Button\', module)\n  .addDecorator(CenterDecorator)\n  .add(\'with text\', () => (\n    &#x3C;Button onClick={action(\'clicked\')}>Hello Button&#x3C;/Button>\n  ))\n  .add(\'with some emojies\', () => (\n    &#x3C;Button onClick={action(\'clicked\')}>😀 😎 👍 💯&#x3C;/Button>\n  ));\n</code></pre>\n<p>You can also add a decorator globally for all stories like this:</p>\n<pre><code class="language-js">import { storiesOf, addDecorator } from \'@storybook/react\';\nimport { action } from \'@storybook/addon-actions\';\nimport { linkTo } from \'@storybook/addon-links\';\n\nimport Button from \'./button\';\nimport Welcome from \'./welcome\';\n\nconst styles = {\n  textAlign: \'center\',\n};\nconst CenterDecorator = (storyFn) => (\n  &#x3C;div style={styles}>\n    { storyFn() }\n  &#x3C;/div>\n);\naddDecorator(CenterDecorator);\n\nstoriesOf(\'Welcome\', module)\n  .add(\'to Storybook\', () => (\n    &#x3C;Welcome showApp={linkTo(\'Button\')}/>\n  ));\n\nstoriesOf(\'Button\', module)\n  .add(\'with text\', () => (\n    &#x3C;Button onClick={action(\'clicked\')}>Hello Button&#x3C;/Button>\n  ))\n  .add(\'with some emojies\', () => (\n    &#x3C;Button onClick={action(\'clicked\')}>😀 😎 👍 💯&#x3C;/Button>\n  ));\n</code></pre>\n<blockquote>\n<p>You can call <code>addDecorator()</code> inside the story definition file as shown above. But adding it to the Storybook config file is a much better option.</p>\n</blockquote>\n<h2 id="2-native-addons"><a href="#2-native-addons" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2. Native Addons</h2>\n<p>Native addons use Storybook as a platform and interact with it. Native addons can add extra features beyond wrapping stories.</p>\n<p>For example, <a href="https://github.com/storybooks/storybook/tree/master/addons/actions">storybook-actions</a> is such an addon.</p>\n<p><img src="/addon-actions-demo-a781fbc5c0df101d65d2f0a6c14c04b4.gif" alt="Demo of Storybook Addon Actions"></p>\n<p>It will allow you to inspect the parameters of any event of your components.</p>\n<p>See the following links to learn more about native addons:</p>\n<ul>\n<li><a href="/addons/using-addons">Using addons</a></li>\n<li><a href="/addons/addon-gallery">Addon gallery</a></li>\n<li><a href="/addons/writing-addons">Write your own addon</a></li>\n</ul>',fields:{slug:"/addons/introduction/"},frontmatter:{title:"Intro to Addons",id:"introduction"}}},pathContext:{slug:"/addons/introduction/"}}}});
//# sourceMappingURL=path---addons-introduction-111ad925aaf339dcdba2.js.map
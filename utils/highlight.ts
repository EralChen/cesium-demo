// ref https://github.com/vuejs/vitepress/blob/main/src/node/markdown/plugins/highlight.ts
import chalk from 'chalk'
import escapeHtml from 'escape-html'
import prism from 'prismjs'
// import 'prismjs-components-importer/esm'
// prism is listed as actual dep so it's ok to require
// eslint-disable-next-line @typescript-eslint/no-var-requires
const prismjsLoad = (langs = ['markup', 'css', 'javascript', 'vue']) => {

  import('prismjs/components/index.js').then(res => {
    const loadLanguages = res.default
    loadLanguages(langs)
  })
  
}

prismjsLoad()


function wrap (code: string, lang: string): string {
  if (lang === 'text') {
    code = escapeHtml(code)
  }
  return `<pre v-pre><code>${code}</code></pre>`
}

export const highlight = (str: string, lang: string) => {
  if (!lang) {
    return wrap(str, 'text')
  }
  lang = lang.toLowerCase()
  const rawLang = lang
  if (lang === 'vue' || lang === 'html') {
    lang = 'markup'
  }
  if (lang === 'md') {
    lang = 'markdown'
  }
  if (lang === 'ts') {
    lang = 'typescript'
  }
  if (lang === 'py') {
    lang = 'python'
  }
  if (!prism.languages[lang]) {
    try {
      prismjsLoad([lang])
    } catch (e) {
      console.warn(
        chalk.yellow(
          `[vitepress] Syntax highlight for language "${lang}" is not supported.`,
        ),
      )
    }
  }
  if (prism.languages[lang]) {
    const code = prism.highlight(str, prism.languages[lang], lang)
    return wrap(code, rawLang)
  }
  return wrap(str, 'text')
}

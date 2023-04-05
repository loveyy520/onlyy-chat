import { useEffect } from 'react'
import Markdown from 'markdown-to-jsx'
import hljs from 'highlight.js' //代码高亮

hljs.configure({
  // 忽略未经转义的 HTML 字符
  ignoreUnescapedHTML: true,
  tabReplace: '  ',
  classPrefix: 'hljs-',
  languages: [
    'CSS',
    'Scss',
    'Less',
    'Stylus',
    'HTML, XML',
    'Java',
    'Rust',
    'GO',
    'C',
    'C++',
    'JavaScript',
    'PHP',
    'Python',
    'TypeScript',
    'Markdown'
  ]
})

export function CherryMarkdown({ id, content }) {
  useEffect(() => {
    hljs.highlightAll()
  }, [])

  return <Markdown>{content}</Markdown>
}

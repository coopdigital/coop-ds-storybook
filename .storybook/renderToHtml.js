import { renderToStaticMarkup } from 'react-dom/server'
import { decode } from 'html-entities'
import prettier from 'prettier'
import HTMLParser from 'prettier/parser-html'

export const renderComponentToHtml = (component) => {
  return prettier.format(decode(renderToStaticMarkup(component)), {
    parser: 'html',
    plugins: [HTMLParser],
  })
}

export default (story) =>
  prettier.format(decode(renderToStaticMarkup(story())), {
    parser: 'html',
    plugins: [HTMLParser],
})


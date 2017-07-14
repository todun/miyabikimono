var express = require('express')
var router = express.Router()
// var path = require('path')

var React = require('react')
var ReactDOMServer = require('react-dom/server')
import { StaticRouter } from 'react-router'
console.log('hit app')
var App = require('../../src/App')
console.log('hit success')

/* GET home page. */
router.get('/', function (req, res, next) {
  // const StaticRouter = Router.StaticRouter
  const context = {}
  console.log('hit')
  const html = 'hehe'
  // const html = ReactDOMServer.renderToString(
  //   <StaticRouter
  //     location={req.url}
  //     context={context}
  //     >
  //     <App />
  //   </StaticRouter>
  // )
  console.log('render')

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    })
    res.end()
  } else {
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset=utf-8/>
          <meta name="viewport" content="width=device-width">
          <title>江户和装工房雅 - 浅草和服租赁</title>
          <link rel="shortcut icon" type="image/png" href="/images/logo1.png"/>
          <link rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
          <link rel='stylesheet' href='/main.css' />
          <link rel='stylesheet' href='/conversational-form.min.css' />
          <link rel='stylesheet' href='/wallop.css' />
          <link rel='stylesheet' href='/wallop--fade.css' />
          <link rel='stylesheet' href='/wallop--slide.css' />
          <link rel='stylesheet' href='/wallop--rotate.css' />
          <link rel='stylesheet' href='/wallop--scale.css' />
          <link rel='stylesheet' href='/wallop--fold.css' />
          <link rel='stylesheet' href='/wallop--vertical-slide.css' />
        </head>

        <body>
          <div id=app>${html}</div>
          <script src="/conversational-form.min.js"></script>
          <script src="/bundle.js"></script>
          <script src="https://fast.wistia.com/embed/medias/phknks26n7.jsonp" async></script>
          <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
        </body>
      </html>
    `)
    res.end()
  }
  // res.sendFile(path.join(__dirname, '/../../public/index.html'))
})

module.exports = router

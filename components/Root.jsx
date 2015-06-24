
import React from 'react'
import css from '../base.css'
import { Header, Footer } from 'blk'
import Principles from './Principles.jsx'
import TweetButton from './TweetButton.jsx'

class Root extends React.Component {

  render () {
    let ga = '(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create", "UA-4603832-6", "auto");ga("send", "pageview");'
    let links = [
      { href: '//github.com/jxnblk/principles', text: 'GitHub' }
    ]

    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>{this.props.title}</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </head>
        <body className='container px3'>
          <Header {...this.props} />
          <Principles />
          <div>
            <TweetButton />
          </div>
          <Footer {...this.props} links={links} />
          <script dangerouslySetInnerHTML={{ __html: ga }} />
        </body>
      </html>
    )
  }

}

export default Root


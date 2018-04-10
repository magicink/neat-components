// @flow
import React from 'react'
import { Link } from 'react-router-dom'

export class TableOfContents extends React.Component {
  render () {
    return (
      <div>
        <h1>Table of Contents</h1>
        <ul>
          <li><Link to={'/grid-media'}><code>gridMedia</code></Link></li>
        </ul>
      </div>
    )
  }
}
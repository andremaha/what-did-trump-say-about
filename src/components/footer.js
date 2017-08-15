import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

export default class Footer extends Component {

  render() {
    return (
      <div>
        <div className='phantom' />
        <div className='footer'>
          <a target="_blank" href="https://twitter.com/andremaha"><Icon name='twitter' /></a>
          <a target="_blank" href="https://github.com/andremaha/what-did-trump-say-about"><Icon name='github' /></a>
        </div>
      </div>
    )
  }
}
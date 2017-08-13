import _ from 'lodash'
import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchQuotes, fetchGifs } from '../actions'

class SearchField extends Component {

  render() {
    return (
      <Input className="search-input" transparent autoFocus onChange={_.debounce((event, data) => { this.props.fetchQuotes(data.value);this.props.fetchGifs(data.value); }, 500) } />
    )
  }

}

export default connect(null, { fetchQuotes, fetchGifs })(SearchField)
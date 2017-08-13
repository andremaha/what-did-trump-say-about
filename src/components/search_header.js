import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Header, Icon, Image } from 'semantic-ui-react'
import SearchField from './search_field'


class SearchHeader extends Component {

  onSubmit() {
    // ignore
  }

  render() {

    const { handleSubmit } = this.props

    return (
      <div className="search-header">
        <Header as='h2' textAlign='center'>
          <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <Header.Content>
            What did Trump say about
            <Field
              name="term"
              component={ SearchField }
            />
            ?
          </Header.Content>
          </form>
        </Header>
      </div>
    );
  }
}

export default reduxForm({
  form: 'FetchNewQuotesForm'
})(
  connect(null)(SearchHeader)
)
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Header, Sticky, Icon, Image } from 'semantic-ui-react'
import SearchField from './search_field'




class SearchHeader extends Component {

  state = {}

  handleContextRef = contextRef => this.setState({ contextRef })

  onSubmit() {
    // ignore
  }

  render() {


    const { contextRef } = this.state

    const { handleSubmit } = this.props

    return (
      <Sticky context={contextRef}>
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
      </Sticky>
    );
  }
}

export default reduxForm({
  form: 'FetchNewQuotesForm'
})(
  connect(null)(SearchHeader)
)
import _ from 'lodash'
import moment from 'moment'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Icon, Image as ImageComponent, Item, Divider } from 'semantic-ui-react'


class QuotesList extends Component {

  renderQuotes() {

    return _.map( this.props.quotes, quote => {

      let gifIndex = _.random(this.props.gifs.length-1)
      const gif = this.props.gifs[gifIndex].images.downsized.url

      return (
        <Item key={ quote.quote_id } >
          <Item.Image type="gif" size='small' src={ gif } />

          <Item.Content>
            <Item.Header as='a'>{ quote._embedded.author[0].name } </Item.Header>
            <Item.Meta>{ moment(quote.created_at).format('MMMM Do YYYY, h:mm:ss a') }</Item.Meta>
            <Item.Description>
              { quote.value }
            </Item.Description>
            <Item.Extra>
              <Icon color='green' name='check' /> <a target="_blank" href={ quote._embedded.source[0].url }>Source</a>
            </Item.Extra>
          </Item.Content>
        </Item>
      )
    })
  }

  render() {
    return(
      <Grid  centered columns={1}>
        <Grid.Column>
          <Item.Group className="quotes-list">
            { this.renderQuotes() }
          </Item.Group>
        </Grid.Column>
      </Grid>
    )
  }

}

function mapStateToProps(state) {
  return {
    quotes: state.quotes,
    gifs: state.gifs
  }
}

export default connect(mapStateToProps)(QuotesList)
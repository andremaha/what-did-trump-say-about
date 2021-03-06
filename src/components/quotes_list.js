import _ from 'lodash'
import moment from 'moment'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Sticky, Icon, Image as ImageComponent, Item, Divider } from 'semantic-ui-react'
import QuoteCard from './quote_card'


class QuotesList extends Component {


  renderCardQuotes() {

    return _.map( this.props.quotes, quote => {

      let gifIndex = _.random(this.props.gifs.length - 1)
      const gif = this.props.gifs[gifIndex].images.downsized_large.url

      return (
        <Grid.Column>
          <QuoteCard
            image={ gif }
            key={ quote.quote_id }
            source={ quote._embedded.source[0].url }
            author={ quote._embedded.author[0].name }
            content={ quote.value }
            day={ moment(quote.appeared_at).format('D') }
            month={ moment(quote.appeared_at).format('MMM') }
            year={ moment(quote.appeared_at).format('YY') }
          />
        </Grid.Column>
      )
    })
  }

  render() {
    return(
      <Grid stackable columns={2}>
        { this.renderCardQuotes() }
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
import React, { Component } from 'react'

class QuoteCard extends Component {
  render() {
    return (
      <div>
        <div className="example-1 card">
          <div className="wrapper" style={ { background: `url(${this.props.image}) center/cover no-repeat`} }>
            <div className="date">
              <span className="day">{ this.props.day }</span>
              <span className="month">{ this.props.month }</span>
              <span className="year">{ this.props.year }</span>
            </div>
            <div className="data">
              <div className="content">
                <span className="author">{ this.props.author }</span>
                <h1 className="title"><a target="_blank" href={ this.props.source }>{ this.props.content }</a></h1>
                <p className="text"><a target="_blank" href={ this.props.source }>Source</a></p>
                <label for="show-menu" className="menu-button"><span></span></label>
              </div>
              <input type="checkbox" id="show-menu" />
              <ul className="menu-content">
                <li>
                  <a href="#" className="fa fa-bookmark-o"></a>
                </li>
                <li><a href="#" className="fa fa-heart-o"><span>47</span></a></li>
                <li><a href="#" className="fa fa-comment-o"><span>8</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default QuoteCard
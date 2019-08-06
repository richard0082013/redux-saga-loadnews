import React, { Component } from 'react'
import { connect } from 'react-redux';
import {getNews} from '../actions'

class NewsList extends Component {
  constructor(props){
    super(props);
    this.props.getNews();
  }
  render() {
    const {news} = this.props;
    console.log("TCL: NewsList -> render -> this.props", this.props)
    return (
      <ul>
        {
          news.map(n=>{
        return <li>{n.title}</li>
      })
        }
      </ul>
      
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  console.log("TCL: mapStateToProps -> state", state)
  return {
    news: state.news
  }
}
export default connect(mapStateToProps, {getNews})(NewsList)
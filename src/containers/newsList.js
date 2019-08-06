import React, { Component } from 'react'
import { connect } from 'react-redux';
import {getNews} from '../actions'

class NewsList extends Component {
  constructor(props){
    super(props);
    this.props.getNews();
  }
  render() {
    const {news} = this.props.news;
    return (
      <ul>
        {
          news&&news.map(n=>{
        return <li key={n.url}>{n.title}</li>
      })
        }
      </ul>
    )
  }
}

export default connect(({news})=>({news}), {getNews})(NewsList)
export const getNews = () => {
  return {
    type: 'GET_NEWS'
  }
}

export const getNewsSuccess = ({news}) => {
  return {
    type: 'GET_NEWS_SUCCESS',
    payload: {news}
  }
}
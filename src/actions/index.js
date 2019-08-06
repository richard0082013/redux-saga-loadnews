export const Types = {
  GET_NEWS: 'GET_NEWS',
  GET_NEWS_SUCCESS: 'GET_NEWS_SUCCESS',
};
export const getNews = () => {
  return {
    type: Types.GET_NEWS
  }
}

export const getNewsSuccess = ({news}) => (
  {
    type: Types.GET_NEWS_SUCCESS,
    payload: {news}
  }
)
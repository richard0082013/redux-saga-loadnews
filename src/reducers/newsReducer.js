export const newsReducer = (state={}, action) => {
  switch(action.type){
    case 'GET_NEWS': {
      return {...state, loading: true}
    }
    case 'GET_NEWS_SUCCESS': {
      return {...state, news:action.payload.news, loading: false}
    }
    default: {
      return state
    }
  }
}
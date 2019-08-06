import {Types} from '../actions'

export const newsReducer = (state={}, action) => {
  switch(action.type){
    case Types.GET_NEWS: {
      return {...state, loading: true}
    }
    case Types.GET_NEWS_SUCCESS: {
      return {...state, news:action.payload.news, loading: false}
    }
    default: {
      return state
    }
  }
}
  


// define types in constant
// import types from constant to saga, action, reducer
// using different types for reducer case
import {takeEvery, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../api';

function* fetchNews() {
  try{
    const news = yield call(api.getNewsRequest);
    yield put(actions.getNewsSuccess({news:news.data.articles}))
  }catch(e){

  }
}

function* watchNewsRequest() {
  yield takeEvery(actions.getNews().type, fetchNews)
}

const newsSagas = [
  fork(watchNewsRequest),
];
export default newsSagas;
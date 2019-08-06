import newsSagas from './news';
import {all } from 'redux-saga/effects'; 

export default function* rootSagas(){
  yield all([
    ...newsSagas,
  ])
}
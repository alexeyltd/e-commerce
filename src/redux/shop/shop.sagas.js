import { takeLatest, call, put } from "redux-saga/effects";

import ShopActionTypes from "./shop.types";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils.js";
import { fetchCollectionsError, fetchCollectionsSuccess } from "./shop.actions";

export function* fetchCollectionsAsync() {
  yield console.log("FIRED");

  try {
    const collectionRef = firestore.collection("collections");
    const snapShot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapShot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsError(error.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

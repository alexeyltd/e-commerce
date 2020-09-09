import { createSelector } from "reselect";

import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectorCollections = createSelector(
  [selectShop],
  (shop) => shop
);

export const selectCollectionsForPreview = createSelector(
  [selectorCollections],
  collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = memoize((collectionUrlParam) => {
  createSelector(
    [selectorCollections],
    (collections) =>
      collections[collectionUrlParam]
  );
});

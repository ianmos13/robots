
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import headerReducer from "./features/headerSlice";
import favoriteReducer from "./features/favoriteSlice";
import compareReducer from "./features/compareSlice";
import productsReducer from "./features/productsSlice";
import newsReducer from "./features/newsSlice";
import categoryReducer from "./features/categoriesSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  header: headerReducer,
  favorite: favoriteReducer,
  compare: compareReducer,
  // products: productsReducer, 
  // news: newsReducer,
  // category: categoryReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
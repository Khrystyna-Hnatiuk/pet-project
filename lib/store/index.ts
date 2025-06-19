import { configureStore ,combineReducers} from "@reduxjs/toolkit";
import FavoriteReducer from "./features/favorites/favoritesSlice";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorites"],
};

const rootReducer = combineReducers({
  favorites: FavoriteReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;

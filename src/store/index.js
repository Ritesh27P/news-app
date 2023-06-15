import { configureStore } from "@reduxjs/toolkit";
import searchSlice, { updateSearch } from "./slices/searchSlice";
import newsApi, {useFetchNewsQuery} from "./services/news";
import { setupListeners } from "@reduxjs/toolkit/dist/query";


const store = configureStore({
    reducer: {
        search: searchSlice,
        [newsApi.reducerPath]: newsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newsApi.middleware),
})

setupListeners(store.dispatch)

export { store, updateSearch, useFetchNewsQuery }
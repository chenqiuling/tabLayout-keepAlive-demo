import {
    Action,
    combineReducers,
    configureStore,
    ThunkAction,
  } from "@reduxjs/toolkit"
  import { TAB_LAYOUT_REDUCER_NAME, tabLayoutReducer } from "./layoutService"
  
  const rootReducer = combineReducers({
    [TAB_LAYOUT_REDUCER_NAME]: tabLayoutReducer,
  })
  export type IRootState = ReturnType<typeof rootReducer>
  
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  })
  
  export default store
  
  export type AppThunk = ThunkAction<void, IRootState, unknown, Action<string>>
  
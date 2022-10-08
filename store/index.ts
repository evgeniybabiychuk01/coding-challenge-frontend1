import { configureStore } from '@reduxjs/toolkit'
import { dashboardReducer } from './slices'

export const store = configureStore({
    reducer: {
        dashboard: dashboardReducer
    },
    devTools: true
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
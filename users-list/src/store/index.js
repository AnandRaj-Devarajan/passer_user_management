import { configureStore } from '@reduxjs/toolkit';

import { thunk } from 'redux-thunk';
import userReducer from '../reducer/userReducer';

const store = configureStore({
    reducer: { user: userReducer }, middleware: (getDefaultMiddleware) => [
        thunk,
        ...getDefaultMiddleware({
            serializableCheck: false, // Disable serializable check
        }),
    ],
});

export default store;
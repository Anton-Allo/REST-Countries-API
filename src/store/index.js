import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from './theme/theme-reducer';
import { countriesReducer } from './countries/countries-reducers';
import { controlsReducer } from './controls/controls-reducer';
import { detailsReducer } from './details/details-reducer';

// import { rootReducer } from './root-reducer';
import * as api from '../config';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   rootReducer,
//   composeEnhancers(
//     applyMiddleware(
//       thunk.withExtraArgument({
//         client: axios,
//         api,
//       })
//     )
//   )
// );
const store = configureStore({
  reducer: {
    theme: themeReducer,
    countries: countriesReducer,
    controls: controlsReducer,
    details: detailsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
    }),
  // devTools: process.env.NODE_ENV !== 'production',
  devTools:
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
});
export default store;

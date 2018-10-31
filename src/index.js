import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

import App from "./components/app";
import rootReducer from './reducers';

import "./styles.scss";

const initialState = {
  user: {
    name: "Foo"
  },
  problem: {
    name: "Bar",
    statement: [
      "Suppose you aim a bow horizontally, directly at the center of a target 25.0 m away from you. If the speed of the arrow is 60 m / s, how far from the center of the target will it strike the target ? That is, find the vertical displacement of the arrow while it is in flight.",
      "Assume there is no air friction."
    ],
    progress: 10
  },
  tabs: [
    {
      id: "video",
      type: "video",
      label: "Video",
      content: "https://www.educreations.com/lesson/embed/38323729/?ref=embed",
      active: false,
      visible: false
    },
    {
      id: "fig1",
      type: "image",
      content: "http://frank.lrdc.pitt.edu/rimac_static/img/P2.png",
      label: "Figure 1",
      active: false,
      visible: false
    },
    {
      id: "fig2",
      type: "image",
      content: "http://frank.lrdc.pitt.edu/rimac_static/img/P3.png",
      label: "Figure 2",
      active: false,
      visible: false
    }
  ],
  turns: [
    {
      id: 0,
      tutorText: 'Please enter the answer you got for this problem',
      studentForm: {
        formType: 'sansq'
      }
    }
  ]
};

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const middleware = [thunk];
const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);
// const store = createStore(rootReducer,
//                         initialState,
//                         applyMiddleware(thunk));

const store = createStore(rootReducer, initialState, enhancer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

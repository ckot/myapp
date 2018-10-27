import React from "react";
import { render } from "react-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from "./components/app";
import rootReducer from './reducers';

import "./styles.scss";

const initialState = {
  user: "Foo",
  problem: {
    title: "Bar Problem",
    statement: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at ligula eu nibh finibus feugiat.",
      "Praesent tincidunt congue tempus. Phasellus massa diam, vulputate a tincidunt at, mattis eget leo."
    ],
    progress: 0
  },
  tabs: [
    {
      id: "video",
      type: "video",
      label: "Video",
      content: null,
      active: true,
      visible: true
    },
    {
      id: "fig1",
      type: "image",
      content: null,
      label: "Fig. 1",
      active: false,
      visible: false
    },
    {
      id: "fig2",
      type: "image",
      content: null,
      label: "Fig. 2",
      active: false,
      visible: true
    }
  ],
  assets: {
    probVideo: "http://foo.com/assets/1",
    img1: "http://foo.com/static/img1.png",
    img2: "http://foo.com/static/imag2.png"
  },
  turns: [
    {
      tutor: "What is the weight of an unladen swallow?",
      student: "Would that be african or european?"
    },
    {
      tutor: "african",
      student: "42g"
    },
    {
      tutor: "Blah blah blah?",
      student: "foo bar baz."
    },
    {
      tutor: "Blah blah blah?",
      student: "foo bar baz."
    },
    {
      tutor: "Blah blah blah?",
      student: "foo bar baz."
    },
    {
      tutor: "Blah blah blah?",
      student: "foo bar baz."
    },
    {
      tutor: "Blah blah blah?",
      student: "foo bar baz."
    },
    {
      tutor: "Blah blah blah?",
      student: "foo bar baz."
    },
    {
      tutor: "So, if the parcel weights 10 g, what is the total weight?",
      studentForm: {
        formType: "lansq"
      }
    }
  ]
};

const store = createStore(rootReducer, initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

import React from "react";
import { render } from "react-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux'

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
      active: true,
      visible: true
    },
    {
      id: "fig1",
      type: "image",
      content: "http://frank.lrdc.pitt.edu/rimac_static/img/P2.png",
      label: "Figure 1",
      active: false,
      visible: true
    },
    {
      id: "fig2",
      type: "image",
      content: "http://frank.lrdc.pitt.edu/rimac_static/img/P3.png",
      label: "Figure 2",
      active: false,
      visible: true
    }
  ],
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
      tutor: "So, if the swallow weighs 42g and parcel weights 10 g, what is the weight of the <b>laden</b> swallow?",
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

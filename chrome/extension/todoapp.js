import React from 'react';
import ReactDOM from 'react-dom';
import {STORE} from "../../app/stores/store";
import App from '../../app/containers/App';
import {getPrice24H, GET_PRICE_24H} from "../../app/actions/ApiActions";
import badgeService from "../../app/services/badgeService";
import './todoapp.css';
chrome.storage.local.get('state', (obj) => {
  const BadgeServiceHandle = new badgeService();
  STORE.price24H.sideEffectSubscribe(GET_PRICE_24H, (value) => {
    BadgeServiceHandle.setChrome(value);
  });
  STORE.dispatch(getPrice24H());

  ReactDOM.render(
    <App/>,
    document.querySelector('#root')
  );
});
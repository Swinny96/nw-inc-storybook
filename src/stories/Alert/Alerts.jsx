import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './alerts.less';

const Alert = ({ type, message, additionalInfo }) => (
  <div data-notify="container" aria-labelledby="global-notify-title" class={`sk-notification alert alert-${type} animated fadeInDown" role="alert" aria-live="assertive" aria-atomic="true" data-notify-position="top-right"`} role="alert">
    <div class="sk-notfication-contents">
      <strong class="notify-title" data-notify="title" id="global-notify-title">{message}</strong>
      <p class="notify-message" data-notify="message">{additionalInfo}</p>
    </div>
    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
);

export default Alert;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Alert from './Alerts';

export default {
    title: 'Components/Alerts',
    tags: ['autodocs'],
    parameters: {
      docs: {
        source: {
            code: `
            // Source code for Alerts component:
            <div data-notify="container" aria-labelledby="global-notify-title" class="sk-notification alert alert-info animated fadeInDown" role="alert" aria-live="assertive" aria-atomic="true" data-notify-position="top-right" role="alert">
              <div class="sk-notfication-contents">
                <strong class="notify-title" data-notify="title" id="global-notify-title">{message}</strong>
                <p class="notify-message" data-notify="message">{additionalInfo}</p>
              </div>
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div data-notify="container" aria-labelledby="global-notify-title" class="sk-notification alert alert-success animated fadeInDown" role="alert" aria-live="assertive" aria-atomic="true" data-notify-position="top-right" role="alert">
              <div class="sk-notfication-contents">
                <strong class="notify-title" data-notify="title" id="global-notify-title">{message}</strong>
                <p class="notify-message" data-notify="message">{additionalInfo}</p>
              </div>
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div data-notify="container" aria-labelledby="global-notify-title" class="sk-notification alert alert-warning animated fadeInDown" role="alert" aria-live="assertive" aria-atomic="true" data-notify-position="top-right" role="alert">
              <div class="sk-notfication-contents">
                <strong class="notify-title" data-notify="title" id="global-notify-title">{message}</strong>
                <p class="notify-message" data-notify="message">{additionalInfo}</p>
              </div>
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div data-notify="container" aria-labelledby="global-notify-title" class="sk-notification alert alert-danger animated fadeInDown" role="alert" aria-live="assertive" aria-atomic="true" data-notify-position="top-right" role="alert">
              <div class="sk-notfication-contents">
                <strong class="notify-title" data-notify="title" id="global-notify-title">{message}</strong>
                <p class="notify-message" data-notify="message">{additionalInfo}</p>
              </div>
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            `,
          },
        description: {
          component: 'Bootstrap Alerts component',
        },
      },
    },
  };
  
  export const InfoAlert = () => (
    <Alert
      type="info"
      message={`Info Alert`}
      additionalInfo="Here is some additional information."
    />
  );
  
  export const SuccessAlert = () => (
    <Alert
      type="success"
      message={`Success Alert`}
      additionalInfo="Here is some additional information."
    />
  );
  
  export const WarningAlert = () => (
    <Alert
      type="warning"
      message={`Warning Alert`}
      additionalInfo="Here is some additional information."
    />
  );
  
  export const DangerAlert = () => (
    <Alert
      type="danger"
      message={`Danger Alert`}
      additionalInfo="Here is some additional information."
    />
  );
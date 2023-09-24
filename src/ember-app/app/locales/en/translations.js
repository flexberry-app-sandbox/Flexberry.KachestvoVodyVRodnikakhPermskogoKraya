import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKachestvo_vody_v_rodnikakh_permskogo_krayaCheckFileModel from './models/i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-check-file';
import IISKachestvo_vody_v_rodnikakh_permskogo_krayaCommentModel from './models/i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-comment';
import IISKachestvo_vody_v_rodnikakh_permskogo_krayaDateTimeModel from './models/i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-date-time';
import IISKachestvo_vody_v_rodnikakh_permskogo_krayaPhotoModel from './models/i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-photo';
import IISKachestvo_vody_v_rodnikakh_permskogo_krayaSpringModel from './models/i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-spring';
import IISKachestvo_vody_v_rodnikakh_permskogo_krayaUserAllModel from './models/i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-user-all';
import IISKachestvo_vody_v_rodnikakh_permskogo_krayaUserModel from './models/i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-user';
import IISKachestvo_vody_v_rodnikakh_permskogo_krayaРодникModel from './models/i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-родник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-check-file': IISKachestvo_vody_v_rodnikakh_permskogo_krayaCheckFileModel,
    'i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-comment': IISKachestvo_vody_v_rodnikakh_permskogo_krayaCommentModel,
    'i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-date-time': IISKachestvo_vody_v_rodnikakh_permskogo_krayaDateTimeModel,
    'i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-photo': IISKachestvo_vody_v_rodnikakh_permskogo_krayaPhotoModel,
    'i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-spring': IISKachestvo_vody_v_rodnikakh_permskogo_krayaSpringModel,
    'i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-user-all': IISKachestvo_vody_v_rodnikakh_permskogo_krayaUserAllModel,
    'i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-user': IISKachestvo_vody_v_rodnikakh_permskogo_krayaUserModel,
    'i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-родник': IISKachestvo_vody_v_rodnikakh_permskogo_krayaРодникModel
  },

  'application-name': '',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': '',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '',
          title: ''
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },

      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },

  },

});

export default translations;

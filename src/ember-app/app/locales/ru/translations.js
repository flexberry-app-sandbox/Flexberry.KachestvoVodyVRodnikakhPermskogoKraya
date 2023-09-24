import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': '',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '',
          title: ''
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },

      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },

  },

});

export default translations;

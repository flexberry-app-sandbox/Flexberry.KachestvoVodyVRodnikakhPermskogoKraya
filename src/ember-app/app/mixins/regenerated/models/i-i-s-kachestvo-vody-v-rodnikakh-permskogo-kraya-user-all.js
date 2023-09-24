import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  userAvatar: DS.attr('string'),
  userLogin: DS.attr('string'),
  userMail: DS.attr('string'),
  userRole: DS.attr('number')
});

export let ValidationRules = {
  userAvatar: {
    descriptionKey: 'models.i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-user-all.validations.userAvatar.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  userLogin: {
    descriptionKey: 'models.i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-user-all.validations.userLogin.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  userMail: {
    descriptionKey: 'models.i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-user-all.validations.userMail.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  userRole: {
    descriptionKey: 'models.i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-user-all.validations.userRole.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

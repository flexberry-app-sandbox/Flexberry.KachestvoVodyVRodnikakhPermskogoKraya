import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  userId: DS.attr('string'),
  userLogin: DS.attr('string'),
  userType: DS.attr('number')
});

export let ValidationRules = {
  userId: {
    descriptionKey: 'models.i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-user.validations.userId.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  userLogin: {
    descriptionKey: 'models.i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-user.validations.userLogin.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  userType: {
    descriptionKey: 'models.i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-user.validations.userType.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

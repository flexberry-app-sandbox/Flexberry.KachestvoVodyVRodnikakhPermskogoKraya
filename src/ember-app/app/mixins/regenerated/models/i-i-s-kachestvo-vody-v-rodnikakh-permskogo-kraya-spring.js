import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  isVerified: DS.attr('boolean'),
  quality: DS.attr('number'),
  springDescription: DS.attr('string'),
  springLatitude: DS.attr('string'),
  springLongtitude: DS.attr('string'),
  springName: DS.attr('string')
});

export let ValidationRules = {
  isVerified: {
    descriptionKey: 'models.i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-spring.validations.isVerified.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  quality: {
    descriptionKey: 'models.i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-spring.validations.quality.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  springDescription: {
    descriptionKey: 'models.i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-spring.validations.springDescription.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  springLatitude: {
    descriptionKey: 'models.i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-spring.validations.springLatitude.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  springLongtitude: {
    descriptionKey: 'models.i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-spring.validations.springLongtitude.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  springName: {
    descriptionKey: 'models.i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-spring.validations.springName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

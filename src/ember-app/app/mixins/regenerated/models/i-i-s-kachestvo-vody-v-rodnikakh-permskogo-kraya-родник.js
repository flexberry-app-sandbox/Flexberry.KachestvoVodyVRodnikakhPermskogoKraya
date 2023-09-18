import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  координаты: DS.attr('string')
});

export let ValidationRules = {
  координаты: {
    descriptionKey: 'models.i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-родник.validations.координаты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

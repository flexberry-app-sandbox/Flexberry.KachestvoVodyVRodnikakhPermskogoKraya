import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  commentId: DS.attr('number'),
  commentText: DS.attr('string'),
  createDttm: DS.attr('string'),
  isDeleted: DS.attr('boolean'),
  springId: DS.attr('number'),
  userId: DS.attr('number')
});

export let ValidationRules = {
  commentId: {
    descriptionKey: 'models.i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-comment.validations.commentId.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  commentText: {
    descriptionKey: 'models.i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-comment.validations.commentText.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  createDttm: {
    descriptionKey: 'models.i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-comment.validations.createDttm.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  isDeleted: {
    descriptionKey: 'models.i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-comment.validations.isDeleted.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  springId: {
    descriptionKey: 'models.i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-comment.validations.springId.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  userId: {
    descriptionKey: 'models.i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-comment.validations.userId.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

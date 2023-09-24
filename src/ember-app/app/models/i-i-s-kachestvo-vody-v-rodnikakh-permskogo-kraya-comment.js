import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as CommentMixin
} from '../mixins/regenerated/models/i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-comment';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(CommentMixin, Validations, {
});

export default Model;

import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as UserAllMixin
} from '../mixins/regenerated/models/i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-user-all';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(UserAllMixin, Validations, {
});

export default Model;

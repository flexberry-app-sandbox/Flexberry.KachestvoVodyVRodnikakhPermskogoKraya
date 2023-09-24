import {
  defineNamespace,
  Model as CheckFileMixin
} from '../mixins/regenerated/models/i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-check-file';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(CheckFileMixin, {
});

defineNamespace(Model);

export default Model;

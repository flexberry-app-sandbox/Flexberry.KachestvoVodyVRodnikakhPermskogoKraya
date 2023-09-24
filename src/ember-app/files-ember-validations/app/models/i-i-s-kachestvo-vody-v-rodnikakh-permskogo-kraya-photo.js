import {
  defineNamespace,
  Model as PhotoMixin
} from '../mixins/regenerated/models/i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-photo';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(PhotoMixin, {
});

defineNamespace(Model);

export default Model;

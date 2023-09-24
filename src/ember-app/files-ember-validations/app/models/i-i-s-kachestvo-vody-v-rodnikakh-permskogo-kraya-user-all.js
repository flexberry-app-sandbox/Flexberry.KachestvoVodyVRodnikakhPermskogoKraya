import {
  defineNamespace,
  Model as UserAllMixin
} from '../mixins/regenerated/models/i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-user-all';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(UserAllMixin, {
});

defineNamespace(Model);

export default Model;

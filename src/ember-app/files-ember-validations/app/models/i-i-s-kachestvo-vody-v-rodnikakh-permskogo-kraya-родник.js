import {
  defineNamespace,
  Model as РодникMixin
} from '../mixins/regenerated/models/i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-родник';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РодникMixin, {
});

defineNamespace(Model);

export default Model;

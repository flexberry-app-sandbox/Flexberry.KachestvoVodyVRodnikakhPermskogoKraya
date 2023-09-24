import {
  defineNamespace,
  Model as CommentMixin
} from '../mixins/regenerated/models/i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-comment';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(CommentMixin, {
});

defineNamespace(Model);

export default Model;

import { Serializer as PhotoSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-photo';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(PhotoSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

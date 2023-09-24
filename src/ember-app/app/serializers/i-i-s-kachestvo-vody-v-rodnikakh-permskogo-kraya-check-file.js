import { Serializer as CheckFileSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-check-file';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(CheckFileSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

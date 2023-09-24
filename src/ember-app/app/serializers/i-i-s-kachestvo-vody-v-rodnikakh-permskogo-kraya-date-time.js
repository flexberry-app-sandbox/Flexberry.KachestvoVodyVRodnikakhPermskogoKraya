import { Serializer as DateTimeSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-date-time';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(DateTimeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

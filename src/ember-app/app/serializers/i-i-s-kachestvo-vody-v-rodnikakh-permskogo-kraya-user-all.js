import { Serializer as UserAllSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-user-all';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(UserAllSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

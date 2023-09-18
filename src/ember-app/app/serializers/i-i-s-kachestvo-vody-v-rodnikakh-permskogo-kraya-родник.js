import { Serializer as РодникSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-родник';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РодникSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

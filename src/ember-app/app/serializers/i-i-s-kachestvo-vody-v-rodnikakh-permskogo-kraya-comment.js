import { Serializer as CommentSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-comment';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(CommentSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

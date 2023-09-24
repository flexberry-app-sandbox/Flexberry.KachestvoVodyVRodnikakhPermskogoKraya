import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-родник', 'Unit | Serializer | i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-родник', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-родник',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-check-file',
    'model:i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-comment',
    'model:i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-date-time',
    'model:i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-photo',
    'model:i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-spring',
    'model:i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-user-all',
    'model:i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-user',
    'model:i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-родник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});

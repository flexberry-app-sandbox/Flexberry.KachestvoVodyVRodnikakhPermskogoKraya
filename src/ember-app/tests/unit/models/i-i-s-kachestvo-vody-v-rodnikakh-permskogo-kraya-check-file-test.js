import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-check-file', 'Unit | Model | i-i-s-kachestvo-vody-v-rodnikakh-permskogo-kraya-check-file', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});

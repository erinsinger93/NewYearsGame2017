import Route from '@ember/routing/route';
import { storageFor } from 'ember-local-storage';

export default Route.extend({
  visited: storageFor('visited'),

  model() {
    return this.get('visited');
  },
});


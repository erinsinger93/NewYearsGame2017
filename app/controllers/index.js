import Controller from '@ember/controller';
import Trivia from '../utils/trivia';
import { storageFor } from 'ember-local-storage';

export default Controller.extend({
  visited: storageFor('visited'),

  init() {
    this._super(...arguments);
    this.set('trivia', Trivia);
  },

  actions: {
    markAsVisited(index) {
      this.get('visited').replace(index, 1, true)
    },

    clearTriviaProgress() {
      this.get('visited').reset();
    }
  }
});

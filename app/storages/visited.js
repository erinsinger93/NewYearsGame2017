import StorageArray from 'ember-local-storage/local/array';
import { NUM_TRIVIA_QUESTIONS } from '../utils/trivia';

const Storage = StorageArray.extend();

Storage.reopenClass({
  initialState() {
    return new Array(NUM_TRIVIA_QUESTIONS).fill(false);
  }
});

export default Storage;

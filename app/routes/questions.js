import Route from '@ember/routing/route';
import Trivia from '../utils/trivia';

export default Route.extend({
  queryParams: {
    id: {
      refreshModel: true
    }
  },

  model(params) {
    return Trivia.objectAt(params.id);
  },

  setupController(controller, model) {
    controller.setProperties({
      model,
      mainText: model.question,
      buttonText: 'Next',
    });
  },

  actions: {
    doThings() {
      if (this.get('questionIsComplete')) {
        this.set('questionIsComplete', false);
        return this.transitionTo('index');
      }

      const controller = this.controllerFor('questions');
      controller.setProperties({
        mainText: controller.get('model.answer'),
        buttonText: 'Done',
      })
      this.set('questionIsComplete', true);
    }
  }
});

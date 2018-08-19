import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // return this.store.findAll('quest');
  },

  setupController(controller, model) {
    // Call _super for default behavior
    this._super(controller, model);
    // Implement your custom setup after
    controller.send('newQuestInstance')
  }
});

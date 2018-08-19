import Controller from '@ember/controller';
import {
  get, set
} from '@ember/object';

export default Controller.extend({
  actions: {
    newQuestInstance (){
      const newQuest = get(this, "store").createRecord('quest')
      set(this, 'newQuest', newQuest)
    }
  }
});

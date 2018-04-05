import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({
  model(params){
    return new RSVP.hash({
      stories: this.get('store').findAll('story'),
      task: this.get('store').findRecord('task',params.task_id)
    });
  },
  afterModel(model){
    Ember.set(model,'data',EmberObject.create(JSON.parse(JSON.stringify(model.task))));
  },
  actions:{
    save(task,data){
      Ember.set(task,'content',data.content);
      Ember.set(task,'story',data.story);
      task.save().then(()=>{
        this.transitionTo("tasks");
      })
    },
    didTransition() {
      Ember.run.next(this, 'initUI');
    },
    cancel(){
      this.transitionTo("tasks");
    }
  },
  initUI() {
    Ember.$('.ui.dropdown').dropdown(); // permet d'activer la liste déroulante (dropdown)
  }
});

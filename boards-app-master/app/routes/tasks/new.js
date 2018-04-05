import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({
  model(){
    return RSVP.hash({
      stories: this.get('store').findAll('story'),
      task: EmberObject.create({})
    });
  },
  actions:{
    save:function(oldValue,newValue){
      let task=this.get('store').createRecord('task',JSON.parse(JSON.stringify(newValue)));
      task.save().then(()=>{this.transitionTo("tasks");}).
      catch((error)=>console.log(error));
    },
    cancel(){
      this.transitionTo("tasks");
    },
    didTransition() {
      Ember.run.next(this, 'initUI');
    }
  },
  initUI() {
    Ember.$('.ui.dropdown').dropdown(); // permet d'activer la liste déroulante (dropdown)
  }
});

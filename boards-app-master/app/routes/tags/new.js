import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({
  model(){
    return RSVP.hash({
    colors:['black','blue','green','orange','pink','purple','red','teal','yellow','positive','negative'],
    tag: EmberObject.create({})
    });
  },
  actions:{
    save:function(oldValue,newValue){
      let tag=this.get('store').createRecord('tag',JSON.parse(JSON.stringify(newValue)));
      tag.save().then(()=>{this.transitionTo("tags");}).
      catch((error)=>console.log(error));
    },
    cancel(){
      this.transitionTo("tags");
    },
    didTransition() {
      Ember.run.next(this, 'initUI');
    }
  },
  initUI() {
    Ember.$('.ui.dropdown').dropdown(); // permet d'activer la liste déroulante (dropdown)
  }
});

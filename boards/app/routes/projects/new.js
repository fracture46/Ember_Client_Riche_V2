import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
  model(){
    return EmberObject.create({});
  }/*,
  actions:{ // work in progress
    save(name, desc, strd, endd){
      name=this.get('store').createRecord('name',
        JSON.parse(JSON.stringify(name)));
      name.save().then(() =>{
        this.transitionTo("project");
      });
    }
  }*/
});

import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
  actions:{
    save(dev){
      dev.save().then(() =>{
        this.transitionTo("developer");
      })
    }
  }
});

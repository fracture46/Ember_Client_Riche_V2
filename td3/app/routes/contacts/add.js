import Route from '@ember/routing/route';
import Object from '@ember/object';

export default Route.extend({
  model(){
    return Object.create({nom:'text'})
  },
  actions:{
    addContact:function(datas){
      let store = this.get('store');
      let contact=store.createRecord('contact', JSON.parse(JSON.stringify(datas)));
      //il faut spécifier la classe de l'objet que l'on veut créer !
      contact.save();
      this.transitionTo("contacts"); // retourne à la route contacts
    }
  }
});

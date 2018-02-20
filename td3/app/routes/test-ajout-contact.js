import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.get('store').findAll('contact');
  },
  actions:{
    addNew:function(){
      let store=this.get('store');
      let contact=store.createRecord({
        nom: 'SMITH',
        prenom: 'Will',
        email: 'w.smith@zz.com'
      });
      contact.save();
    }
  }
});

import Route from '@ember/routing/route';
import { computed } from '@ember/object'; // pas sûr, autres manquants

const Data=Ember.Object.extend({
  contacts: computed('filter', 'datas.@each.isDeleted', function(){
    let notDeleted = this.get('datas').filterBy('isDeleted',false);
    //les contacts dans la base qui ne sont pas faux
    let filter = this.get('filter'); // valeur contenu dans la champ sur le site
    if(filter){
      return notDeleted.filter(
        //item = chaque contact
        (item)=>{return item.get('nom').includes(filter) ||
          item.get('prenom').includes(filter) ||
          item.get('email').includes(filter);}
        // retourne vrai si le nom/prenom/email du contact contient la chaine filtre
      );
      // retourne un tableau à partir d'un premier tableau correspondant  tous les éléments
      // qui satisfont la fonction de callback appelée. On cherche ici des correspondances avec le filtre
    }
    return notDeleted;
  }),
  deleteds:computed('datas.@each.isDeleted',function(){
    return this.get('datas').filterBy('isDeleted',true);
  })
});
export default Route.extend({
  model(){
    let storedContacts=this.get('store').findAll('contact');
    return Data.create({datas: storedContacts});
  },
  actions:{
    addNew:function(){
      let store=this.get('store');
      let c=store.createRecord('contact', JSON.parse(JSON.stringify('SMITH')));
      let contact=store.createRecord(c);
      contact.save();
    },
    delete:function(contact){
      contact.deleteRecord(); // Cette fonction marque l'enregistrement comme "supprimé" => isDeleted = true
      // il faut la sauvegarder pour le supprimer vraiment
    },
    cancelDeletion:function(deleteds){
     deleteds.forEach(
       (item)=>{item.rollbackAttributes();}
     )
    }
  }
});

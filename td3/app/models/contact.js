import DS from 'ember-data';

export default DS.Model.extend({
  nom: DS.attr('string'), // propriété sérialisée
  prenom: DS.attr('string'),
  email: DS.attr('string')
});

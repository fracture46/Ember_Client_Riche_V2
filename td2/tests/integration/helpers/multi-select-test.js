import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('multi-select', 'helper:multi-select', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{multi-select inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

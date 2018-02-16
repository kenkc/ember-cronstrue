import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-cronstrue', 'helper:ember-cronstrue', {
  integration: true
});

// Replace this with your real tests.
test('it renders correctly', function(assert) {
  this.set('inputValue', '*/5 * * * *');

  this.render(hbs `{{ember-cronstrue inputValue}}`);

  assert.equal(this.$().text().trim(), 'Every 5 minutes');
});
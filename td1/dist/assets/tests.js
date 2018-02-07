'use strict';

define('td1/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/calcreduc.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/calcreduc.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/format-currency.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/format-currency.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/format-percent.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/format-percent.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/plural.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/plural.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/ex1.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/ex1.js should pass ESLint\n\n');
  });

  QUnit.test('routes/ex2.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/ex2.js should pass ESLint\n\n3:9 - \'computed\' is defined but never used. (no-unused-vars)\n6:16 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n6:16 - \'Ember\' is not defined. (no-undef)\n9:15 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n9:15 - \'Ember\' is not defined. (no-undef)\n15:13 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n15:13 - \'Ember\' is not defined. (no-undef)\n21:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n21:14 - \'Ember\' is not defined. (no-undef)\n64:9 - Use import { set } from \'@ember/object\'; instead of using Ember.set (ember/new-module-imports)\n64:9 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('routes/test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/test.js should pass ESLint\n\n');
  });

  QUnit.test('routes/test/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/test/new.js should pass ESLint\n\n');
  });
});
define('td1/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('td1/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'td1/tests/helpers/start-app', 'td1/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('td1/tests/helpers/start-app', ['exports', 'td1/app', 'td1/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('td1/tests/integration/helpers/calcreduc-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('calcreduc', 'helper:calcreduc', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "Mp8SdNcA",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"calcreduc\",[[20,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '1234');
  });
});
define('td1/tests/integration/helpers/format-currency-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('format-currency', 'helper:format-currency', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "kOk0Pol8",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"format-currency\",[[20,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '1234');
  });
});
define('td1/tests/integration/helpers/format-percent-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('format-percent', 'helper:format-percent', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "rDbjuUhA",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"format-percent\",[[20,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '1234');
  });
});
define('td1/tests/integration/helpers/plural-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('plural', 'helper:plural', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "dOCZQrcf",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"plural\",[[20,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '1234');
  });
});
define('td1/tests/test-helper', ['td1/app', 'td1/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('td1/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/calcreduc-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/calcreduc-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/format-currency-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/format-currency-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/format-percent-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/format-percent-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/plural-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/plural-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/ex1-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/ex1-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/ex2-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/ex2-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/test-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/test-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/test/new-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/test/new-test.js should pass ESLint\n\n');
  });
});
define('td1/tests/unit/routes/ex1-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:ex1', 'Unit | Route | ex1', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('td1/tests/unit/routes/ex2-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:ex2', 'Unit | Route | ex2', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('td1/tests/unit/routes/test-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:test', 'Unit | Route | test', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('td1/tests/unit/routes/test/new-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:test/new', 'Unit | Route | test/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
require('td1/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map

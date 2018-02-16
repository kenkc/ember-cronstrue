var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cronstrue',

  included() {
    this._super.included.apply(this, arguments);
    this.import('vendor/shims/cronstrue.js');
    this.import('vendor/cronstrue.js');
  },

  treeForVendor(vendorTree) {
    var cronstrueTree = new Funnel(path.dirname(require.resolve('cronstrue/dist/cronstrue.js')), {
      files: ['cronstrue.js'],
    });

    var trees = [
      vendorTree,
      cronstrueTree
    ].filter(Boolean);

    return new MergeTrees(trees);
  },
};
require.config({
  paths: {
    jQuery: 'libs/jquery',
    lodash: 'libs/lodash',
    Backbone: 'libs/backbone',
    text: 'libs/text',
    templates: '../templates'
  },

  shim: {
    'Backbone': ['lodash', 'jQuery'],
    'NodeAuth': ['Backbone']
  }
});

require(['NodeAuth'], function(NodeAuth) {
  NodeAuth.initialize();
});

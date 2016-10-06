// Webpack JS entry file
require('./src/scss/main.scss');
require('./src/js/main.js');

// Build images into build folder, requireAll is not available on compiled js file
if (typeof requireAll === 'function') {
    requireAll(require.context('./src/img/', true, /.(png|jpg|jpeg|svg)$/));
}

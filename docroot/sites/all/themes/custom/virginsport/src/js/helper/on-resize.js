
const callbacks = [];

window.addEventListener('resize', () => {
  window.requestAnimationFrame(() => {
    callbacks.forEach(cb => cb())
  });
});

/**
 * Executes the given callback everytime the window is resized
 *
 * @param {function} callback
 */
export default (callback) => {
  callbacks.push(callback);
};

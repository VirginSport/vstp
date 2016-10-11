
/**
 * Applies the given callback for all elements with the given class name
 *
 * @param {string} className
 * @param {function({Element}, Number)} callback
 */
export default (className, callback) => {
  let elements = document.getElementsByClassName(className);
  
  for (let i = 0; i < elements.length; i++) {
    callback(elements[i], i);
  }
};

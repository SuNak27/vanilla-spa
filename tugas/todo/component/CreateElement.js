/**
 * 
 * @param {String} element name of element
 * @param classlist classlist of element
 * @param {Object} attrs attributes of element
 * @param {Object} customAttrs custom attributes of element
 * @param {Object} eventListener event listener of element
 * @param  {...any} children innerHTML of element
 * @returns element with attributes and children
 */
function createElement(element, classlist, attrs = null, customAttrs = null, eventListener = null, ...children) {
  const el = document.createElement(element)
  if (classlist) {
    if (typeof classlist === "string") {
      el.classList.add(classlist)
    } else if (Array.isArray(classlist)) {
      el.classList.add(...classlist)
    } else if (typeof classlist === "object") {
      for (const key in classlist) {
        el.setAttribute(key, classlist[key])
      }
    }
  }
  Object.assign(el, attrs)
  el.append(...children)
  if (customAttrs) {
    for (const key in customAttrs) {
      el.setAttribute(key, customAttrs[key])
    }
  }

  if (eventListener) {
    for (const key in eventListener) {
      el.addEventListener(key, eventListener[key])
    }
  }
  return el
}

export default createElement
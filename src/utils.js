// This function is the classic debounce that you can easily find on the internet. It should be typescripted, but for time reasons, I'll pospone it

/* eslint-disable @typescript-eslint/explicit-function-return-type */
export function debounce(func, wait, immediate) {
  var timeout;

  return (...args) => {
    var context = this;

    var later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

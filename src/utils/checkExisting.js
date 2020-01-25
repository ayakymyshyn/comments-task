// to avoid duplicates in "favorite comments" I've created these functions
const _checkExisting = (arr, id) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) return true;
  }
  return false;
};

// if there is not such element in array we call a callback
export const checkExistingAndCb = (arr, el, cb, args) => {
  !_checkExisting(arr, el) && cb(args);
};

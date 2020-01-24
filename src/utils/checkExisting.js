const _checkExisting = (arr, id) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) return true;
  }
  return false;
};

export const checkExistingAndCb = (arr, el, cb, args) => {
  !_checkExisting(arr, el) && cb(args);
};

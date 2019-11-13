// 存储sessionStorage
export const setSession = (key, value) => {
  if (key && value) {
    return window.sessionStorage.setItem(key, JSON.stringify(value));
  } else {
    return false;
  }
};
// 存储localStorage
export const setLocal = (key, value) => {
  if (key && value) {
    return window.localStorage.setItem(key, JSON.stringify(value));
  } else {
    return false;
  }
};
// 获取sessionStorage及localStorage
export const getStorage = key => {
  if (key && sessionStorage[key]) {
    return JSON.parse(sessionStorage[key]);
  } else if (key && localStorage[key]) {
    return JSON.parse(localStorage[key]);
  } else {
    return false;
  }
};
// 清除sessionStorage及localStorage
export const clearStorage = key => {
  if (key && sessionStorage[key]) {
    return window.sessionStorage.removeItem(key);
  } else if (key && localStorage[key]) {
    return window.localStorage.removeItem(key);
  } else {
    return false;
  }
};

//产生随机数
export const randomNum = (x, y) => {
  return parseInt(Math.random() * (x - y + 1) + y);
};

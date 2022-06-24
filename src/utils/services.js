export const replaceUrlParams = (url, params) => {
  let _url = url;
  if (!url) return "";
  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      _url = _url && _url.replace(`{${key}}`, params[key]);
    }
  }
  return _url || "";
};

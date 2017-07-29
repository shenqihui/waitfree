import fetch from 'dva/fetch';
import _ from 'lodash';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (200 <= response.status && 300 > response.status) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options = {}) {
  const newOptions = {
    ...options,
    headers: {
      ...options.headers || {},
      'Content-Type': _.get(options.headers, 'Content-Type') || 'application/json; charset=utf-8',
    },
  };

  return fetch(url, newOptions)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}

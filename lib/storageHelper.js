/* eslint-disable quotes */
import "client-only";

export function getLocalStorageByKey(key, defaultValue) {
  const stickyValue = localStorage.getItem(key);

  return stickyValue !== null && stickyValue !== "undefined"
    ? JSON.parse(stickyValue)
    : defaultValue;
}

export function setLocalStorageByKey(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

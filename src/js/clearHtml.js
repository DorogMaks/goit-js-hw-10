import { getRefs } from './getRefs.js';
const refs = getRefs();

export function clearList() {
  refs.list.innerHTML = '';
}

export function clearInfo() {
  refs.info.innerHTML = '';
}

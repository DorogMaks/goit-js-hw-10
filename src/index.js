import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';

import './css/styles.css';
import { fetchCountries } from './js/fetchCountries.js';
import { clearList, clearInfo } from './js/clearHtml.js';
import { renderList, renderInfo } from './js/renderHtml.js';

import { getRefs } from './js/getRefs.js';
const refs = getRefs();

const DEBOUNCE_DELAY = 300;

refs.searchBox.addEventListener(
  'input',
  debounce(onInputSearch, DEBOUNCE_DELAY)
);

function onInputSearch(evt) {
  const inputValue = evt.target.value.trim();
  if (!inputValue) {
    clearList();
    clearInfo();
    return;
  }
  fetchCountries(inputValue).then(onFetchSuccess).catch(onFetchError);
}

function onFetchSuccess(data) {
  clearList();
  clearInfo();

  if (data.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
  }
  if (data.length >= 2 && data.length <= 10) {
    renderList(data);
  }
  if (data.length === 1) {
    renderInfo(data);
  }
}

function onFetchError() {
  Notify.failure('Oops, there is no country with that name');
}

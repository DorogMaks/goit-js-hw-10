import { getRefs } from './getRefs.js';
const refs = getRefs();

export function renderList(countries) {
  const markup = countries
    .map(({ flags, name }) => {
      return `
    <li>
        <img
            src="${flags.svg}"
            alt="Flag of ${name.official}"
            width="30"
            height="20"
        />
        <p>${name.official}</p>
    </li>
      `;
    })
    .join('');
  refs.list.insertAdjacentHTML('beforeend', markup);
}

export function renderInfo(countries) {
  const markup = countries
    .map(({ name, capital, population, flags, languages }) => {
      return `
        <img
            src="${flags.svg}"
            alt="Flag of ${name.official}"
            width="30"
            height="20"
        />
        <h2 class="">${name.official}</h2>
        <ul class="">
            <li class="">
            <p class=""><span class="">Capital</span>: ${capital}</p>
            </li>
            <li class="">
            <p class=""><span class="">Population</span>: ${population}</p>
            </li>
            <li class="">
            <p class=""><span class="">Languages</span>: ${Object.values(
              languages
            )}</p>
            </li>
        </ul>
        `;
    })
    .join('');
  refs.info.insertAdjacentHTML('beforeend', markup);
}

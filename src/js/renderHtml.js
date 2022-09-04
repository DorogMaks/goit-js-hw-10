import { getRefs } from './getRefs.js';
const refs = getRefs();

export function renderList(countries) {
  const markup = countries
    .map(({ flags, name }) => {
      return `
    <li class="list-item">
        <img
            src="${flags.svg}"
            alt="Flag of ${name.official}"
            class="list-image"
            width="30"
            height="20"
        />
        <p class="list-text">${name.common}</p>
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
        <div class="info-name">
            <img
                src="${flags.svg}"
                alt="Flag of ${name.official}"
                class="info-image"
                width="60"
                height="40"
            />
            <h2 class="info-title">${name.official}</h2>
        </div>
        <ul class="info-list">
            <li class="info-item">
                <p class="info-text">
                  <span>Capital</span>: ${capital}
                </p>
            </li>
            <li class="info-item">
                <p class="info-text">
                  <span>Population</span>: ${population}
                </p>
            </li>
            <li class="info-item">
                <p class="info-text">
                  <span>Languages</span>: ${Object.values(languages)}
                </p>
            </li>
        </ul>
        `;
    })
    .join('');
  refs.info.insertAdjacentHTML('beforeend', markup);
}

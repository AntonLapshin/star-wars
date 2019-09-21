const URL = 'https://swapi.co/api/people/?search=';
export const pageSize = 10;

const extractData = response => {
  return {
    count: response.count,
    nextUrl: response.next,
    items: response.results
  };
};

const request = async url => {
  const json = await fetch(url).then(response => response.json());
  return extractData(json);
};

/**
 * Calls the Star Wars API to get the data by search pattern
 * @param {string} pattern
 * @returns {Promise<object>} The first page of the results
 */
export const search = pattern => request(URL + pattern);

/**
 * Gets the next page of the requested data
 * to get the next page
 *
 * @param {string} nextUrl
 * @returns {Promise<object>} The next page of the results
 */
export const loadMore = request;

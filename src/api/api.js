const API_URL = 'https://swapi.dev/api/';

export const get = async params => {
  const resp = await fetch(`${API_URL}${params}`);
  const json = await resp.json();

  return json;
};

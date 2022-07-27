const API_BASE = 'https://covid-api.mmediagroup.fr/v1/cases';

export const getCountries = async (continent) => {
  const response = await fetch(`${API_BASE}?continent=${continent}`);

  response.json();
};

export const getCountry = async (name) => {
  const response = await fetch(`${API_BASE}?country=${name}`);

  response.json();
};

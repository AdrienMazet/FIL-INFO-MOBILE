export const getSessions = async () => {
  const response = await fetch(
    "https://devfest-nantes-2018-api.cleverapps.io/sessions"
  );
  return response.json();
};

export const getSpeakers = async () => {
  const response = await fetch(
    "https://devfest-nantes-2018-api.cleverapps.io/speakers"
  );
  return response.json();
};

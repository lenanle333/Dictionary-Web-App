const API_BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";

export const fetchData = async (endpoint: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`);
    if (!response.ok) {
      return response.status;
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

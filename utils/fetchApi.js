import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

// headers: {
//   'x-rapidapi-host': 'bayut.p.rapidapi.com',
//   'x-rapidapi-key': '589d80e834msh81f84cdd476aa24p15d543jsna7cb4b367cdb'
// }

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
    },
  });

  return data;
};

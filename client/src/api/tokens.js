import axios from "./apiInstanse";

export const getTokens = async () => {
  return axios.get("/tokens").then(({ data }) => {
    return data.data.map(({ name, id, symbol }) => {
      return {
        name,
        id,
        symbol,
      };
    });
  });
};

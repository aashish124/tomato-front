// export const ROOT = "http://localhost:3000";
export const API_ROOT = "https://tomato-group-3.herokuapp.com";
// https://tomato-group-3.herokuapp.com/login

export const Apiurls = {
  rootUrl: () => `${API_ROOT}`,


  // Auth
  createUser: () => `${API_ROOT}/auth/signup`,
  login: () => `${API_ROOT}/login`,
  verifyUser: () => `${API_ROOT}/auth/verify-user`,


  // Home
  getHomeDetails: () => `${API_ROOT}/home`,

  // Restaurants
  getAllRestaurants: () => `${API_ROOT}/restaurants`,
  getSingleRestaurant: (id) => `${API_ROOT}/restaurant/${id}`,
};

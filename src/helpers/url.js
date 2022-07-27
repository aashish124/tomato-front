// export const ROOT = "http://localhost:3000";
export const API_ROOT = "http://localhost:9000/api";


export const Apiurls = {
  rootUrl: () => `${API_ROOT}`,



  // Restaurants
  getAllRestaurants: () => `${API_ROOT}/restaurants`,
  getSingleRestaurant: (id) => `${API_ROOT}/restaurant/${id}`,
};

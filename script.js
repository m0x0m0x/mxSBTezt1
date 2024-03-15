/**
 * This is for testing API Calls basically
 */

// import axios from "axios";
console.log("hello");

let config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "https://fr24api.flightradar24.com/api/airlines/afl",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer <token>",
  },
};

axios
  .request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });

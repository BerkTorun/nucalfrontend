const axios = require("axios");
const baseUrl = "http://localhost:5000/projects"


function getAll() {
  // Make a request for a user with a given ID
  axios
    .get(baseUrl)
    .then(function(response) {
      // handle success
      console.log(response.data);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .then(function() {
      // always executed
    });
}

function postTask(data) {
    // console.log(JSON.stringify(data));
    let id = data.id;
    delete data.id;
    data._id = id;
  axios
    .post(baseUrl, data)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(JSON.stringify(error));
    });
}



module.exports = {
    getAll: getAll,
    postTask: postTask,
  };

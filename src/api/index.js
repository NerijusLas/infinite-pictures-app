export const DRIBBBLE_ACCESS_TOKEN = "df0850f5aa9c779310e256750379975824fc3c9a312a9bd66db6ab9569631457";
export const DRIBBBLE_API_URL = "https://api.dribbble.com/v1";

const dribbbleApi = {
  fetchShots () {
    return (
        fetch(DRIBBBLE_API_URL + '/shots', {
        method  : 'GET',
        headers : {
            'Authorization': 'Bearer ' + DRIBBBLE_ACCESS_TOKEN,
        }
        })
        .then(statusHelper)
        .then(response => response.json())
        .catch(error => { throw new Error(error); })
        .then(data => {
            return data;
        })
    )
  }
}

function statusHelper (response) {
    console.log(response);
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.message))
  }
}

export default dribbbleApi;
export const apiURL = "http://localhost:38901";
// export const apiURL = "https://yge.wvi.mybluehost.me/test/early-warning-backend";
const _postApi = (url, data = {}, success = (f) => f, error = (f) => f) => {
  // const { facilityId, username } = store.getState().auth.user;
  // data.facilityId = facilityId;  
  // data.userId = username;
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((raw) => raw.json())
    .then((response) => {
      // console.log(response);
      if (response.status >= 400) {
        error(response);
      } else success(response);
    })
    .catch((err) => error(err));
};
export {
    _postApi
}
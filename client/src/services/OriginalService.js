const BASE_URL = 'http://localhost:3001';

const originalService = {};

// originalService.fetchEvents = () => {
//   return fetch(`${BASE_URL}/events`, {
//     method: 'GET',
//     credentials: 'include',
//     mode: 'cors',
//     headers: { 'Content-Type': 'application/json' },
//   })
//     .then((res) => res.json())
//     .catch((err) => console.log(err));
// };

// originalService.deleteEvent = (_id) => {
//   return fetch(`${BASE_URL}/events/${_id}`, {
//     method: 'DELETE',
//     credentials: 'include',
//     mode: 'cors',
//     headers: { 'Content-Type': 'application/json' },
//   })
//     .then((res) => res.json())
//     .catch((err) => console.log(err));
// };

// originalService.addEvent = (event) => {
//   return fetch(`${BASE_URL}/events`, {
//     method: 'POST',
//     credentials: 'include',
//     mode: 'cors',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(event),
//   })
//     .then((res) => res.json())
//     .catch((err) => console.log(err));
// };

// originalService.addRecord = (record) => {
//   return fetch(`${BASE_URL}/records`, {
//     method: 'POST',
//     credentials: 'include',
//     mode: 'cors',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(record),
//   })
//     .then((res) => res.json())
//     .catch((err) => console.log(err));
// };

// originalService.fetchLocation = (_id) => {
//   return fetch(`${BASE_URL}/locations/${_id}`, {
//     method: 'GET',
//     credentials: 'include',
//     mode: 'cors',
//     headers: { 'Content-Type': 'application/json' },
//   })
//     .then((res) => res.json())
//     .catch((err) => console.log(err));
// };

// originalService.addLocation = (location) => {
//   return fetch(`${BASE_URL}/locations`, {
//     method: 'POST',
//     credentials: 'include',
//     mode: 'cors',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(location),
//   })
//     .then((res) => res.json())
//     .catch((err) => console.log(err));
// };



export default originalService;
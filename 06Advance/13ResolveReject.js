const rejectMe = new Promise((_, reject) => reject("path issues"));
const resolveMe = new Promise((resolve) => resolve())

// Promise.any([rejectMe, resolveMe, resolveMe]) // race --> if one of the parameter is true then Accepted
// .then(() => console.log("Accepted"))
// .catch(e => console.log("Rejected"))


Promise.race([rejectMe, resolveMe, resolveMe]) // race --> if one of the parameter is false then rejected
.then(() => console.log("Handle Resolve"))
.catch(e => console.log("Rejected"))
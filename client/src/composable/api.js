const fetchurl = "http://localhost:3000/";
const option = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const authFetch = async (fnname, query) => {
  const res = await fetch(fetchurl + "auth", {
    ...option,
    body: JSON.stringify({ fn: fnname, query }),
  }).then((res) => res.json());
  return res;
};

const apiFetch = async (fnname, query) => {
  const res = await fetch(fetchurl + "api", {
    ...option,
    body: JSON.stringify({ fn: fnname, query }),
  }).then((res) => res.json());
  return res;
};

export default authFetch;

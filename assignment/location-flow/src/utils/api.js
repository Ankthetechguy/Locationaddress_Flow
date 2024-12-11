const BASE_URL = "http://localhost:5000/api";

export const addAddress = (address) =>
  fetch(`${BASE_URL}/address`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(address),
  });

export const getAddresses = () =>
  fetch(`${BASE_URL}/addresses`).then((res) => res.json());

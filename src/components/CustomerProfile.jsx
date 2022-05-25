import React, { useEffect, useState } from "react";

const CustomerProfile = ({ id }) => {
  const [customer, setCustomer] = useState({});
  const CUSTOMER_API = `https://cyf-react.glitch.me/customers/${id}`;

  useEffect(() => {
    fetch(CUSTOMER_API)
      .then(res => res.json())
      .then(json => setCustomer(json));
  }, [id]);

  return (
    <ul>
      <li>ID: {customer.id}</li>
      <li>Email: {customer.email}</li>
      <li>VIP: {customer.vip ? "yes" : "no"}</li>
      <li>Phone Number: {customer.phoneNumber}</li>
    </ul>
  );
};

export default CustomerProfile;

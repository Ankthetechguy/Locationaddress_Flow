import React, { useState } from "react";
import { addAddress } from "../utils/api";

const AddressForm = () => {
  const [formData, setFormData] = useState({ house: "", area: "" });

  const handleSubmit = () => {
    addAddress(formData).then(() => alert("Address saved!"));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="House"
        onChange={(e) => setFormData({ ...formData, house: e.target.value })}
      />
      <input
        type="text"
        placeholder="Area"
        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
      />
      <button onClick={handleSubmit}>Save Address</button>
    </div>
  );
};

export default AddressForm;

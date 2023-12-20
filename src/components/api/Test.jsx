import React, { useState } from "react";
import axios from "axios";

const Test = () => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // const payload = {
    //   name: itemName,
    //   price: itemPrice,
    // };
    const json_payload = { name: "terry", price: 10 };

    try {
      const response = await axios.post(
        "http://localhost:8000/items/",
        json_payload
      );

      // Handle the response as needed
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Item name"
        />
        <input
          type="number"
          value={itemPrice}
          onChange={(e) => setItemPrice(Number(e.target.value))}
          placeholder="Item price"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Test;

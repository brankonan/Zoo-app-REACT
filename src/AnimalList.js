import React, { useState } from "react";

function AnimalList() {
  const [items, setItems] = useState([
    {
      vrsta: "ptica",
      ime: "orao",
      datum: new Date().toLocaleDateString(),
    },
    {
      vrsta: "riba",
      ime: "pirana",
      datum: new Date().toLocaleDateString(),
    },
    {
      vrsta: "sisar",
      ime: "medved",
      datum: new Date().toLocaleDateString(),
    },
    {
      vrsta: "gmizavac",
      ime: "zmija",
      datum: new Date().toLocaleDateString(),
    },
    {
      vrsta: "vodozemac",
      ime: "dazdevnjak",
      datum: new Date().toLocaleDateString(),
    },
    {
      vrsta: "covek",
      ime: "covek",
      datum: null,
    },
  ]);
  const removeItem = (index) => {
    console.log("lakjdf", items.length);
    const newItems = [...items];
    newItems.slice();
    setItems(newItems);
    console.log(items.length);
  };
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.vrsta},{item.ime},{item.datum ? item.datum : "Nepoznat"}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnimalList;

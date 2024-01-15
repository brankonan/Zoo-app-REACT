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
    // console.log("lakjdf", items.length);
    const newItems = items.filter((item, i) => i !== index);
    // newItems.slice();
    setItems(newItems);
    // console.log(items.length);

    const moveToTop = (index) => {
        const 
    }
};
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Vrsta</th>
            <th>Ime</th>
            <th>Datum</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.vrsta}</td>
              <td>{item.ime}</td>
              <td>{item.datum ? item.datum : "Nepoznat"}</td>
              <td>
                <button onClick={() => removeItem(index)}>Remove</button>
              </td>
              <td>
                <button onClick={() => moveToTop(index)}>Move-To-Top</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AnimalList;

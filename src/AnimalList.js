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
  const [newAnimal, setNewAnimal] = useState({
    vrsta: "",
    ime: "",
    datum: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, newAnimal]);
  };

  const removeItem = (index) => {
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);
  };
  const moveToTop = (index) => {
    const movedItems = items.filter((item, i) => i !== index);
    const newItems = [items[index], ...movedItems];
    setItems(newItems);
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="vrsta">Vrsta</label>
          <input
            type="text"
            id="vrsta"
            name="vrsta"
            value={newAnimal.vrsta}
            onChange={(e) =>
              setNewAnimal({ ...newAnimal, vrsta: e.target.value })
            }
          />
          <label htmlFor="ime">Ime</label>
          <input
            type="text"
            id="ime"
            name="ime"
            value={newAnimal.ime}
            onChange={(e) =>
              setNewAnimal({ ...newAnimal, ime: e.target.value })
            }
          />
          <label htmlFor="datum">Datum</label>
          <input
            type="date"
            id="datum"
            name="datum"
            value={newAnimal.datum}
            onChange={(e) =>
              setNewAnimal({ ...newAnimal, datum: e.target.value })
            }
          />
          <button>Add-Animal</button>
        </form>
      </div>
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

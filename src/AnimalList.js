import React from "react";

function AnimalList() {
  const items = [
    {
      id: 1,
      vrsta: "ptica",
      ime: "orao",
      datum: new Date().toLocaleDateString(),
    },
    {
      id: 2,
      vrsta: "riba",
      ime: "pirana",
      datum: new Date().toLocaleDateString(),
    },
    {
      id: 3,
      vrsta: "sisar",
      ime: "medved",
      datum: new Date().toLocaleDateString(),
    },
    {
      id: 4,
      vrsta: "gmizavac",
      ime: "zmija",
      datum: new Date().toLocaleDateString(),
    },
    {
      id: 5,
      vrsta: "vodozemac",
      ime: "dazdevnjak",
      datum: new Date().toLocaleDateString(),
    },
    {
      id: 6,
      vrsta: "covek",
      ime: "covek",
      datum: null,
    },
  ];
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.vrsta},{item.ime},{item.datum ? item.datum : "Nepoznat"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnimalList;

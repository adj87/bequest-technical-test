import React, { useState } from "react";
import { Address, AddressBook } from "components/AddressBook";
import Topbar from "components/Topbar";

export const Home: React.FC = () => {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: 1,
      country: "Spain",
      line1: "Flat 23",
      line2: "Henry House",
      line3: "Ringers Road ",
      postcode: "Bromley",
      town: "Kent"
    },
    {
      id: 2,
      country: "Scotland",
      line1: "Flat 23",
      line2: "Henry House",
      line3: "Ringers Road ",
      postcode: "Bromley",
      town: "Kent"
    }
  ]);
  const [values, setValues] = useState({ address_book: "2" });

  console.log(values);
  return (
    <>
      <Topbar />
      <main className="m-auto max-w-2xl mt-12 p-2">
        <p className="text-3xl text-extra-bold mb-8 text-center">
          Technical test for Bequest
        </p>
        <AddressBook
          options={addresses}
          name="address_book"
          value={values.address_book}
          onChange={(name, value): void => setValues({ address_book: value })}
          onAdd={(a): void => setAddresses([...addresses, a])}
          onEdit={(a): void => {
            const newAddresses = addresses.map((el) => {
              if (el.id === a.id) return a;
              return el;
            });
            setAddresses(newAddresses);
          }}
          onDelete={(id): void => {
            const newAddresses = addresses.filter((el) => el.id !== id);
            setAddresses(newAddresses);
          }}
        />
      </main>
    </>
  );
};

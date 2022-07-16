import React, { useState } from "react";
import { Address, AddressBook } from "components/AddressBook";
import Topbar from "components/Topbar";

export const Home: React.FC = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [values, setValues] = useState({ address_book: "2" });
  console.log(addresses);

  console.log(values);
  return (
    <>
      <Topbar />
      <main className="m-auto max-w-2xl mt-12 p-4">
        <p className="text-3xl text-extra-bold mb-8 text-center">
          Technical test for Bequest
        </p>
        <AddressBook
          options={addresses}
          name="address_book"
          value={values.address_book}
          onChange={(name, value): void => setValues({ address_book: value })}
          onAddOrEdit={(a): void => {
            const isEdition = a.id;
            let newAddresses = [];
            if (isEdition) {
              newAddresses = addresses.map((el) => {
                if (el.id === a.id) return a;
                return el;
              });
            } else {
              // isAdd
              const ids = addresses.map((el) => el.id as number);
              const highestId = getHighestId(ids);
              newAddresses = [...addresses, { ...a, id: highestId + 1 }];
            }
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

const getHighestId = (ids: number[]): number =>
  ids.length === 0 ? 0 : Math.max(...ids);

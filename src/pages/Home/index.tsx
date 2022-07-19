import React, { useState } from "react";
import { Address, AddressBook, Topbar, Button } from "components";

export const Home: React.FC = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [addressId, setAddressId] = useState<string | null>(null);

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
          value={addressId}
          onChange={(_, value): void => setAddressId(value)}
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
              newAddresses = [...addresses, { ...a, id: highestId + 1 }]; // generate an increment id
            }
            setAddresses(newAddresses);
          }}
          onDelete={(id): void => {
            const newAddresses = addresses.filter((el) => el.id !== id);
            setAddresses(newAddresses);
          }}
        />
        <div className="flex justify-end">
          <Button text="Submit address" />
        </div>
      </main>
    </>
  );
};

const getHighestId = (ids: number[]): number =>
  ids.length === 0 ? 0 : Math.max(...ids);

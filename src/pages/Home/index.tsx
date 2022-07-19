import React, { useState } from "react";
import { Address, AddressBook, Topbar, Button, InputErrorMessage} from "components"; //prettier-ignore
import { useForm } from "./useForm";

export const Home: React.FC = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const { values, errors, setFieldValue, submitForm } = useForm(
    { address: null },
    addresses
  );

  return (
    <>
      <Topbar />
      <main className="m-auto max-w-2xl mt-12 p-4">
        <p className="text-3xl text-extra-bold mb-8 text-center">
          Technical test for Bequest
        </p>
        <AddressBook
          options={addresses}
          name="address"
          value={values.address}
          onChange={setFieldValue}
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
              const newAddress = { ...a, id: highestId + 1 }; // generate an increment id
              newAddresses = [...addresses, newAddress];
            }
            setAddresses(newAddresses);
          }}
          onDelete={(id): void => {
            const newAddresses = addresses.filter((el) => el.id !== id);
            setAddresses(newAddresses);
            if (values.address == id.toString()) {
              // if value to be deleted is the selected on in form, then set address to null
              setFieldValue("address", null);
            }
          }}
        />
        <InputErrorMessage text={errors.address} />
        <div className="flex justify-end">
          <Button text="Submit address" onClick={submitForm} />
        </div>
      </main>
    </>
  );
};

const getHighestId = (ids: number[]): number =>
  ids.length === 0 ? 0 : Math.max(...ids);

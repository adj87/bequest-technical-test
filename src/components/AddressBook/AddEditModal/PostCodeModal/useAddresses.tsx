import { useCallback, useEffect, useState } from "react";
import { Address } from "components/AddressBook";
import { debounce } from "utils";

interface HookResult {
  addresses: Address[];
  loading: boolean;
  error: string | null;
}

export const useAddresses = (postCode: string): HookResult => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const [addresses, setAddresses] = useState<Address[]>([]);

  const fetchAddresses = useCallback(
    debounce((postcode: string) => {
      fetch(url(postcode))
        .then((res) => res.json())
        .then((res) => {
          if (res.Message) throw new Error(res.Message); // force error when no result is found.
          return res;
        })
        .then((res) => {
          const { addresses } = res;
          const addressesMapped = addresses.map((address: any) => {
            const { line_1: line1, line_2: line2, line_3: line3, country,  town_or_city: town } = address; // prettier-ignore
            return { line1, line2, line3, country, postcode, town }; // prettier-ignore
          });
          setAddresses(addressesMapped);
        })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }, 500),
    []
  );

  useEffect((): void => {
    setError(null); // remove error whenever the user start to type
    if (!postCode) return; // if postCode is empty, stop
    setLoading(true); // to give a better use expirience, we set loading when start to type instead of inside debounce
    fetchAddresses(postCode);
  }, [postCode, fetchAddresses]);

  return { loading, addresses, error };
};

const url = (postCode: string): string =>
  `https://api.getAddress.io/find/${postCode}?api-key=e_MnyCEQpEu9vBY6K2_2CQ35933&expand=true`;

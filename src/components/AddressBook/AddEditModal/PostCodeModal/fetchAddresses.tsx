// I use this file only to mock data because of limitations of getaddress.io free subscription
// I've been commenting and uncommenting one or the other when needed

/* const url = (postCode: string): string =>
  `https://api.getAddress.io/find/${postCode}?api-key=e_MnyCEQpEu9vBY6K2_2CQ35933&expand=true`;

export const fetchAddresses = (postCode: string) =>
  fetch(url(postcode))
    .then((res) => res.json())
    .then((res) => {
      if (res.Message) throw new Error(res.Message); // force error when no result is found.
      return res;
    });
 */
export const fetchAddresses = (postcode: string) => {
  return new Promise((res, rej) => {
    // I do this to simulate errors when working with local data
    postcode === "asd" // KW1 4YT
      ? res(originalAddressesArray)
      : rej({ message: "This postCode is incorrect" });
  });
};

export const originalAddressesArray = {
  postcode: "KW1 4YT",
  latitude: 58.6356815,
  longitude: -3.0614963,
  addresses: [
    {
      formatted_address: [
        "1 Heatherbell Cottages",
        "",
        "",
        "John O' Groats, Wick",
        "Caithness"
      ],
      thoroughfare: "Heatherbell Cottages",
      building_name: "",
      sub_building_name: "",
      sub_building_number: "",
      building_number: "1",
      line_1: "1 Heatherbell Cottages",
      line_2: "",
      line_3: "",
      line_4: "",
      locality: "John O' Groats",
      town_or_city: "Wick",
      county: "Caithness",
      district: "Highland",
      country: "Scotland"
    },
    {
      formatted_address: [
        "10 Heatherbell Cottages",
        "",
        "",
        "John O' Groats, Wick",
        "Caithness"
      ],
      thoroughfare: "Heatherbell Cottages",
      building_name: "",
      sub_building_name: "",
      sub_building_number: "",
      building_number: "10",
      line_1: "10 Heatherbell Cottages",
      line_2: "",
      line_3: "",
      line_4: "",
      locality: "John O' Groats",
      town_or_city: "Wick",
      county: "Caithness",
      district: "Highland",
      country: "Scotland"
    },
    {
      formatted_address: [
        "11 Heatherbell Cottages",
        "",
        "",
        "John O' Groats, Wick",
        "Caithness"
      ],
      thoroughfare: "Heatherbell Cottages",
      building_name: "",
      sub_building_name: "",
      sub_building_number: "",
      building_number: "11",
      line_1: "11 Heatherbell Cottages",
      line_2: "",
      line_3: "",
      line_4: "",
      locality: "John O' Groats",
      town_or_city: "Wick",
      county: "Caithness",
      district: "Highland",
      country: "Scotland"
    },
    {
      formatted_address: [
        "12 Heatherbell Cottages",
        "",
        "",
        "John O' Groats, Wick",
        "Caithness"
      ],
      thoroughfare: "Heatherbell Cottages",
      building_name: "",
      sub_building_name: "",
      sub_building_number: "",
      building_number: "12",
      line_1: "12 Heatherbell Cottages",
      line_2: "",
      line_3: "",
      line_4: "",
      locality: "John O' Groats",
      town_or_city: "Wick",
      county: "Caithness",
      district: "Highland",
      country: "Scotland"
    },
    {
      formatted_address: [
        "13 Heatherbell Cottages",
        "",
        "",
        "John O' Groats, Wick",
        "Caithness"
      ],
      thoroughfare: "Heatherbell Cottages",
      building_name: "",
      sub_building_name: "",
      sub_building_number: "",
      building_number: "13",
      line_1: "13 Heatherbell Cottages",
      line_2: "",
      line_3: "",
      line_4: "",
      locality: "John O' Groats",
      town_or_city: "Wick",
      county: "Caithness",
      district: "Highland",
      country: "Scotland"
    },
    {
      formatted_address: [
        "14 Heatherbell Cottages",
        "",
        "",
        "John O' Groats, Wick",
        "Caithness"
      ],
      thoroughfare: "Heatherbell Cottages",
      building_name: "",
      sub_building_name: "",
      sub_building_number: "",
      building_number: "14",
      line_1: "14 Heatherbell Cottages",
      line_2: "",
      line_3: "",
      line_4: "",
      locality: "John O' Groats",
      town_or_city: "Wick",
      county: "Caithness",
      district: "Highland",
      country: "Scotland"
    },
    {
      formatted_address: [
        "15 Heatherbell Cottages",
        "",
        "",
        "John O' Groats, Wick",
        "Caithness"
      ],
      thoroughfare: "Heatherbell Cottages",
      building_name: "",
      sub_building_name: "",
      sub_building_number: "",
      building_number: "15",
      line_1: "15 Heatherbell Cottages",
      line_2: "",
      line_3: "",
      line_4: "",
      locality: "John O' Groats",
      town_or_city: "Wick",
      county: "Caithness",
      district: "Highland",
      country: "Scotland"
    },
    {
      formatted_address: [
        "16 Heatherbell Cottages",
        "",
        "",
        "John O' Groats, Wick",
        "Caithness"
      ],
      thoroughfare: "Heatherbell Cottages",
      building_name: "",
      sub_building_name: "",
      sub_building_number: "",
      building_number: "16",
      line_1: "16 Heatherbell Cottages",
      line_2: "",
      line_3: "",
      line_4: "",
      locality: "John O' Groats",
      town_or_city: "Wick",
      county: "Caithness",
      district: "Highland",
      country: "Scotland"
    },
    {
      formatted_address: [
        "2 Heatherbell Cottages",
        "",
        "",
        "John O' Groats, Wick",
        "Caithness"
      ],
      thoroughfare: "Heatherbell Cottages",
      building_name: "",
      sub_building_name: "",
      sub_building_number: "",
      building_number: "2",
      line_1: "2 Heatherbell Cottages",
      line_2: "",
      line_3: "",
      line_4: "",
      locality: "John O' Groats",
      town_or_city: "Wick",
      county: "Caithness",
      district: "Highland",
      country: "Scotland"
    },
    {
      formatted_address: [
        "3 Heatherbell Cottages",
        "",
        "",
        "John O' Groats, Wick",
        "Caithness"
      ],
      thoroughfare: "Heatherbell Cottages",
      building_name: "",
      sub_building_name: "",
      sub_building_number: "",
      building_number: "3",
      line_1: "3 Heatherbell Cottages",
      line_2: "",
      line_3: "",
      line_4: "",
      locality: "John O' Groats",
      town_or_city: "Wick",
      county: "Caithness",
      district: "Highland",
      country: "Scotland"
    },
    {
      formatted_address: [
        "4 Heatherbell Cottages",
        "",
        "",
        "John O' Groats, Wick",
        "Caithness"
      ],
      thoroughfare: "Heatherbell Cottages",
      building_name: "",
      sub_building_name: "",
      sub_building_number: "",
      building_number: "4",
      line_1: "4 Heatherbell Cottages",
      line_2: "",
      line_3: "",
      line_4: "",
      locality: "John O' Groats",
      town_or_city: "Wick",
      county: "Caithness",
      district: "Highland",
      country: "Scotland"
    },
    {
      formatted_address: [
        "5 Heatherbell Cottages",
        "",
        "",
        "John O' Groats, Wick",
        "Caithness"
      ],
      thoroughfare: "Heatherbell Cottages",
      building_name: "",
      sub_building_name: "",
      sub_building_number: "",
      building_number: "5",
      line_1: "5 Heatherbell Cottages",
      line_2: "",
      line_3: "",
      line_4: "",
      locality: "John O' Groats",
      town_or_city: "Wick",
      county: "Caithness",
      district: "Highland",
      country: "Scotland"
    },
    {
      formatted_address: [
        "6 Heatherbell Cottages",
        "",
        "",
        "John O' Groats, Wick",
        "Caithness"
      ],
      thoroughfare: "Heatherbell Cottages",
      building_name: "",
      sub_building_name: "",
      sub_building_number: "",
      building_number: "6",
      line_1: "6 Heatherbell Cottages",
      line_2: "",
      line_3: "",
      line_4: "",
      locality: "John O' Groats",
      town_or_city: "Wick",
      county: "Caithness",
      district: "Highland",
      country: "Scotland"
    },
    {
      formatted_address: [
        "7 Heatherbell Cottages",
        "",
        "",
        "John O' Groats, Wick",
        "Caithness"
      ],
      thoroughfare: "Heatherbell Cottages",
      building_name: "",
      sub_building_name: "",
      sub_building_number: "",
      building_number: "7",
      line_1: "7 Heatherbell Cottages",
      line_2: "",
      line_3: "",
      line_4: "",
      locality: "John O' Groats",
      town_or_city: "Wick",
      county: "Caithness",
      district: "Highland",
      country: "Scotland"
    },
    {
      formatted_address: [
        "8 Heatherbell Cottages",
        "",
        "",
        "John O' Groats, Wick",
        "Caithness"
      ],
      thoroughfare: "Heatherbell Cottages",
      building_name: "",
      sub_building_name: "",
      sub_building_number: "",
      building_number: "8",
      line_1: "8 Heatherbell Cottages",
      line_2: "",
      line_3: "",
      line_4: "",
      locality: "John O' Groats",
      town_or_city: "Wick",
      county: "Caithness",
      district: "Highland",
      country: "Scotland"
    },
    {
      formatted_address: [
        "9 Heatherbell Cottages",
        "",
        "",
        "John O' Groats, Wick",
        "Caithness"
      ],
      thoroughfare: "Heatherbell Cottages",
      building_name: "",
      sub_building_name: "",
      sub_building_number: "",
      building_number: "9",
      line_1: "9 Heatherbell Cottages",
      line_2: "",
      line_3: "",
      line_4: "",
      locality: "John O' Groats",
      town_or_city: "Wick",
      county: "Caithness",
      district: "Highland",
      country: "Scotland"
    },
    {
      formatted_address: [
        "Breck Cottages",
        "1",
        "",
        "John O' Groats, Wick",
        "Caithness"
      ],
      thoroughfare: "",
      building_name: "",
      sub_building_name: "Breck Cottages",
      sub_building_number: "",
      building_number: "1",
      line_1: "Breck Cottages",
      line_2: "1",
      line_3: "",
      line_4: "",
      locality: "John O' Groats",
      town_or_city: "Wick",
      county: "Caithness",
      district: "Highland",
      country: "Scotland"
    }
  ]
};

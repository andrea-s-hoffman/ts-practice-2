import Phone from "./models/Phone";

const detroitWarehouse: Phone[] = [
  {
    name: "iPhone SE",
    price: 399,
    fiveG: false,
  },
  {
    name: "iPhone XR",
    price: 499,
    fiveG: false,
  },
  {
    name: "iPhone 11",
    price: 599,
    fiveG: false,
  },
  {
    name: "iPhone 12 Mini",
    price: 729,
    fiveG: true,
  },
  {
    name: "iPhone 12",
    price: 829,
    fiveG: true,
  },
  {
    name: "iPhone 12 Pro",
    price: 999,
    fiveG: true,
  },
  {
    name: "iPhone 12 Max",
    price: 1099,
    fiveG: true,
  },
  {
    name: "Pixel 4a",
    price: 349,
    fiveG: false,
  },
  {
    name: "Pixel 5",
    price: 699,
    fiveG: true,
  },
];

export const newYorkWarehouse: Phone[] = [
  {
    name: "iPhone SE",
    price: 399,
    fiveG: false,
  },
  {
    name: "Pixel 5",
    price: 699,
    fiveG: true,
  },
  {
    name: "Pixel 4a 5G",
    price: 499,
    fiveG: true,
  },
  {
    name: "Pixel 4a 5G",
    price: 499,
    fiveG: true,
  },
  {
    name: "Pixel 4a 5G",
    price: 499,
    fiveG: true,
  },
  {
    name: "Pixel 4a",
    price: 349,
    fiveG: false,
  },
  {
    name: "Pixel 4a",
    price: 349,
    fiveG: false,
  },
  {
    name: "Galaxy S10",
    price: 750,
    fiveG: false,
  },
  {
    name: "Galaxy S10+",
    price: 1500,
    fiveG: true,
  },
];

const chicagoWarehouse: Phone[] = [
  {
    name: "Galaxy S10",
    price: 750,
    fiveG: false,
  },
  {
    name: "Galaxy S10+",
    price: 1500,
    fiveG: true,
  },
  {
    name: "Galaxy S10+",
    price: 1500,
    fiveG: true,
  },
  {
    name: "Galaxy S10+",
    price: 1500,
    fiveG: true,
  },
  {
    name: "iPhone 12",
    price: 829,
    fiveG: true,
  },
  {
    name: "iPhone 12 Pro",
    price: 999,
    fiveG: true,
  },
  {
    name: "iPhone 12 Max",
    price: 1099,
    fiveG: true,
  },
  {
    name: "Pixel 4a",
    price: 349,
    fiveG: false,
  },
  {
    name: "Pixel 5",
    price: 699,
    fiveG: true,
  },
];

const no5GWarehouse: Phone[] = [
  {
    name: "Galaxy S10",
    price: 750,
    fiveG: false,
  },
  {
    name: "Pixel 4a",
    price: 349,
    fiveG: false,
  },
  {
    name: "Pixel 5",
    price: 699,
    fiveG: false,
  },
];

const addPhone = (array: Phone[], phone: Phone): void => {
  array.push(phone);
  console.log(array);
};

const newPhone: Phone = {
  name: "new Phone",
  price: 100,
  fiveG: false,
};

// console.log(addPhone(detroitWarehouse, newPhone));

const deletePhoneByIndex = (array: Phone[], index: number): void => {
  array.splice(index, 1);
  console.log(array);
};

// deletePhoneByIndex(detroitWarehouse, 0);

const deletePhoneByName = (array: Phone[], name: string): void => {
  const index = array.findIndex((phone) => {
    return phone.name === name;
  });
  array.splice(index, 1);
  console.log(array);
};

// deletePhoneByName(detroitWarehouse, "iPhone XR");

const filter5G = (array: Phone[]): Phone[] => {
  let newArray: Phone[] = [];
  array.forEach((phone: Phone) => {
    if (phone.fiveG) {
      newArray.push(phone);
    }
  });
  return newArray;
};

// console.log(filter5G(detroitWarehouse));

const filterPriceLessThan = (array: Phone[], price: number): Phone[] => {
  let newArray: Phone[] = [];
  array.forEach((phone: Phone) => {
    if (phone.price < price) {
      newArray.push(phone);
    }
  });
  return newArray;
};

// console.log(filterPriceLessThan(detroitWarehouse, 800));

const filterPriceGreaterThan = (array: Phone[], price: number): Phone[] => {
  let newArray: Phone[] = [];
  array.forEach((phone: Phone): void => {
    if (phone.price > price) {
      newArray.push(phone);
    }
  });
  return newArray;
};

// console.log(filterPriceGreaterThan(detroitWarehouse, 800));

const findPhoneByName = (array: Phone[], name: string): Phone | undefined => {
  return array.find((phone: Phone) => {
    return phone.name === name;
  });
};

// console.log(findPhoneByName(detroitWarehouse, "iPhone XR"));

const calcAverageCost = (array: Phone[]): number => {
  let sum: number = 0;
  array.forEach((phone: Phone) => {
    sum += phone.price;
  });
  return sum / array.length;
};

// console.log(calcAverageCost(newYorkWarehouse));

const doWeHaveA5GPhone = (array: Phone[]) => {
  return array.some((phone: Phone) => {
    return phone.fiveG === true;
  });
};

// console.log(
//   doWeHaveA5GPhone(newYorkWarehouse),
//   doWeHaveA5GPhone(no5GWarehouse)
// );

const phoneFlashSale = (array: Phone[], discount: number): Phone[] => {
  let newArray: Phone[] = [];
  array.forEach((phone: Phone) => {
    let discountedPrice: number = (phone.price * discount) / 100;
    let newPhone: Phone = {
      ...phone,
      discountedPrice,
    };
    newArray.push(newPhone);
  });
  return newArray;
};

// console.log(phoneFlashSale(detroitWarehouse, 50));

const phoneFlashSaleV2 = (
  array: Phone[],
  discount: number,
  names: string[]
): Phone[] => {
  let newArray: Phone[] = [];
  array.forEach((phone: Phone) => {
    if (names.includes(phone.name)) {
      let discountedPrice: number = (phone.price * discount) / 100;
      let newPhone: Phone = {
        ...phone,
        discountedPrice,
      };
      newArray.push(newPhone);
    } else {
      newArray.push(phone);
    }
  });
  return newArray;
};

const discountedPhoneNames = ["iPhone XR", "iPhone 11", "iPhone 12 Pro"];

// console.log(phoneFlashSaleV2(detroitWarehouse, 50, discountedPhoneNames));

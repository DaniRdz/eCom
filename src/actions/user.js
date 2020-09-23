import { SET_USER_PURCHASES, SET_PURCHASE_DETAIL } from "./types";

export function setPurchaseDetail(id) {
  return {
    type: SET_PURCHASE_DETAIL,
    payload: id,
  };
}

export function fetchUserPurchases() {
  return {
    type: SET_USER_PURCHASES,
    payload: [
      {
        id: 0,
        amount: 8.02,
        orderNumber: "A0048248343",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        id: 1,
        amount: 9.02,
        orderNumber: "A0048248343",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        id: 2,
        amount: 7.02,
        orderNumber: "A0048248343",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        id: 3,
        amount: 12.02,
        orderNumber: "A0048248343",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        id: 4,
        amount: 4.02,
        orderNumber: "A0048248343",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        id: 5,
        amount: 15.02,
        orderNumber: "A0048248343",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        id: 6,
        amount: 56.02,
        orderNumber: "A0048248343",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        id: 7,
        amount: 12.02,
        orderNumber: "A0048248343",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State Street",
        },
      },
    ],
  };
}

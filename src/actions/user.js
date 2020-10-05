import {
  SET_USER_PURCHASES,
  SET_PURCHASE_DETAIL,
  SET_CART_PRODUCTS,
} from "./types";

export function setPurchaseDetail(id) {
  return {
    type: SET_PURCHASE_DETAIL,
    payload: id,
  };
}

export function setCartProducts() {
  return {
    type: SET_CART_PRODUCTS,
    payload: [
      {
        id: 0,
        product: {
          id: 0,
          title: "JavaScript in the Browser",
          description:
            "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.",
          price: 1.99,
          belongsTo: [0, 1],
        },
        quantity: 2,
      },
      {
        id: 1,
        product: {
          id: 1,
          title: "Graph Database",
          description:
            "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.",
          price: 1.99,
          belongsTo: [0, 6],
        },
        quantity: 1,
      },
    ],
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

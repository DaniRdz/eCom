import {
  SET_SHOP_CATEGORIES,
  SET_NAVBAR_LINKS,
  SET_SHOP_PRODUCTS,
  FILTER_PRODUCTS_WITH_CATEGORY_ID,
} from "./types";

export function filterProductsWithCategoryId(id) {
  return {
    type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
    payload: id,
  };
}

export function fetchShopCategories() {
  return {
    type: SET_SHOP_CATEGORIES,
    payload: [
      { id: 0, title: "All" },
      { id: 1, title: "JavaScript" },
      { id: 2, title: "UI/UX" },
      { id: 3, title: "Linux" },
      { id: 4, title: "Python" },
      { id: 5, title: "UML" },
      { id: 6, title: "Ruby" },
    ],
  };
}

export function fetchShopProducts() {
  return {
    type: SET_SHOP_PRODUCTS,
    payload: [
      {
        id: 0,
        title: "JavaScript in the Browser",
        description:
          "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.",
        price: 1.99,
        belongsTo: [0, 1],
      },
      {
        id: 1,
        title: "Graph Database",
        description:
          "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.",
        price: 1.99,
        belongsTo: [0, 6],
      },
      {
        id: 2,
        title: "Full Stack Development",
        description:
          "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.",
        price: 1.99,
        belongsTo: [0, 1, 4],
      },
      {
        id: 3,
        title: "User Interface Design",
        description:
          "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.",
        price: 1.99,
        belongsTo: [0, 2],
      },
      {
        id: 4,
        title: "JavaScript Development",
        description:
          "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.",
        price: 1.99,
        belongsTo: [0, 1],
      },
      {
        id: 5,
        title: "User Experience Design",
        description:
          "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.",
        price: 1.99,
        belongsTo: [0, 2],
      },
      {
        id: 6,
        title: "Advanced OOP",
        description:
          "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.",
        price: 1.99,
        belongsTo: [0, 6],
      },
    ],
  };
}

import waffleThumbnail from "../assets/images/image-waffle-thumbnail.jpg";
import waffleDesktop from "../assets/images/image-waffle-desktop.jpg";
import waffleTablet from "../assets/images/image-waffle-tablet.jpg";
import waffleMobile from "../assets/images/image-waffle-mobile.jpg";

import cremeThumbnail from "../assets/images/image-creme-brulee-thumbnail.jpg";
import cremeDesktop from "../assets/images/image-creme-brulee-desktop.jpg";
import cremeTablet from "../assets/images/image-creme-brulee-tablet.jpg";
import cremeMobile from "../assets/images/image-creme-brulee-mobile.jpg";

import macaronThumbnail from "../assets/images/image-macaron-thumbnail.jpg";
import macaronDesktop from "../assets/images/image-macaron-desktop.jpg";
import macaronTablet from "../assets/images/image-macaron-tablet.jpg";
import macaronMobile from "../assets/images/image-macaron-mobile.jpg";

import tiramisuThumbnail from "../assets/images/image-tiramisu-thumbnail.jpg";
import tiramisuDesktop from "../assets/images/image-tiramisu-desktop.jpg";
import tiramisuTablet from "../assets/images/image-tiramisu-tablet.jpg";
import tiramisuMobile from "../assets/images/image-tiramisu-mobile.jpg";

import baklavaThumbnail from "../assets/images/image-baklava-thumbnail.jpg";
import baklavaDesktop from "../assets/images/image-baklava-desktop.jpg";
import baklavaTablet from "../assets/images/image-baklava-tablet.jpg";
import baklavaMobile from "../assets/images/image-baklava-mobile.jpg";

import meringueThumbnail from "../assets/images/image-meringue-thumbnail.jpg";
import meringueDesktop from "../assets/images/image-meringue-desktop.jpg";
import meringueTablet from "../assets/images/image-meringue-tablet.jpg";
import meringueMobile from "../assets/images/image-meringue-mobile.jpg";

import cakeThumbnail from "../assets/images/image-cake-thumbnail.jpg";
import cakeDesktop from "../assets/images/image-cake-desktop.jpg";
import cakeTablet from "../assets/images/image-cake-tablet.jpg";
import cakeMobile from "../assets/images/image-cake-mobile.jpg";

import brownieThumbnail from "../assets/images/image-brownie-thumbnail.jpg";
import brownieDesktop from "../assets/images/image-brownie-desktop.jpg";
import brownieTablet from "../assets/images/image-brownie-tablet.jpg";
import brownieMobile from "../assets/images/image-brownie-mobile.jpg";

import pannaCottaThumbnail from "../assets/images/image-panna-cotta-thumbnail.jpg";
import pannaCottaDesktop from "../assets/images/image-panna-cotta-desktop.jpg";
import pannaCottaTablet from "../assets/images/image-panna-cotta-tablet.jpg";
import pannaCottaMobile from "../assets/images/image-panna-cotta-mobile.jpg";

const products = [
  {
    id: "d1",
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
    images: {
      thumbnail: waffleThumbnail,
      desktop: waffleDesktop,
      tablet: waffleTablet,
      mobile: waffleMobile,
    },
  },
  {
    id: "d2",
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
    images: {
      thumbnail: cremeThumbnail,
      desktop: cremeDesktop,
      tablet: cremeTablet,
      mobile: cremeMobile,
    },
  },
  {
    id: "d3",
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
    images: {
      thumbnail: macaronThumbnail,
      desktop: macaronDesktop,
      tablet: macaronTablet,
      mobile: macaronMobile,
    },
  },
  {
    id: "d4",
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
    images: {
      thumbnail: tiramisuThumbnail,
      desktop: tiramisuDesktop,
      tablet: tiramisuTablet,
      mobile: tiramisuMobile,
    },
  },
  {
    id: "d5",
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
    images: {
      thumbnail: baklavaThumbnail,
      desktop: baklavaDesktop,
      tablet: baklavaTablet,
      mobile: baklavaMobile,
    },
  },
  {
    id: "d6",
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
    images: {
      thumbnail: meringueThumbnail,
      desktop: meringueDesktop,
      tablet: meringueTablet,
      mobile: meringueMobile,
    },
  },
  {
    id: "d7",
    name: "Strawberry Cake",
    category: "Cake",
    price: 6.0,
    images: {
      thumbnail: cakeThumbnail,
      desktop: cakeDesktop,
      tablet: cakeTablet,
      mobile: cakeMobile,
    },
  },
  {
    id: "d8",
    name: "Chocolate Brownie",
    category: "Brownie",
    price: 4.5,
    images: {
      thumbnail: brownieThumbnail,
      desktop: brownieDesktop,
      tablet: brownieTablet,
      mobile: brownieMobile,
    },
  },
  {
    id: "d9",
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
    images: {
      thumbnail: pannaCottaThumbnail,
      desktop: pannaCottaDesktop,
      tablet: pannaCottaTablet,
      mobile: pannaCottaMobile,
    },
  },
];

export default products;
// function handleAddItemToCart(id) {
//     setShoppingCart((prevShoppingCart) => {
//       const updatedItems = [...prevShoppingCart.items];

//       const existingCartItemIndex = updatedItems.findIndex(
//         (cartItem) => cartItem.id === id
//       );
//       const existingCartItem = updatedItems[existingCartItemIndex];

//       if (existingCartItem) {
//         const updatedItem = {
//           ...existingCartItem,
//           quantity: existingCartItem.quantity + 1,
//         };
//         updatedItems[existingCartItemIndex] = updatedItem;
//       } else {
//         const product = DUMMY_PRODUCTS.find((product) => product.id === id);
//         updatedItems.push({
//           id: id,
//           name: product.title,
//           price: product.price,
//           quantity: 1,
//         });
//       }

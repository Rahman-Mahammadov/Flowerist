import NavBar from "./NavBar";
import Header from "./Header.jsx";
import Button from "./Button.jsx";
import Delivery from "./Delivery.jsx";
import FlowerCard from "./FlowerCard.jsx";
import FlowersList from "./FlowersList.jsx";
import Collection from "./Collection.jsx";
import CollectionsList from "./CollectionsList.jsx";
import WhyUs from "./WhyUs.jsx";
import WhyUsList from "./WhyUsList.jsx";
import Subscribe from "./Subscribe.jsx";
import AccordionBasicExample from "./Accordion.jsx";
import Blog from "./Blog.jsx";
import BlogList from "./BlogList.jsx";
import Address from "./Address.jsx";
import Footer from "./Footer.jsx";
import ProductsOnSale from "./ProductsonSale.jsx";
import SignIn from "./Auth/SignIn.jsx";
import SearchModal from "./SearchModal.jsx";
import Login from "./Auth/Login.jsx";
export {
  NavBar,
  Header,
  Button,
  Delivery,
  FlowerCard,
  FlowersList,
  Collection,
  CollectionsList,
  WhyUs,
  WhyUsList,
  Subscribe,
  AccordionBasicExample,
  Blog,
  BlogList,
  Address,
  Footer,
  ProductsOnSale,
  SearchModal,
  SignIn,
  Login,
};



  export const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
import Components from "views/Components/Components.jsx";
import MyLandingPage from "views/LandingPage/LandingPage.jsx";

var indexRoutes = [
  { path: "/components", name: "Components", component: Components },
  { path: "/", name: "LandingPage", component: MyLandingPage }
];

export default indexRoutes;
import Home from "../components/Home";
import RQSuperHeroesPage from "../components/RQSuperHeroesPage";
import SuperHeroes from "../components/SuperHeroes";
import SuperHero from "../components/SuperHero";

const Routes = [

  {
    path: "/",
    element: <Home />,

  },
  {
    path: "/super-heroes",
    element: <SuperHeroes />,

  },
  {
    path: "/rq-super-heroes",
    element: <RQSuperHeroesPage />,

  },
  {
    path: "/rq-super-heroes/:heroId",
    element: <SuperHero />,

  },

]
export default Routes;
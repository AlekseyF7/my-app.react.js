import {getGamesByCategory} from "./data/data-utils.js";
import { Banner } from "./components/Banner/Banner";
import { CardList } from "./components/CardsList/CardList";
import { Promo } from "./components/Promo/Promo";


import Image from "next/image";
import Styles from "./page.module.css";

export default function Home() {
  const popularGames = getGamesByCategory("popular");
  const newGames = getGamesByCategory("new");
  return (
    <main className="main">
      <Banner/>
      <CardList id="popular" title="Популярные" data={popularGames}/>
      <CardList id="new" title="Новинки" data={newGames}/>
      <Promo/>
    </main>
  );
}

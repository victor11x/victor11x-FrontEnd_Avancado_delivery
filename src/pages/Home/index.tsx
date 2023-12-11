import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { Link } from "react-router-dom";

import { Heading, Hero, HeroContent, Aside } from "./styles";

export function Home() {
  const theme = useTheme();

  return (
    <div>
      <Hero>
        <HeroContent></HeroContent>
        <HeroContent></HeroContent>
        <HeroContent></HeroContent>
        <img src="/images/Capa_donuts_menina.jpg" id="hero-bg" alt="" />
      </Hero>
      <Hero>
        <HeroContent>
          <div>
            <Heading>
              <h1>Nós adoramos Donuts e saboroso Café, SIMPLESMENTE!!</h1>

              <h4>
                O Sabor Celestial é mestre nesses deliciosos doces americanos e
                café gourmet que conquista diversos público os jovens, adultos e
                criança.
              </h4>
            </Heading>

            <Aside>
              <Link to="/Sobre">
                <a>Quem Somos</a>
              </Link>
            </Aside>
          </div>

          <img src="/images/foto_capa.jpg" alt="Sabor Celestial Delivery" />
        </HeroContent>

        {/* <img src="/images/background.svg" id="hero-bg" alt="" /> */}
      </Hero>
      <Hero>
        <HeroContent>
          <div>
            <Heading>
              <h1>Festa & Eventos</h1>

              <span>
                Contrata nossos produtos para seu evento ficar muito delicioso e
                colorido.
              </span>
              <span>
                Já penso conquistar seu público com essas delicias e cafezinho?
                Então consulte nossos especialista.
              </span>
              <h3>Email:saborcelestial@email.com</h3>
            </Heading>
          </div>

          <img src="/images/evetns-bg.svg" alt="Eventos" />
        </HeroContent>

        <img src="/images/background.svg" id="hero-bg" alt="" />
      </Hero>
    </div>
  );
}

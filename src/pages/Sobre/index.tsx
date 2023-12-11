import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { CoffeeList, Heading, Hero, HeroContent } from "./styles";

export function Sobre() {
  const theme = useTheme();

  return (
    <div>
      <Hero>
        <HeroContent>
          <div>
            <Heading>
              <h1>Quem Somos?</h1>

              <span>
                Bem-vindo à Sabor Celestial, onde paixão e sabor se encontram
                para criar experiências únicas. Nossa jornada começou com a
                visão de compartilhar a autenticidade e a riqueza de sabores que
                o café pode oferecer, combinada com a indulgência irresistível
                dos donuts frescos e saborosos. Desde então, temos nos dedicado
                a cultivar uma cultura que celebra a alegria, a comunidade e o
                prazer de saborear cada gole e mordida. Acreditamos que um
                excelente café não é apenas uma bebida, mas uma narrativa rica
                que se desenrola em cada xícara. Por isso, selecionamos
                cuidadosamente os melhores grãos de café de origens premium,
                garantindo uma experiência sensorial que vai além do simples ato
                de beber
              </span>
            </Heading>
          </div>

          <img src="/images/donets-somos.svg" alt="Sabor Celestial Delivery" />
        </HeroContent>

        <img src="/images/background.svg" id="hero-bg" alt="" />
      </Hero>
    </div>
  );
}

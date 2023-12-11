import {
  Coffee,
  Package,
  ShoppingCart,
  Timer,
  ChartDonut,
} from "@phosphor-icons/react";
import { useTheme } from "styled-components";

import { Card } from "../../components/Card";

import { coffees } from "../../../data.json";
import { CoffeeList, Heading, Hero, HeroContent, Info } from "./styles";

export function Donuts() {
  const theme = useTheme();

  return (
    <div>
      <Hero>
        <HeroContent>
          <div>
            <Heading>
              <h1>Encontre o Donuts delicioso para todo momento</h1>

              <span>
                Com o Sabor Celestial Delivery você recebe seu Donuts onde
                estiver, a qualquer hora
              </span>
            </Heading>

            <Info>
              <div>
                <ShoppingCart
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors["yellow-dark"] }}
                />
                <span>Compra simples e segura</span>
              </div>

              <div>
                <Package
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors["base-text"] }}
                />
                <span>Embalagem mantém intacto</span>
              </div>

              <div>
                <Timer
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors.yellow }}
                />
                <span>Entrega rápida e rastreada</span>
              </div>

              <div>
                <ChartDonut
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors["purple-bg"] }}
                />
                <span>O Donuts chega delicioso até você</span>
              </div>
            </Info>
          </div>

          <img src="/images/donets-bg.svg" alt="Sabor Celestial Delivery" />
        </HeroContent>

        <img src="/images/background.svg" id="hero-bg" alt="" />
      </Hero>

      {/* <CoffeeList>
        <h2>Nossos Donuts</h2>

        <div>
          {coffees.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </CoffeeList> */}

      <CoffeeList>
        <h2>Nossos Donuts</h2>

        <div>
          {coffees
            .filter((coffee) => parseInt(coffee.id) >= 20) // Filtra os itens com ID maior ou igual a 5
            .map((coffee) => (
              <Card key={coffee.id} coffee={coffee} />
            ))}
        </div>
      </CoffeeList>
    </div>
  );
}

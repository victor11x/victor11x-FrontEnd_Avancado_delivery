import { ShoppingCart } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

import { useCart } from "../../hooks/useCart";
import { Box, Aside, Container } from "./styles";

export function Header() {
  const { cart } = useCart();

  return (
    <Container>
      <Link to="/">
        <img src="/logo.svg" alt="Sabor Celestial" />
      </Link>

      <Box>
        <Link to={`Home`}>
          <div>
            <a>Home</a>
          </div>
        </Link>

        <Link to={`Donuts`}>
          <div>
            <a>Donuts</a>
          </div>
        </Link>

        <Link to={`Cafe`}>
          <div>
            <a>Cafe</a>
          </div>
        </Link>

        <Link to={`Sobre`}>
          <div>
            <a>Sobre</a>
          </div>
        </Link>
      </Box>

      <Aside>
        <Link to={`cart`} aria-disabled={cart.length === 0}>
          <ShoppingCart size={22} weight="fill" />
          {cart.length > 0 ? <span>{cart.length}</span> : null}
        </Link>
      </Aside>
    </Container>
  );
}

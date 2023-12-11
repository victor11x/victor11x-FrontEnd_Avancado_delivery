import styled from "styled-components";

import { mixins } from "../../styles/mixins";

export const Hero = styled.section`
  position: relative;

  img#hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 555px;
    width: 100vw;
    gap: 10px;
    object-fit: cover;
  }
`;

export const HeroContent = styled.div`
  max-width: 1160px;
  padding: 92px 20px;
  margin: 0 auto;

  display: flex;
  gap: 80px;
  align-items: flex-start;
  justify-content: space-between;

  > div {
    top: 0;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  right: 50%;
  gap: 16px;

  > h1 {
    ${mixins.fonts.titleXL}

    color: ${({ theme }) => theme.colors["base-title"]};
  }

  > span {
    ${mixins.fonts.textL}
    color: ${({ theme }) => theme.colors["base-subtitle"]}
  }
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      padding: 8px;
      border-radius: 999px;
    }
  }
`;

export const Aside = styled.aside`
  display: flex;

  a {
    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: ${({ theme }) => theme.colors["dark-orange"]};
    color: ${({ theme }) => theme.colors["white"]};

    padding: 8px 12px;
    width: 201px;

    border-radius: 6px;

    position: relative;

    &[aria-disabled="true"] { 
      pointer-events: none;
    }
    }
  }
`;

export const CoffeeList = styled.section`
  max-width: 1160px;
  padding: 32px 20px 150px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 54px;

  > h2 {
    ${mixins.fonts.titleL}
    color: ${({ theme }) => theme.colors["base-subtitle"]}
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 0px;
    grid-column-gap: 32px;
  }
`;

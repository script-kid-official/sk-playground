import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  position: relative;
  height: auto;
  background-position: center center;
  margin-bottom: 2rem;
  background-image: linear-gradient(
    to bottom right,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.719)
  );
  padding: 0rem;

  @media screen and (max-width: 43.75rem) {
    height: 100%;
    font-size: 1.6rem;
  }
`;

const Banner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  gap: 1.5rem;
  text-align: center;
  overflow: hidden;
  height: 100%;
  width: 100%;
  padding: 0;
  position: relative;
  transition: all 0.3s linear;

  @media screen and (max-width: 43.75rem) {
    grid-template-columns: repeat(1, 1fr);
    transform: translate(0%);
    gap: 1rem;
  }

  & .left {
    background-image: url(https://source.unsplash.com/random);
    background-size: cover;
    height: 100%;
    width: 100%;
    transform: translateX(100%);
    background-position: center center;
    background-color: rgba(0, 0, 0, 0.9);
    transition: inherit;

    @media screen and (max-width: 43.75rem) {
      grid-template-columns: repeat(1, 1fr);
      transform: translate(0%);
      gap: 1rem;
    }
  }

  & .text {
    font-size: 2rem;
    grid-column: 1 / -1;

    @media screen and (max-width: 43.75rem) {
      font-size: 1.4rem;
    }
  }

  & .right {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    text-align: left;
    padding: 2vh 4vw;

    @media screen and (max-width: 43.75rem) {
      grid-row: 1 / -1;
      padding: 4rem;
    }
  }

  & .extra-text {
    font-size: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    grid-column: 1 / -1;
    gap: 2.4rem;
  }

  &:hover > .left {
    transform: translateX(0%);
  }
`;
export default function Banner7() {
  return (
    <Wrapper>
      <Banner>
        <div class="left"></div>
        <div class="right">
          <h2 class="sub-title">Banner 7</h2>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            aperiam nemo sunt dolorum adipisci magnam. Ea inventore veritatis
            ullam doloribus non, voluptatem minima quia quasi, sunt, molestias
            perferendis itaque dolorem?
          </p>
          <div class="extra-text">
            <div>
              <h5>Lorem ipsum dolor</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti aperiam nemo sunt dolorum adipisci magnam. Ea inventore
                veritatis ullam doloribus non, voluptatem minima
              </p>
            </div>
            <div>
              <h5>Lorem ipsum dolor</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti aperiam nemo sunt dolorum adipisci magnam. Ea inventore
                veritatis ullam doloribus non, voluptatem minima
              </p>
            </div>
          </div>
        </div>
      </Banner>
    </Wrapper>
  );
}

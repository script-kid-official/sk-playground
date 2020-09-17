import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  position: relative;
  height: 30vh;
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
  grid-auto-rows: 1fr;
  place-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  gap: 1.5rem;
  text-align: center;
  overflow: hidden;
  height: 100%;
  width: 100%;
  padding: 0;
  position: relative;

  @media screen and (max-width: 43.75rem) {
    grid-template-columns: repeat(1, 1fr);
    gap: 0rem;
    width: 100%;
  }

  & .left {
    display: grid;
    gap: 1.5rem;
    padding: 4rem;
  }

  & .right {
    background-image: url(https://source.unsplash.com/random);
    background-size: cover;
    height: 100%;
    width: 100%;
    background-position: center center;

    @media screen and (max-width: 43.75rem) {
      height: 25vh;
    }
  }
`;
export default function Banner5() {
  return (
    <Wrapper>
      <Banner>
        <div class="left">
          <h2>Banner 5</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            aperiam nemo sunt dolorum adipisci magnam. Ea inventore veritatis
            ullam doloribus non, voluptatem minima quia quasi, sunt, molestias
            perferendis itaque dolorem?
          </p>
        </div>
        <div class="right"></div>
      </Banner>
    </Wrapper>
  );
}

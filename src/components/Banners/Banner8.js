import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  position: relative;
  height: 30vh;
  background-position: center center;
  background-image: url(https://source.unsplash.com/random);
  background-size: cover;
  transform: skewY(-2deg);
  margin: 5vh 0;

  @media screen and (max-width: 43.75rem) {
    height: 100%;
    font-size: 1.6rem;
  }
`;

const Banner = styled.div`
  display: grid;
  place-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.8);
  padding: 2vh 2vw;
  gap: 1.5rem;
  text-align: center;
  width: 50vw;
  overflow: hidden;
  transform: skewY(2deg) translate(-50%, -50%);

  @media screen and (max-width: 43.75rem) {
    grid-template-columns: repeat(1, 1fr);
    position: relative;
    transform: translate(0);
    gap: 1rem;
    width: 90vw;
    top: 0%;
    left: 0%;
  }
`;
export default function Banner8() {
  return (
    <Wrapper>
      <Banner>
        <h2 class="sub-title">Banner 8</h2>
        <p class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          aperiam nemo sunt dolorum adipisci magnam. Ea inventore veritatis
          ullam doloribus non, voluptatem minima quia quasi, sunt, molestias
          perferendis itaque dolorem?
        </p>
      </Banner>
    </Wrapper>
  );
}

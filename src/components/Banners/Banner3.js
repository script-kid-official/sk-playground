import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  position: relative;
  height: 30vh;
  background-position: center center;
  margin-bottom: 2rem;
  background-image: url(https://source.unsplash.com/random);
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);

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

  @media screen and (max-width: 43.75rem) {
    grid-template-columns: repeat(1, 1fr);
    position: relative;
    transform: translate(0);
    gap: 1rem;
    top: 0%;
    left: 0%;
    width: 100%;
  }
`;
export default function Banner3() {
  return (
    <Wrapper>
      <Banner>
        <h2>Banner 3</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          aperiam nemo sunt dolorum adipisci magnam. Ea inventore veritatis
          ullam doloribus non, voluptatem minima quia quasi, sunt, molestias
          perferendis itaque dolorem?
        </p>
      </Banner>
    </Wrapper>
  );
}

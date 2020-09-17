import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  position: relative;
  height: 40vh;
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
    background-image: url(https://source.unsplash.com/random);
    background-size: cover;

    height: 100%;
    width: 100%;
    background-position: center center;
  }

  & .right {
    display: grid;
    gap: 1.5rem;
    padding: 4rem;

    @media screen and (max-width: 43.75rem) {
        padding: 4rem;
    }

    & .extra-text {
      grid-template-columns: repeat(2, 1fr);
      display: grid;
      text-align: left;
      font-size: inherit;
  }
`;
export default function Banner5() {
  return (
    <Wrapper>
      <Banner>
        <div class="left"></div>
        <div class="right">
          <h2 class="sub-title">Banner 6</h2>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            aperiam nemo sunt dolorum adipisci magnam. Ea inventore veritatis
            ullam doloribus non
          </p>
          <div class="extra-text">
            <div>
              <h5>Lorem ipsum dolor</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti aperiam nemo sunt dolorum adipisci magnam.
              </p>
            </div>
            <div>
              <h5>Lorem ipsum dolor</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti aperiam nemo sunt dolorum adipisci magnam.
              </p>
            </div>
          </div>
        </div>
      </Banner>
    </Wrapper>
  );
}

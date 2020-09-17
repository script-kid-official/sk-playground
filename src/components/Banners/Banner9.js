import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  position: relative;
  height: 30vh;
  background-position: center center;
  margin-bottom: 2rem;
  background-image: url(https://source.unsplash.com/random);
  background-size: cover;
  height: auto;
  padding: 0;

  @media screen and (max-width: 43.75rem) {
    height: 100%;
    font-size: 1.6rem;
  }
`;

const Banner = styled.div`
display: grid;
place-items: center;
background-color: rgba(255, 255, 255, 0.8);
padding: 2vh 2vw;
gap: 1.5rem;
text-align: center;
overflow: hidden;
padding: 0;
width: 50%;

@media screen and (max-width: 43.75rem) {
    grid-template-columns: repeat(1, 1fr);
    position: relative;
    transform: translate(0);
    gap: 1rem;
    top: 0%;
    left: 0%;
    width: 100%;
}

& .content {
  padding: 5vh 2vw;
}

& .door-left,
& .door-right {
  height: 100%;
  position: absolute;
  background-color: #2d2d2d;
  z-index: 3;
  width: 50%;
  top: 0;
  transition: all 1s linear;
  transition-delay: 1s;
}

& .door-left {
  left: 0;
}

& .door-right {
  right: 0;
}

& .lock-open,
& .lock-closed {
  z-index: 7;
  font-size: 10rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transition: all 0.3s linear;
}

& .lock {
  z-index: 4;
  font-size: 10rem;
  position: absolute;
  top: 50%;
  left: 50%;
  color: #fff;

  transition: all 0.9s linear;
  transition-delay: 0.2s;
}

& .lock-closed {
  transform: translate(-60%, -50%);
}

& .lock-open {
  transform: translate(-50%, -50%);
  opacity: 0;
}

&:hover .door-left {
  width: 0%;
}

&:hover .door-right {
  width: 0%;
}

&:hover .lock {
  opacity: 0;
}


&:hover .lock-open {
  transform: translate(-38%, -50%) rotate(360deg);
  opacity: 1;
}

&:hover .lock-closed {
  transform: translate(-38%, -50%) rotate(260deg);
  opacity: 0;
}
}


`;
export default function Banner9() {
  return (
    <Wrapper>
      <Banner>
        <div class="door-left"></div>
        <div class="door-right"></div>
        <div class="lock">
          <span class="lock-open">Unlocked</span>
          <span class="lock-closed">Locked</span>
        </div>

        <div class="content">
          <h2 class="sub-title">Home 9</h2>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            aperiam nemo sunt dolorum adipisci magnam. Ea inventore veritatis
            ullam doloribus non, voluptatem minima quia quasi, sunt, molestias
            perferendis itaque dolorem?
          </p>
        </div>
      </Banner>
    </Wrapper>
  );
}

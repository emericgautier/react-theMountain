import React from "react";

const Main = () => {
  return (
    <main id="main">
      <section class="section1">
        <span>April 25, 2017</span>
        <h2>
          and this is a <br />
          massive headline
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
          debitis quisquam, ipsa voluptate amet voluptatum dolores numquam
          impedit illo sequi asperiores deleniti beatae? Illum, voluptatibus?
        </p>
        <img src="./assets/img/pic01.jpg" alt="img-hiking" />
        <button class="btn">full story</button>
      </section>

      <section class="section2">
        <div class="left-part">
          <span>April 24, 2017</span>
          <h3>
            sed magna
            <br />
            ipsum faucibus
          </h3>
          <img src="./assets/img/pic02.jpg" alt="forest" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nihil
            fuga quia voluptate laudantium dignissimos incidunt praesentium
            ipsam officiis laborum.
          </p>
          <button class="btn">full story</button>
        </div>
        <div class="right-part">
          <span>April 22, 2017</span>
          <h3>
            primis eget
            <br />
            imperdiet lorem
          </h3>
          <img src="./assets/img/pic03.jpg" alt="forest" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nihil
            fuga quia voluptate laudantium dignissimos incidunt praesentium
            ipsam officiis laborum.
          </p>
          <button class="btn">full story</button>
        </div>
      </section>
    </main>
  );
};

export default Main;

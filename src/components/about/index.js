import React from 'react';
import './about.scss';
import Box1 from '../../assets/images/box1.png';

const About = () => {
  return(
    <div className="aboutUs">
      <div className="contentBackground">
        <h3>Delicious cupcakes, magical moments!</h3>
        <div className="content">
          <p>
            Sweet Corner is growing fast. Our delicious cupcakes of all sizes, shapes, colors, and tastes are creating a real wow factor.
          </p>
          <p>
            Our delicious cupcakes are different from other bakeries. Why? Well, not only are our cupcakes and baked goods prepared fresh everyday, we also create personalized cupcakes in any size and shape, just for you!
          </p>
          <h3>
            Simply delicious and unique.
          </h3>
          <p>
            Our expert bakers create stunning cupcakes in any flavor, color, size or shape you choose.
          </p>
          <p>
            Have you seen a stunning cupcake in a magazine, TV show or on the Internet? Want something unique to reflect a character or personality? Sweet Corner’s cupcakes are baked with love, and that's why we can create perfect and unique cupcakes for you.
          </p>
          <p>
            No idea is too creative for our bakers at Sweet Corner cupcakes. Contact us today to discuss your special cupcake.
          </p>
        </div>
      </div>
      <div className="cupCakes">
        <img src={Box1} alt="frosting" />
      </div>
    </div>
  );
}

export default About;

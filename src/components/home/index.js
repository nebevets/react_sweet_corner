import React from 'react';
import './home.scss';
import cupCakes from '../../assets/images/cupcakes.png';

const Home = () => {
  return(
    <div className="home">
      <div className="content">
        <h3>We cherish the sweet moments…</h3>
        <p>
          Sweet corner’s story begins our passion for sweets, which is inspired by our everyday job, and also by our acknowledged weakness for sweets.
        </p>
        <p>
          For us, the Sweet Corner means: the right amount of sweet, flawless appearance, the combination of shape, color and proportion, and a right and balanced decor for the event.
        </p>
        <p>
          We have been baking gourmet cupcakes 100% from scratch since day one. We always use the finest and most natural ingredients we can find.
        </p>
        <h3>
          We can make happiness with so little!
        </h3>
        <p>
          We can provide services for Weddings, Bar &amp; Bat Mitzvahs, Birthdays, Showers, Corporate Events, and any other special occasion!
        </p>
        <p>
          Our expert bakers are waiting to create a memorable, unique cupcake bursting with freshness and flavor, just for you.
        </p>
        <p>
          Their delicious taste, great variety and their sweet universe, colorful and flavorful cupcakes make the best choice for a chic dessert.  How could you resist these delicious cupcakes?
        </p>
      </div>
      <div className="tagline">
        Please note: you will be overwhelmed by the sweet content!
      </div>
      <div className="cupCakes">
        <img src={cupCakes} alt="cupcakes" />
      </div>
    </div>
  );
}

export default Home;

import '../../assets/css/about_services.scss';
import React from 'react';
import Box2 from '../../assets/images/box2.png';

const Services = () => {
  return(
    <div className="services">
      <div className="contentBackground">
        <h3>We cherish the sweet moments...</h3>
        <div className="content">
          <p>
             Couples looking beyond the traditional wedding, Sweet Corner offers a modern-day alternative to traditional wedding cake. Stick your wedding cupcakes on towering tiers or treat each guest to a sweet token of your wedded bliss.
          </p>
          <p>
             Wedding cupcake prices average about $3 per person, depending on how elaborate your cake designers.
          </p>
          <p>
             An nonrefundable fee of $50 is required to reserve your date, and is deducted from your final bill.
          </p>
          <p>
             Higher prices may apply to custom cupcake flavors and highly detailed cupcakes.
          </p>
          <h3>Party cupcakes</h3>
          <p>
             Dress it up with a sprinkles cupcake, or keep it simple and let the cupcake shine!
          </p>
          <p>
             Simple birthday cupcakes such as Barney, Batman, Three Princesses, Thomas the Train, etc. range from $65 and up.
          </p>
          <p>
             3-D custom cakes elements, wine bottles, naughty cake logos aren't minimum of $135 plus. These are based on time required and intricacy of the design.
          </p>
          <h3>Gift cupcakes</h3>
          <p>
             Sending our cupcakes by posts is a perfect way to say pretty much anything you can think of: Happy Birthday, Welcome to your new home, Thanks for a lovely weekend, and Congratulations on your new baby!
          </p>
          <p>
              Are you having alternative to flowers, we can deliver cupcakes to any doorstop beaches in California.
          </p>
          <p>
              Our cupcakes are sold in boxes of 6 and 12 and delivered directly to the address you choose.
          </p>
        </div>
      </div>
      <div className="cupCakes">
        <img src={Box2} alt="frosting" />
      </div>
    </div>
  );
}

export default Services;

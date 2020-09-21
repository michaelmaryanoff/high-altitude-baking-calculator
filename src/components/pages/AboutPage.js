import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <div className="ui container">
        <div className="ui basic segment">
          <h1>Why I created this website</h1>
          <p>
            Welcome to the High Altitude Baking Calculator fellow high altitude bakers! If you’re
            like me, you’ve spent a lot of time tweaking sea level recipes in order to adapt them to
            a high altitude. I noticed that oftentimes I would avoid baking because I don’t feel
            like making calculations by hand. So I decided to combine my two favorite things: food
            and programming. Now I never have to make those calculations by hand again, and neither
            do you!
          </p>
          <h1>Note on measurement</h1>
          <p>
            You will notice that some of these measurements output a suggested range instead of an
            exact number. This was deliberate, since things like baking time and baking temperature
            will vary depending on the recipe. An angel food cake will most likely require a
            different time adjustment than cookies or sourdough bread, so I decided against
            outputting an exact number.
          </p>
          <h1>Geeky stuff</h1>
          <p>
            This calculator was built with React and Redux. If you need a JavaScript/React developer
            you can send me an email at michael.maryanoff (at) gmail.com. I promise to bring
            delicious baked goods to the office! Remote positions are eligible for mailed-in baked
            goods.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

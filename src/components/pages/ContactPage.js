import React from 'react';

const ContactPage = () => {
  return (
    <div className="ui container">
      <div className="ui basic segment">
        <h1>Hire me!</h1>
        <p>
          This calculator was built with React and Redux. If you need a JavaScript/React developer
          you can send me an email at michael.maryanoff (at) gmail.com. I promise to bring delicious
          baked goods to the office! Remote positions are eligible for mailed-in baked goods.
        </p>
        <p>
          If you would like to see the source code for this project, head to the{' '}
          <a href="https://github.com/michaelmaryanoff/high-altitude-baking-calculator">
            GitHub project page.
          </a>
        </p>

        <h1>Show me what you've been baking!</h1>
        <p>
          I would love to get feedback on your experience with the calculator! Please get in touch
          via email: michael.maryanoff (at) gmail.com
        </p>

        <p>
          Tag me on Instagram with your pictures:{' '}
          <a href="https://www.instagram.com/thehungrygringo">@thehungrygringo</a>
        </p>
        <p>
          Make sure to drop by my YouTube channel:{' '}
          <a href="https://www.youtube.com/thehungrygringo">The Hungry Gringo</a>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;

//import styling
import "./LearnMore.css";

//stateless function
const LearnMore = () => {
  return (
    <div className="logic">
      <h2> The logic behind this application </h2>
      <p>
        {" "}
        I created this application to understand how to handle events within
        React.js. Here's 3 things I've learnt how to do when it comes to
        handling them :
        <ol>
            <br/>
          <li> 1. Create the component </li>
          <li> 2. Create an event handler that responds to the event </li>
          <li> 3. Register the React component with the event handler </li>
        </ol>
      </p>
      <br />
      <p>
        {" "}
        I created a component called UserForm. Inside this
        component, I made use of a class component, which then held a
        constructor object. This was where I created the initial state of both
        the height and weight. After that , I had to bind the event handlers in
        order for me to use the 'this' keyword in the callback function I would
        later call. Next, I created the event handlers themselves. One to handle
        the input from the user for weight, the other to handle the input from
        the user for height. The last event handler I created would calculate
        the BMI of the end-user. I passed each of these event handlers into a
        form. Voila! The logic of the app works!
      </p>
    </div>
  );
};

export default LearnMore;

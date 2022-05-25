import React from "react";

const QandA = () => {
  return (
    <>
      <div className="w-4/5 m-auto">
        <div
          tabindex="0"
          class="collapse collapse-plus mt-16 border border-base-300 bg-base-100 rounded-box"
        >
          <div class="collapse-title text-xl font-medium">
            How will you improve the performance of a React Application?
          </div>
          <div class="collapse-content">
            <p>
              <ul>
                <li> Keeping component state local where necessary.</li>
                <li>
                  Memoizing React components to prevent unnecessary re-renders.
                </li>
                <li>
                  Code-splitting in React using dynamic import() Windowing or
                  list virtualization in React. Lazy loading images in React.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div
          tabindex="0"
          class="collapse collapse-plus mt-5 border border-base-300 bg-base-100 rounded-box"
        >
          <div class="collapse-title text-xl font-medium">
            What are the different ways to manage a state in a React
            application?
          </div>
          <div class="collapse-content">
            <p>Local state. Global state. Server state. URL state.</p>
          </div>
        </div>
        <div
          tabindex="0"
          class="collapse collapse-plus mt-5 border border-base-300 bg-base-100 rounded-box"
        >
          <div class="collapse-title text-xl font-medium">
            How does prototypical inheritance work?
          </div>
          <div class="collapse-content">
            <p>
              t is a method by which an object can inherit the properties and
              methods of another object. Traditionally, in order to get and set
              the [[Prototype]] of an object, we use Object. getPrototypeOf and
              Object.
            </p>
          </div>
        </div>
        <div
          tabindex="0"
          class="collapse collapse-plus mt-5 border border-base-300 bg-base-100 rounded-box"
        >
          <div class="collapse-title text-xl font-medium">
            Why you do not set the state directly in React. For example, if you
            have const [products, setProducts] = useState([]). Why you do not
            set products = [...] instead, you use the setProducts
          </div>
          <div class="collapse-content">
            <p>
              If you write a function component and realize you need to add some
              state to it, previously you had to convert it to a class. Now you
              can use a Hook inside the existing function component. We’re going
              to do that right now!
            </p>
          </div>
        </div>
        <div
          tabindex="0"
          class="collapse collapse-plus mt-5 border border-base-300 bg-base-100 rounded-box"
        >
          <div class="collapse-title text-xl font-medium">
            You have an array of products. Each product has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </div>
          <div class="collapse-content">
            <p>
              If you write a function component and realize you need to add some
              state to it, previously you had to convert it to a class. Now you
              can use a Hook inside the existing function component. We’re going
              to do that right now!
            </p>
          </div>
        </div>
        <div
          tabindex="0"
          class="collapse collapse-plus mt-5 mb-5 border border-base-300 bg-base-100 rounded-box"
        >
          <div class="collapse-title text-xl font-medium">
            What is a unit test? Why should write unit tests?
          </div>
          <div class="collapse-content">
            <p>
              unit test is to isolate written code to test and determine if it
              works as intended. Unit testing is an important step in the
              development process.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default QandA;

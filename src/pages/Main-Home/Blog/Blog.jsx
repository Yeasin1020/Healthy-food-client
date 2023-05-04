import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
const ref = React.createRef();
import Pdf from "react-to-pdf";

const Blog = () => {
  return (
    <div>
      <div  ref={ref} className="m-10">
        <h2 className=" text-lg font-bold">
          1. Tell us the differences between uncontrolled and controlled
          components.?
        </h2>
        <p className=" font-semibold">
          Ans. <br />
          Uncontrolled components : <br />
          1. Uncontrolled components do not rely on React state to manage their
          data. Instead, they store data internally using a reference to the
          underlying DOM node. <br></br>
          2. The values of uncontrolled components are read from the DOM when
          needed, such as when a form is submitted. <br></br>
          3. Uncontrolled components can be simpler to use and require less
          boilerplate code, but they may be more error-prone, as they are not
          directly managed by React. <br></br>
          Controlled components : <br />
          1. Controlled components rely on React state to manage their data. The
          state is used to set the initial values and update them as the user
          interacts with the component. <br></br>
          2. The values of controlled components are always in sync with the
          React state, and any changes to the values trigger a re-render of the
          component. <br></br>
          3. Controlled components require more code, but they offer more
          control and safety, as they are directly managed by React. <br></br>
        </p>

        <br />
        <h2 className=" text-lg font-bold">
          2. How to validate React props using PropTypes?
        </h2>
        <p className=" font-semibold">
          Ans. <br />
          1. any : The prop can be of any data type.
          <br /> 2. bool : The prop should be a Boolean.
          <br /> 3. number : The prop should be a number.
          <br /> 4. string : The prop should be a string.
          <br /> 5. func : The prop should be a function.
          <br /> 6. array : The prop should be an array.
          <br /> 7. object : The prop should be an object.
        </p>
        <br />
        <h2 className=" text-lg font-bold">
          3. Tell us the difference between nodejs and express js?
        </h2>
        <p className=" font-semibold">
          Ans. <br />
          Node.
          <br />
          Js is a JavaScript runtime built on Chrome's V8 JavaScript engine,
          which allows you to run JavaScript code outside of a web browser. It
          provides a platform for building server-side applications using
          JavaScript.
          <br />
          Express.
          <br />
          Js, on the other hand, is a web application framework built on top of
          Node.js. It provides a set of tools and features to help you build web
          applications and APIs quickly and easily. Express.js simplifies the
          process of building web applications by providing routing, middleware,
          and other features out of the box.
        </p>
        <h2 className=" text-lg font-bold">
          4. What is a custom hook, and why will you create a custom hook?
        </h2>
        <p className=" font-semibold">
          Ans. <br />
          In React, a custom hook is a reusable function that allows you to
          share logic between different components. Custom hooks can contain
          stateful logic and abstract away complex behavior, making it easier to
          manage the application's state and behavior. You would create a custom
          hook to simplify your code and avoid code repetition. For instance, if
          you have multiple components with similar functionality, you can
          extract the common logic into a custom hook and reuse it across those
          components. This can help you reduce the amount of code you need to
          write and maintain, making your code more efficient and easier to
          manage. Additionally, by encapsulating the shared logic into a custom
          hook, you can also make your code more readable and easier to
          understand.
        </p>
      </div>
      <div className="flex justify-center mb-28 mt-24">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button
              onClick={toPdf}
              type="button"
              class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              <span className="flex"><FaCloudDownloadAlt className="mt-[2px] mr-1"></FaCloudDownloadAlt> PDF Download</span>
            </button>
          )}
        </Pdf>
      </div>
    </div>
  );
};

export default Blog;

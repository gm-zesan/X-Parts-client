import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <div className="container">
                <h2 className="text-center my-5">My Blogs</h2>
                <Accordion style={{ height: "auto" }} className="w-50 mx-auto">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            How will you improve the performance of a React
                            Application?
                        </Accordion.Header>
                        <Accordion.Body>
                            To optimize React rendering, you need to make sure
                            that components receive only necessary props. It
                            will let you control the CPU consumption and avoid
                            over-rendering unnecessary features. The solution is
                            to create a functional component that will collect
                            all props and redistribute them to other components.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            What are the different ways to manage a state in a
                            React application?
                        </Accordion.Header>
                        <Accordion.Body>
                            5 Types of Application State in React application.
                            they are : 1. Data State 2. Control State 3. Session
                            State 4. Location State 5. Communication State
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            How does prototypical inheritance work?
                        </Accordion.Header>
                        <Accordion.Body>
                            The Prototypal Inheritance is a feature in
                            javascript used to add methods and properties in
                            objects. It is a method by which an object can
                            inherit the properties and methods of another
                            object. Traditionally, in order to get and set the
                            [[Prototype]] of an object, we use Object.
                            getPrototypeOf and Object.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>
                            Why you do not set the state directly in React. For
                            example, if you have const [products, setProducts] =
                            useState([]). Why you do not set products = [...]
                            instead, you use the setProducts
                        </Accordion.Header>
                        <Accordion.Body>
                            One should never update the state directly because
                            of the following reasons: If you update it directly,
                            calling the setState() afterward may just replace
                            the update you made. When you directly update the
                            state, it does not change this state immediately.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>
                            You have an array of products. Each product has a
                            name, price, description, etc. How will you
                            implement a search to find products by name?
                        </Accordion.Header>
                        <Accordion.Body>
                            By using filter we can search easily. Examole given
                            below: <br />
                            "const search = products.filter( (product) =>
                            product._id !== id );"
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>
                            What is a unit test? Why should write unit tests?
                        </Accordion.Header>
                        <Accordion.Body>
                            Unit testing, a testing technique using which
                            individual modules are tested to determine if there
                            are any issues by the developer himself. It is
                            concerned with functional correctness of the
                            standalone modules. Unit testing ensures that all
                            code meets quality standards before it's deployed.
                            This ensures a reliable engineering environment
                            where quality is paramount.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Blog;
import React from 'react';
import './CSS/Blog.css'

const Blog = () => {
    return (
        <div>

            <div className="blog text-left border p-4 mt-20">
                <h1 className="text-xl mb-3">Q1.What are the different ways to manage a state in a React application?</h1>
                <p><span className='font-bold'>Answer:</span>
                    React applications are built using components and they manage their state internally and it works well for applications with few components, but when the application grows bigger, the complexity of managing states shared across components becomes difficult.

                    Here is a simple example of an e-commerce application, in which the status of multiple components will change when purchasing a product.

                    Add that product to the shopping list
                    Add product to customer history
                    trigger count of purchased products
                </p>
            </div>
            <div className="blog text-left border p-4 mt-6">
                <h1 className="text-xl mb-3">Q2. How does prototypical inheritance work?</h1>
                <p>
                    <span className='font-bold'>Ans:</span>  Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype.
                </p>
            </div>
            <div className="blog text-left border p-4 mt-6">
                <h1 className="text-xl mb-3">Q3.What is a unit test? Why should we write unit tests?</h1>
                <p>
                    <span className='font-semibold'> Ans :</span>
                    The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                </p><br />

            </div>
            <div className="blog text-left border p-4 mt-6">
                <h1 className="text-xl mb-3">Q4. React vs. Angular vs. Vue??</h1>
                <p>
                    Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option</p>
            </div>
        </div>
    );
};

export default Blog;
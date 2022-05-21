import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <div className="container">
                <h2 className="text-center my-5">My Blogs</h2>
                <Accordion style={{ height: "400px" }} className="w-50 mx-auto">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            Difference between javascript and nodejs.
                        </Accordion.Header>
                        <Accordion.Body>
                            Javascript is a Scripting language.It can be said
                            that Javascript is the updated version of the ECMA
                            script. It is basically used on the client-side.
                            Javascript can only be run in the browsers. Whereas
                            NodeJS is a Javascript runtime environment. We can
                            run Javascript outside the browser with the help of
                            NodeJS.It is mostly used on the server-side.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            When should you use nodejs and when should you use
                            mongodb?
                        </Accordion.Header>
                        <Accordion.Body>
                            MongoDB is a database witch can be used with nodeJs.
                            When we need to store data ,we use database. NodeJS
                            is a Javascript runtime environment. NodeJs is
                            basically used on backend of UI. It helps to store
                            data on MongoDB.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            Differences between sql and nosql databases.
                        </Accordion.Header>
                        <Accordion.Body>
                            SQL databases have fixed or static or predefined
                            schema. These databases are best suited for complex
                            queries. Follows ACID property. NoSQL have dynamic
                            schema. These databases are not so good for complex
                            queries. Follows CAP(consistency, availability,
                            partition tolerance).
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>
                            What is the purpose of jwt and how does it work?
                        </Accordion.Header>
                        <Accordion.Body>
                            JWT, or JSON Web Token, is used to share security
                            information between two parties — a client and a
                            server. Each JWT contains encoded JSON objects,
                            including a set of claims. JWTs are signed using a
                            cryptographic algorithm to ensure that the claims
                            cannot be altered after the token is issued.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Blog;
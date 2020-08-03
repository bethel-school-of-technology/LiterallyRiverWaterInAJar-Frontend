import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Image } from "react-bootstrap"
import "./About.css"
import JumboAbout from "../components/JumboAbout";


const About = () => {
  // GET testimonials from database
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/testimonials/about")
      .then((data) => data.json())
      .then((data) => {
        setPostList(data.posts);
        console.log(data);
      });
  }, []);

  let newPost = postList.map((post, index) => {
    return <li key={index}>{post.PostBody}</li>;
  });

  // POST testimonials to database
  const [post, setPost] = useState("");
  console.log(post);
  const handleSubmit = (event) => {
    // event.preventDefault();
    const newPost = {
      postBody: post,
    };
    axios
      .post("http://localhost:3001/testimonials/about", { newPost })
      .then((response) => {
        console.log(response);
      });

    // fetch("http://localhost:3001/testimonials/about", {
    //   method: "POST",
    //   // headers: { "Content-Type": "application/json" },
    //   body: {post: post}
    // }).then((response) => response.json())
    // .then(response => console.log(response));
    // console.log(data.postBody);
  };

  return (
    <React.Fragment>
      <JumboAbout />
      <Container >
        <h2>Our River Water</h2>
        <Row>
          <Col sm={12} xs={12} md={8}>
        <p>
          <div>
            Building a successful business is all about identifying a need in the market and
            effectively filling that need. In the summer of 2020, that is exactly what we did.
          </div>
          <br />
          <div>
            We all know those people who have a stockpile of their own jars that they take to the river
            and fill with water whenever they want to. The "go-getters", the "self-motivators", the "not lazy"...they're
            all content to get river water the old fashioned way. But what about all of those forgotten people who
            just want to buy their river water instead? Who is serving them?
          </div>
          <br />
          <div>
          <strong>We're glad you asked!</strong>
          </div>
          <br />
        In the summer of 2020, four courageous men stepped forward to provide you with the most groundbreaking innovation
        in river water since the advent of the cup. Now, not only can you have river water in a jar, but you can actually
        buy any quantity you need using only your smart phone or computer and a credit card! That's right! You don't have
        to make those frequent trips down to the river bank to fill up your jars any longer! We will ship your river water
        directly to your doorstep!
        Here at LiterallyRiverWaterInAJar.com, our motto is "Some people will pay for anything and we're here to serve those people!".
        That's the type of service you'll receive when you purchase river water from LiterallyRiverWaterInAJar.com. We look forward to
        meeting all of your river water needs!
      </p>
          </Col>
          <Col sm={12} xs={12} md={4}>
            <Image className="jarRes" src="../../pictures/dreamJar.jpg" />
          </Col>
        </Row>
        
          


          <form onSubmit={handleSubmit}>
            <Row>
              <Col sm={3}></Col>

              <Col sm={12} md={6} xs={12}>
          <h2 className="center">Testimonials</h2>
          <div className="center">
          <ul style={{ listStyleType: "none" }}>{newPost}</ul>
              </div>
            <label>
              <h4 >Leave a testimonial</h4>
            </label>
            <br />

                <textarea
                  className="textarea"
                  rows="8"
                  onChange={(e) => setPost(e.target.value)}
                  type="text"
                  name="postBody"
                />
            <br />
              <input className="btn btn-primary" type="submit" value="Submit" />
              </Col>

              <Col sm={3}></Col>
            </Row>
          </form>
          <br />
        
      </Container>
    </React.Fragment>
  );
};

export default About;

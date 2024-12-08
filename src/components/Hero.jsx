import React from 'react';
import { Button, Form } from 'react-bootstrap';

function Hero() {
  return (
    <div style={{ position: "relative", textAlign: "center", color: "#fff", height: "400px" }}>
      <img
        src="https://cdn.pixabay.com/photo/2023/05/31/11/15/fish-8031138_1280.jpg"
        alt="Hero"
        style={{
          width: "100%",
          height: "400px",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h1>The ultimate recipe organizer for easy access to all of your recipes</h1>
        <Form
          className="d-flex justify-content-center mt-4"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          <Form.Control
            type="search"
            placeholder="Search for a recipe"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="danger">
            <i className="fas fa-search"></i>
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Hero;

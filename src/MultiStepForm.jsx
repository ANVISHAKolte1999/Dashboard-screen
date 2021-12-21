import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Form,
  Card,
  Container,
  Breadcrumb
} from "react-bootstrap";

import "react-datepicker/dist/react-datepicker.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["blaster campaign", "Create an ad group", "Create an ad"];

function MultiStepForm() {
  return (
    <div>
      <Breadcrumb style={{ marginLeft: "197px" }}>
        <Breadcrumb.Item active>DashBoard</Breadcrumb.Item>
        <Breadcrumb.Item active>Booth</Breadcrumb.Item>
        <Breadcrumb.Item active>New</Breadcrumb.Item>
      </Breadcrumb>
      <br></br>
      <h4 style={{ marginRight: "1000px" }}>Virtual booth</h4>
      <div style={{ marginTop: "15px" }}>
        <Button style={{ marginLeft: "870px" }} variant="secondary">
          {" "}
          Go Back{" "}
        </Button>{" "}
        <Button variant="primary">Continue</Button>{" "}
      </div>
      <Box sx={{ width: "70%", marginLeft: "150px" }}>
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <br></br>
      </Box>
      <br></br>
      <Card style={{ width: "75%", marginLeft: "190px" }}>
        <Card.Body>
          <h6 style={{ marginRight: "920px" }}>General</h6>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ marginRight: "900px" }}>
                Event Detail
              </Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>

            <Container>
              <Row>
               
              </Row>
            </Container>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label style={{ marginRight: "250px" }}>
                  StartDate
                </Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label style={{ marginRight: "260px" }}>Time</Form.Label>
                <Form.Select defaultValue="Choose..."></Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label style={{ marginRight: "260px" }}>
                  EndDate
                </Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ marginRight: "885px" }}>
                Slug(www.bizconnectevents.com/slug)
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="choose your event name as slug"
              />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MultiStepForm;

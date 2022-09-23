import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, Input, ModalHeader, Row, Col, Form,Label } from "reactstrap";

const ModalInput = (props) => {
  const { modal, setModal, userStory, setUserStory, setList, list } = props;

  const handleChange = (e) => {
    setUserStory(e.target.value);
  };

  const toggle = () => {
    setList([...list, userStory]);
    console.log(list);
    setModal(false);
  };

  return (
    <Modal size="lg" isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        <h4 style={{fontFamily: "sansSerif", color:"#2E8B57", fontSize:"1.5rem"}}>Add your task :</h4>
      </ModalHeader>
      <ModalBody>
      <Form>
          <Row>
            <Col xs="12" lg="4">
              <Label for="name">Name task :</Label>
            </Col>
            <Col xs="12" lg="8">
              <Input
                
                name="email"
                id="name"
                placeholder="add your task"
                onChange={handleChange}
              />
            </Col>
          </Row>
          </Form>
    
      </ModalBody>
      <ModalFooter>
        <Button color="success" onClick={toggle}>
          Add task
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalInput;

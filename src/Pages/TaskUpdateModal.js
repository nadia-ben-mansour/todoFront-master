import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  Input,
  Form,
  Label,
  ModalHeader,
  Row,
  Col,
} from "reactstrap";
function TaskUpdateModal(props) {
  const { modal, setModal, userStory, setUserStory, setList, list } = props;

  // const handleChange = (e) => {
  //   setUserStory(e.target.value);
  // };

  const toggle = () => {
    setModal(false);
  };
  return (
    <Modal size="lg" isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        <h4 style={{fontFamily: "sansSerif", color:"#2E8B57", fontSize:"1.5rem"}}>Update your task :</h4>
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
                placeholder=""
              />
            </Col>
          </Row>

          <Row style={{paddingBlock:'1rem'}}>
            <Col xs="12" lg="4">
              <Label for="description">Description :</Label>
            </Col>
            <Col xs="12" lg="8">
              <Input
                type="textarea"
                name="email"
                id="description"
                placeholder=""
              />
            </Col>
          </Row>
          <Row>
            <Col xs="12" lg="4">
              <Label for="dateCreation">Date Creation :</Label>
            </Col>
            <Col xs="12" lg="8">
              <Input
                type="date"
                name="email"
                id="dateCreation"
                placeholder=""
              />
            </Col>
          </Row>
          {/* <Input
        placeholder="add youd user story"
        onChange={handleChange}
      ></Input> */}
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="success" onClick={toggle}>
          Update
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default TaskUpdateModal;


import React, { Component } from 'react';
import { Input, Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      student_name: "-1",
    }
  }
  onSubmit = (e) => {
    alert(e.target.name)
  }
  onChange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    }, () => {
      const {
        student_name
      } = this.state
      console.log(student_name)
    })
  }

  render() {
    const {
      student_name
    } = this.state
    console.log(student_name)
    return (
      <div className="animated fadeIn">
        <Row>
          <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
            <Input type="text" name='student_name' onChange={this.onChange}></Input>
            <Button name="buttonA" onClick={this.onSubmit} block color="danger">Danger</Button>
          </Col>
        </Row>
      </div>

    );
  }
  }

  export default Dashboard;

import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

// React DateRangePicker
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './react_dates_overrides.css';

// React select
import states from './data/states';
import Select from 'react-select';
import 'react-select/dist/react-select.min.css';

const options = states.US;

class BrandButtons extends React.Component {
  constructor(props) {
    super(props);
    this.saveChanges = this.saveChanges.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);

    this.state = {
      value: ['UT', 'OH'],
      windowWidth: window.innerWidth,
      orientation: 'vertical',
      openDirection: 'down'
    }
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  saveChanges(value) {
    this.setState({ value });
  }

  updateDimensions() {
    const windowWidth = window.innerWidth;
    this.setState((state) => {
      return ({
        windowWidth: windowWidth,
        orientation: windowWidth < 620 ? 'vertical' : 'horizontal',
        openDirection: windowWidth < 620 ? 'up' : 'down'
      });
    });
  }

  render() {
    console.log(this.state.value)
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>
                <strong>Brand Button</strong>
                <small> Usage ex. </small>
                <code>
                  &lt;Button className="btn-facebook btn-brand"&gt;&lt;i className="fa fa-facebook"&gt;&lt;/i&gt;&lt;span&gt;Facebook&lt;/span&gt;&lt;/Button&gt;
                </code>
              </CardHeader>
              <CardBody>
                <h6>Size Small
                  <small> Add this class <code>.btn-sm</code></small>
                </h6>
                <p>
                  <Button size="sm" className="btn-facebook btn-brand mr-1 mb-1"><i className="fa fa-facebook"></i><span>Facebook</span></Button>
                  <Button size="sm" className="btn-twitter btn-brand mr-1 mb-1"><i className="fa fa-twitter"></i><span>Twitter</span></Button>
                  <Button size="sm" className="btn-linkedin btn-brand mr-1 mb-1"><i className="fa fa-linkedin"></i><span>LinkedIn</span></Button>
                  <Button size="sm" className="btn-flickr btn-brand mr-1 mb-1"><i className="fa fa-flickr"></i><span>Flickr</span></Button>
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12}>
            <Card>
              <CardBody>
                <DateRangePicker
                  startDate={this.state.startDate}
                  startDateId="startDate"
                  endDate={this.state.endDate}
                  endDateId="endDate"
                  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                  focusedInput={this.state.focusedInput}
                  onFocusChange={focusedInput => this.setState({ focusedInput })}
                  orientation={this.state.orientation}
                  openDirection={this.state.openDirection}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    );
  }
}

export default BrandButtons;

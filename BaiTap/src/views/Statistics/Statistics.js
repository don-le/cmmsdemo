import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Progress, CardBody, CardColumns, CardHeader, Row, Col } from 'reactstrap';
import classNames from 'classnames';
import { mapToCssModules } from 'reactstrap/lib/utils';
import {Line } from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

// Widgets
const propTypes = {
    header: PropTypes.string,
    mainText: PropTypes.string,
    smallText: PropTypes.string,
    color: PropTypes.string,
    value: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    variant: PropTypes.string,
};

const defaultProps = {
    header: '89.9%',
    mainText: 'Lorem ipsum...',
    smallText: 'Lorem ipsum dolor sit amet enim.',
    // color: '',
    value: '25',
    variant: '',
};

//charts
const line = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
        },
    ],
};



class Statistics extends Component {
    render() {
        const { className, cssModule, header, mainText, smallText, color, value, children, variant, ...attributes } = this.props;

        // demo purposes only
        const progress = { style: '', color: color, value: value };
        const card = { style: '', bgColor: '' };

        if (variant === 'inverse') {
            progress.style = 'progress-white';
            progress.color = '';
            card.style = 'text-white';
            card.bgColor = 'bg-' + color;
        }

        const classes = mapToCssModules(classNames(className, card.style, card.bgColor), cssModule);
        progress.style = classNames('progress-xs my-3', progress.style);
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" xl="12">
                        <Card className={classes} {...attributes}>
                            <CardBody>
                                <div className="h4 m-0">{header}</div>
                                <div>{mainText}</div>
                                <Progress className={progress.style} color={progress.color} value={progress.value} />
                                <small className="text-muted">{smallText}</small>
                                <div>{children}</div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                
            </div>

        );
    }
}
Statistics.propTypes = propTypes;
Statistics.defaultProps = defaultProps;
export default Statistics;

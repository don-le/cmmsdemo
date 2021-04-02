import React, { Component } from 'react';
import { Card, CardBody,CardHeader, Col, Row, Table } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table/dist//react-bootstrap-table-all.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import data from './_DataChamCong.js';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

// React DateRangePicker
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './react_dates_overrides.css';

// React select
import states from './data/states';
import Select from 'react-select';
import 'react-select/dist/react-select.min.css';
import _DataChamCong from './_DataChamCong.js';
const options1 = states.US;


// Tô màu cho hàng
const columns = [{
    dataField: 'MaNV',
    keyField: 'MaNV',
    text: 'Mã nhân viên'
}, {
    dataField: 'BoPhan',
    text: 'Bộ phận'
}, {
    dataField: 'Ngay',
    text: 'Ngày'
}, {
    dataField: 'NDVao',
    text: 'Nhiệt độ vào',
    keyField: 'NDVao'
}, {
    dataField: 'NDRa',
    text: 'Nhiệt độ ra',
    keyField: 'NDRa'
}];

const rowStyle2 = (row) => {
    const style = {};
    if (parseFloat(row.NDVao + "") > 38.0 || parseFloat(row.NDVao + "") <= 35.8 || parseFloat(row.NDRa + "") > 38.0 || parseFloat(row.NDRa + "") <= 35.8) {
        style.backgroundColor = '#B7B7B7';
    } else {
        style.backgroundColor = '#ECECEC';
    }
    return style;
};

class Insight2 extends React.Component {
    constructor(props) {
        super(props);

        this.table = data.rows;
        this.options = {
            sortIndicator: true,
            hideSizePerPage: true,
            paginationSize: 3,
            hidePageListOnlyOnePage: true,
            clearSearch: true,
            alwaysShowAllBtns: false,
            withFirstAndLast: false
        };
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


    // just an example
    nameFormat(cell, row) {
        const id = `/users/${row.id}`
        return (
            <NavLink strict to={id}> {cell} </NavLink>
        );
    };
    render() {
        return (
            <div className="animated fadeIn"  >
                <Col xs="12" lg="12">
                    <Card>
                        <CardHeader>
                            <i className="icon-menu"></i>NHIỆT ĐỘ RA VÀO CỦA NHÂN VIÊN{' '}
                            <div className="card-header-actions">
                            </div>
                            <Row>
                                <Col lg="8" ></Col>
                                <Col lg="4">
                                    <div style={{ wight: '100vw', float: 'right' }}>
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
                                    </div>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <BootstrapTable keyField='MaNV' data={this.table} columns={columns} rowStyle={rowStyle2}  />
                        </CardBody>
                    </Card>
                </Col>
            </div>
        );
    }
}

export default Insight2;

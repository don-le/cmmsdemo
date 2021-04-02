import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import { Card, CardBody, CardTitle, Progress, CardColumns, CardHeader, Badge, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist//react-bootstrap-table-all.min.css';
import data from './_DataChamCong.js';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

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


const line = {
    labels: ['March 1st', 'March 2nd', 'March 3rd', 'March 4th', 'March 5th', 'March 6th', 'March 7th'],
    datasets: [
        {
            label: 'Thống kê số lượng nhân viên đi trễ',
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
            data: [3, 10, 7, 15, 2, 0, 6],
        },
    ],
};

const bar = {
    labels: ['Ban giám đốc', 'Bộ phận bếp', 'Bộ phận kế hoạch sản xuất', 'Bộ phận kế toán- tài chính', 'Bộ phận kho vận Logistic',
        'Phòng cơ sở hạ tầng', 'Phòng quản lý chất lượng'],
    datasets: [
        {
            label: 'SỐ LƯỢNG NHÂN VIÊN MỖI PHÒNG BAN',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [3, 10, 20, 21, 16, 25, 5],

        },
    ],
};

const bar2 = {
    labels: ['BGĐ', 'BP bếp', 'BP KHSX', 'BP KTTC', 'BP KV Logistic', 'PCSHT', 'PQLCL'],
    datasets: [
        {
            label: 'SỐ GIỜ TĂNG CA MỖI PHÒNG BAN',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [200, 100, 220, 50, 160, 205, 45],

        },
    ],
};
const bar3 = {
    labels: ['BGĐ', 'BP bếp', 'BP KHSX', 'BP KTTC', 'BP KV Logistic', 'PCSHT', 'PQLCL'],
    datasets: [
        {
            label: 'SỐ NHÂN VIÊN ĐI TRỄ MỖI PHÒNG BAN',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [2, 1, 2, 5, 7, 0, 4],

        },
    ],
};
const doughnut = {
    labels: [
        'Red',
        'Green',
        'Yellow',
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
            ],
        }],
};

const radar = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [65, 59, 90, 81, 56, 55, 40],
        },
        {
            label: 'My Second dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [28, 48, 40, 19, 96, 27, 100],
        },
    ],
};

const pie = {
    labels: [
        'dưới 35.8',
        '35.8-38',
        'trên 38',
    ],
    datasets: [
        {
            data: [3, 233, 1],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
            ],
        }],
};

const polar = {
    datasets: [
        {
            data: [
                11,
                16,
                7,
                3,
                14,
            ],
            backgroundColor: [
                '#FF6384',
                '#4BC0C0',
                '#FFCE56',
                '#E7E9ED',
                '#36A2EB',
            ],
            label: 'My dataset' // for legend
        }],
    labels: [
        'Red',
        'Green',
        'Yellow',
        'Grey',
        'Blue',
    ],
};

const options = {
    tooltips: {
        enabled: false,
        custom: CustomTooltips
    },
    maintainAspectRatio: false
}

// Tô màu cho hàng
const columns = [{
    dataField: 'MaNV',
    keyField:'MaNV',
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
    keyField:'NDVao'
  }, {
    dataField: 'NDRa',
    text: 'Nhiệt độ ra',
    keyField:'NDRa'
  }];
const rowClasses = (row, rowIndex) => {
    let classes = null;
  
    if (rowIndex > 2) {
      classes = 'index-bigger-than-two';
    }
  
    return classes;
  };
function rowStyle2(row){
    const style = {};
    if (parseFloat(row.NDVao+"") > 36.0|| parseFloat(row.NDVao+"") <=35.8 || parseFloat(row.NDRa+"")>36.0 || parseFloat(row.NDRa+"") <=35.8) {
      row.style.backgroundColor = '#c8e6c9';
    } else {
      row.style.backgroundColor = '#00BFFF';
    }
    return row.style;
  };
class Insight1 extends React.Component {
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
                <Row ys='12' >
                    <Col xs="12" lg="6" >
                        <Card>
                            <CardHeader>
                                <i className="icon-menu"></i>THỐNG KÊ SỐ LƯỢNG NHÂN VIÊN MỖI PHÒNG BAN{' '}
                                <div className="card-header-actions">
                                </div>
                                <Row>
                                    <Col lg="4" ></Col>
                                    <Col lg="8">
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
                            <CardBody >
                                <div className="chart-wrapper" style={{ height: '30vh' }}>
                                    <Bar data={bar} options={options} />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" lg="6" >
                        <Card>
                            <CardHeader>
                                <i className="icon-menu"></i>THỐNG KÊ SỐ LƯỢNG NHÂN VIÊN ĐI TRỄ{' '}
                                <div className="card-header-actions">
                                </div>
                                <Row>
                                    <Col lg="4" ></Col>
                                    <Col lg="8">
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
                                <div className="chart-wrapper" style={{ height: '30vh' }}>
                                    <Line data={line} options={options} />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Col xs="12" lg="12">
                    <Card>
                        <CardHeader>
                            <i className="icon-menu"></i>TỔNG SỐ GIỜ LÀM VIỆC CỦA NHÂN VIÊN{' '}
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
                            <BootstrapTable data={this.table} version="4" striped hover pagination search options={this.options}>
                                <TableHeaderColumn isKey dataField="MaNV" dataSort dataFormat={this.nameFormat} >Mã Nhân Viên</TableHeaderColumn>
                                <TableHeaderColumn dataField="BoPhan" dataSort dataFormat={this.nameFormat} >Bộ phận/ Phòng ban</TableHeaderColumn>
                                <TableHeaderColumn value="3" dataSort>Số ca làm</TableHeaderColumn>
                                <TableHeaderColumn dataField="TongGio" dataSort>Tổng giờ</TableHeaderColumn>
                                <TableHeaderColumn dataField="TongGioTT" dataSort>Tổng giờ thực tế</TableHeaderColumn>
                                <TableHeaderColumn dataField="TangCa" dataSort>Tăng ca</TableHeaderColumn>
                            </BootstrapTable>
                        </CardBody>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <CardHeader>
                            <i className="icon-menu"></i>TỔNG SỐ GIỜ LÀM VIỆC THEO PHÒNG BAN{' '}
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
                            <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                                <thead className="thead-light">
                                    <tr>
                                        <th>Tên phòng ban</th>
                                        <th className="text-center">Tổng số giờ</th>
                                        <th className="text-center">Tổng số giờ thực tế</th>
                                        <th>Tỷ lệ phần trăm</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{backgroundColor: '#FDE2CA'}}>
                                        <td>
                                            <div>Ban giám đốc</div>
                                        </td>
                                        <td className="text-center">
                                            <div >1200</div>
                                        </td>
                                        <td className="text-center">
                                            <div>1000</div>
                                        </td>
                                        <td>
                                            <div className="clearfix">
                                                <div className="float-left">
                                                    <strong>83%</strong>
                                                </div>
                                            </div>
                                            <Progress className="progress-xs" color="success" value="83" />
                                        </td>
                                    </tr>
                                    <tr >
                                        <td>
                                            <div>Bộ phận Kế hoạch - Tài chính</div>
                                        </td>
                                        <td className="text-center">
                                            <div >1200</div>
                                        </td>
                                        <td className="text-center">
                                            <div>1200</div>
                                        </td>
                                        <td>
                                            <div className="clearfix">
                                                <div className="float-left">
                                                    <strong>100%</strong>
                                                </div>
                                            </div>
                                            <Progress className="progress-xs" color="success" value="100" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>Bộ phận Kế hoạch sản xuất</div>
                                        </td>
                                        <td className="text-center">
                                            <div >1200</div>
                                        </td>
                                        <td className="text-center">
                                            <div>1200</div>
                                        </td>
                                        <td>
                                            <div className="clearfix">
                                                <div className="float-left">
                                                    <strong>100%</strong>
                                                </div>
                                            </div>
                                            <Progress className="progress-xs" color="success" value="100" />
                                        </td>
                                    </tr>
                                    <tr style={{backgroundColor: '#FDE2CA'}}>
                                        <td>
                                            <div>Phòng Cơ sở hạ tầng</div>
                                        </td>
                                        <td className="text-center">
                                            <div >1200</div>
                                        </td>
                                        <td className="text-center">
                                            <div>1030</div>
                                        </td>
                                        <td>
                                            <div className="clearfix">
                                                <div className="float-left">
                                                    <strong>85.8%</strong>
                                                </div>
                                            </div>
                                            <Progress className="progress-xs" color="success" value="85.8" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>Phòng Quản lý chất lượng</div>
                                        </td>
                                        <td className="text-center">
                                            <div >1200</div>
                                        </td>
                                        <td className="text-center">
                                            <div>1200</div>
                                        </td>
                                        <td>
                                            <div className="clearfix">
                                                <div className="float-left">
                                                    <strong>100%</strong>
                                                </div>
                                            </div>
                                            <Progress className="progress-xs" color="success" value="100" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>Bộ phận kho vận Logistic</div>
                                        </td>
                                        <td className="text-center">
                                            <div >1200</div>
                                        </td>
                                        <td className="text-center">
                                            <div>1200</div>
                                        </td>
                                        <td>
                                            <div className="clearfix">
                                                <div className="float-left">
                                                    <strong>100%</strong>
                                                </div>
                                            </div>
                                            <Progress className="progress-xs" color="success" value="100" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>Bộ phận Quản lý sản xuất</div>
                                        </td>
                                        <td className="text-center">
                                            <div >1200</div>
                                        </td>
                                        <td className="text-center">
                                            <div>1200</div>
                                        </td>
                                        <td>
                                            <div className="clearfix">
                                                <div className="float-left">
                                                    <strong>100%</strong>
                                                </div>
                                            </div>
                                            <Progress className="progress-xs" color="success" value="100" />
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>

                <Col xs="9" lg="12" >
                    <Card>
                        <CardHeader>
                            <i className="icon-menu"></i>TỔNG SỐ GIỜ TĂNG CA THEO PHÒNG BAN{' '}
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
                        <CardBody >
                            <div className="chart-wrapper" style={{ height: '30vh' }}>
                                <Bar data={bar2} options={options} />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" lg="12">
                    <Card>
                        <CardHeader>
                            <i className="icon-menu"></i>DANH SÁCH NHÂN VIÊN ĐƯỢC CHẤM CÔNG{' '}
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
                            <BootstrapTable data={this.table} version="4" striped hover pagination search options={this.options}>
                                <TableHeaderColumn isKey dataField="MaNV" dataSort dataFormat={this.nameFormat} >Mã Nhân Viên</TableHeaderColumn>
                                <TableHeaderColumn dataField="BoPhan" dataSort dataFormat={this.nameFormat} >Bộ phận/ Phòng ban</TableHeaderColumn>
                                <TableHeaderColumn dataField="Ngay" dataSort>Ngày chấm công</TableHeaderColumn>
                                <TableHeaderColumn dataField="Thu" dataSort>Thứ</TableHeaderColumn>
                            </BootstrapTable>
                        </CardBody>
                    </Card>
                </Col>
                <Row>
                    <Col xs="12" lg="9">
                        <Card>
                            <CardHeader>
                                <i className="icon-menu"></i>BIỂU ĐỒ THỐNG KÊ NHIỆT ĐỘ NHÂN VIÊN{' '}
                                <div className="card-header-actions">
                                </div>
                                <Row>
                                    <Col lg="6" ></Col>
                                    <Col lg="6">
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
                                <div className="chart-wrapper">
                                    <Pie data={pie} />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
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
                                <BootstrapTable  data={this.table} trStyle={this.rowStyle2 } hover pagination search options={this.options}  >
                                    <TableHeaderColumn isKey dataField="MaNV" dataSort >Mã Nhân Viên</TableHeaderColumn>
                                    <TableHeaderColumn dataField="BoPhan" dataSort  >Bộ phận/ Phòng ban</TableHeaderColumn>
                                    <TableHeaderColumn  dataField="Ngay" dataSort >Ngày ra vào</TableHeaderColumn>
                                    <TableHeaderColumn keyField="NDVao" dataField="NDVao" dataSort>Nhiệt độ vào</TableHeaderColumn>
                                    <TableHeaderColumn keyField="NDRa" dataField="NDRa"  dataSort>Nhiệt độ ra</TableHeaderColumn>
                                </BootstrapTable> 
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Insight1;

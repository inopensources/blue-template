import React, { Component } from "react";
import Chart from "react-apexcharts";
import Panel from "./panel.react";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }

  render() {
    return (
      <div className="content">
        <div className="sub-navbar sub-navbar__header">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="page-header m-t-0"><h3 className="m-t-0">Financial</h3></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row m-b-2">
                <div className="col-md-4 col-sm-4 col-xs-4"><h4 className="m-b-0 m-t-0">Your Cash</h4></div>
                <div className="col-md-4 col-sm-4 col-xs-4 col-xs-offset-4 col-sm-offset-4 col-md-offset-4 text-right">
                  <div className="dropdown">
                    <button className="btn btn-default btn-sm dropdown-toggle" type="button" id="dropdownCurrency" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> USD
                      <i className="fa m-l-1 fa-caret-down"></i></button>
                    <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownCurrency">
                      <li><a href="#"><i className="fa fa-dollar fa-fw m-r-1 text-gray"></i>USD</a></li>
                      <li><a href="#"><i className="fa fa-euro fa-fw m-r-1 text-gray"></i>Euro</a></li>
                      <li><a href="#"><i className="fa fa-gbp fa-fw m-r-1 text-gray"></i>Pound</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
              <Panel />
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="panel panel-default b-a-0 shadow-box">
                    <div className="panel-heading">Invoices</div>
                    <div className="panel-body"><h2 className="m-t-0 f-w-300"><sup>$</sup> <span> 187.00</span></h2> <i className="fa fa-fw fa-caret-down text-danger"></i> <span>$ 3.00</span></div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="panel panel-default b-a-0 shadow-box">
                    <div className="panel-heading">Accounts Receiveable</div>
                    <div className="panel-body"><h2 className="m-t-0 f-w-300"><sup>$</sup> <span> 530.00</span></h2> <i className="fa fa-fw fa-caret-up text-success"></i> <span>$ 681.00</span></div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="panel panel-default b-a-0 shadow-box">
                    <div className="panel-heading">Secure Holdings</div>
                    <div className="panel-body"><h2 className="m-t-0 f-w-300"><sup>$</sup> <span> 16.00</span></h2> No Change</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="row m-b-2">
                    <div className="col-md-4"><h4 className="m-b-0 ">Money Map</h4></div>
                    <div className="col-md-4 col-md-offset-4 text-right"></div>
                  </div>
                  <div className="panel panel-default b-gray-dark b-a-0 shadow-box">
                    <div className="panel-heading">
                      <div className="row">
                        <Chart
                          options={this.state.options}
                          series={this.state.series}
                          type="bar"
                          width="500"
                        />
                      </div>
                    </div>
                    <div className="panel-body">
                      <div className="highcharts-pie-with-legend-money-map"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="row m-b-2">
                    <div className="col-md-4 col-sm-4 col-xs-4"><h4 className="m-b-0 ">Invoices</h4></div>
                    <div className="col-md-4 col-sm-4 col-xs-4 col-xs-offset-4 col-sm-offset-4 col-md-offset-4 text-right">
                      <button type="button" className="btn btn-sm btn-default">Pending<i className="fa m-l-1 fa-caret-down"></i></button>
                    </div>
                  </div>
                  <div className="panel panel-default b-a-0 shadow-box">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                        <tr>
                          <th className="small text-muted text-uppercase"><strong>Company</strong></th>
                          <th className="small text-muted text-uppercase"><strong>Amount</strong></th>
                          <th className="small text-muted text-uppercase"><strong>Date</strong></th>
                          <th className="small text-muted text-uppercase"><strong>Contact</strong></th>
                          <th className="small text-muted text-uppercase"><strong>Email</strong></th>
                          <th className="small text-right text-muted text-uppercase"><strong>Action</strong></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td className="v-a-m"><span className="text-gray-darker">King, Simonis and Hermann</span></td>
                          <td className="v-a-m"><span>$ 61.00</span></td>
                          <td className="v-a-m"><span>26-02-2011</span></td>
                          <td className="v-a-m"><span>Jean Sporer </span></td>
                          <td className="v-a-m"><a href="#"><span>Heber_Deckow@hotmail.com</span></a></td>
                          <td className="v-a-m text-right"><a href="#">View <i className="fa fa-angle-right"></i></a></td>
                        </tr>
                        <tr>
                          <td className="v-a-m"><span className="text-gray-darker">Wuckert Group</span></td>
                          <td className="v-a-m"><span>$ 16.00</span></td>
                          <td className="v-a-m"><span>21-07-2016</span></td>
                          <td className="v-a-m"><span>Kole Russel </span></td>
                          <td className="v-a-m"><a href="#"><span>Cesar_Satterfield@yahoo.com</span></a></td>
                          <td className="v-a-m text-right"><a href="#">View <i className="fa fa-angle-right"></i></a></td>
                        </tr>
                        <tr>
                          <td className="v-a-m"><span className="text-gray-darker">Windler, Schowalter and Cartwright</span></td>
                          <td className="v-a-m"><span>$ 109.00</span></td>
                          <td className="v-a-m"><span>10-11-2015</span></td>
                          <td className="v-a-m"><span>Perry Lueilwitz </span></td>
                          <td className="v-a-m"><a href="#"><span>Velva.Jones@yahoo.com</span></a></td>
                          <td className="v-a-m text-right"><a href="#">View <i className="fa fa-angle-right"></i></a></td>
                        </tr>
                        <tr>
                          <td className="v-a-m"><span className="text-gray-darker">Kunde - Effertz</span></td>
                          <td className="v-a-m"><span>$ 578.00</span></td>
                          <td className="v-a-m"><span>23-10-2013</span></td>
                          <td className="v-a-m"><span>Elisa Rippin </span></td>
                          <td className="v-a-m"><a href="#"><span>Randall70@yahoo.com</span></a></td>
                          <td className="v-a-m text-right"><a href="#">View <i className="fa fa-angle-right"></i></a></td>
                        </tr>
                        <tr>
                          <td className="v-a-m"><span className="text-gray-darker">Bartell, Lowe and Rippin</span></td>
                          <td className="v-a-m"><span>$ 14.00</span></td>
                          <td className="v-a-m"><span>29-04-2015</span></td>
                          <td className="v-a-m"><span>Jeramy Gibson </span></td>
                          <td className="v-a-m"><a href="#"><span>Maiya97@hotmail.com</span></a></td>
                          <td className="v-a-m text-right"><a href="#">View <i className="fa fa-angle-right"></i></a></td>
                        </tr>
                        <tr>
                          <td className="v-a-m"><span className="text-gray-darker">McClure - Schuster</span></td>
                          <td className="v-a-m"><span>$ 173.00</span></td>
                          <td className="v-a-m"><span>02-11-2013</span></td>
                          <td className="v-a-m"><span>Jesse Murazik </span></td>
                          <td className="v-a-m"><a href="#"><span>Willy.Keeling@yahoo.com</span></a></td>
                          <td className="v-a-m text-right"><a href="#">View <i className="fa fa-angle-right"></i></a></td>
                        </tr>
                        <tr>
                          <td className="v-a-m"><span className="text-gray-darker">Stark, Kuhic and Schroeder</span></td>
                          <td className="v-a-m"><span>$ 872.00</span></td>
                          <td className="v-a-m"><span>17-07-2013</span></td>
                          <td className="v-a-m"><span>Elza Ankunding </span></td>
                          <td className="v-a-m"><a href="#"><span>Lucas82@hotmail.com</span></a></td>
                          <td className="v-a-m text-right"><a href="#">View <i className="fa fa-angle-right"></i></a></td>
                        </tr>
                        <tr>
                          <td className="v-a-m"><span className="text-gray-darker">Larkin - Wisoky</span></td>
                          <td className="v-a-m"><span>$ 541.00</span></td>
                          <td className="v-a-m"><span>01-04-2012</span></td>
                          <td className="v-a-m"><span>Albin Streich </span></td>
                          <td className="v-a-m"><a href="#"><span>Emile1@hotmail.com</span></a></td>
                          <td className="v-a-m text-right"><a href="#">View <i className="fa fa-angle-right"></i></a></td>
                        </tr>
                        <tr>
                          <td className="v-a-m"><span className="text-gray-darker">Nader - Connelly</span></td>
                          <td className="v-a-m"><span>$ 891.00</span></td>
                          <td className="v-a-m"><span>01-08-2015</span></td>
                          <td className="v-a-m"><span>Kenyatta Stoltenberg </span></td>
                          <td className="v-a-m"><a href="#"><span>Joseph.Luettgen@gmail.com</span></a></td>
                          <td className="v-a-m text-right"><a href="#">View <i className="fa fa-angle-right"></i></a></td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-9">
                  <div className="row m-b-2">
                    <div className="col-md-4"><h4 className="m-b-0 ">Account Performance</h4></div>
                    <div className="col-md-4 col-md-offset-4 text-right"></div>
                  </div>
                  <div className="panel panel-default b-a-0 shadow-box">
                    <div className="panel-body">
                      <div className="highcharts-area-with-missing-points"></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="row m-b-2">
                    <div className="col-md-9"><h4 className="m-b-0 ">Dashboard Settings</h4></div>
                    <div className="col-md-2 col-md-offset-2 text-right"></div>
                  </div>
                  <div className="panel panel-default b-a-0 shadow-box">
                    <table className="table">
                      <tbody>
                      <tr>
                        <td className="v-a-m">My Cash</td>
                        <td className="v-a-m text-right"><input type="checkbox" className="js-switch-small" checked/></td>
                      </tr>
                      <tr>
                        <td className="v-a-m">My Cap</td>
                        <td className="v-a-m text-right"><input type="checkbox" className="js-switch-small" checked/></td>
                      </tr>
                      <tr>
                        <td className="v-a-m">Recent Fundings</td>
                        <td className="v-a-m text-right"><input type="checkbox" className="js-switch-small" checked/></td>
                      </tr>
                      <tr>
                        <td className="v-a-m">Client List</td>
                        <td className="v-a-m text-right"><input type="checkbox" className="js-switch-small" checked/></td>
                      </tr>
                      <tr>
                        <td className="v-a-m">Invoice Creator</td>
                        <td className="v-a-m text-right"><input type="checkbox" className="js-switch-small" checked/></td>
                      </tr>
                      <tr>
                        <td className="v-a-m">Invoice Generator</td>
                        <td className="v-a-m text-right"><input type="checkbox" className="js-switch-small" checked/></td>
                      </tr>
                      <tr>
                        <td className="v-a-m">Sales Lead</td>
                        <td className="v-a-m text-right"><input type="checkbox" className="js-switch-small" checked/></td>
                      </tr>
                      <tr>
                        <td className="v-a-m">Q &amp; A</td>
                        <td className="v-a-m text-right"><input type="checkbox" className="js-switch-small" checked/></td>
                      </tr>
                      <tr>
                        <td className="v-a-m">Account Performance</td>
                        <td className="v-a-m text-right"><input type="checkbox" className="js-switch-small" checked/></td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;

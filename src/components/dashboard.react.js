import React, {Component} from 'react';

class Dashboard extends Component {
  render() {
    return (
      <div className="content">
          <div class="sub-navbar sub-navbar__header">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-12">
                          <div class="page-header m-t-0">
                              <h3 class="m-t-0">Financial</h3>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="container">


    <div class="row">
        <div class="col-lg-12">


            <div class="row m-b-2">
                <div class="col-md-4 col-sm-4 col-xs-4">
                    <h4 class="m-b-0 m-t-0">Your Cash</h4></div>
                <div class="col-md-4 col-sm-4 col-xs-4 col-xs-offset-4 col-sm-offset-4 col-md-offset-4 text-right">
                    <div class="dropdown">
                        <button class="btn btn-default btn-sm dropdown-toggle" type="button" id="dropdownCurrency" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            USD<i class="fa m-l-1 fa-caret-down"></i>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownCurrency">
                            <li><a href="#"><i class="fa fa-dollar fa-fw m-r-1 text-gray"></i>USD</a></li>
                            <li><a href="#"><i class="fa fa-euro fa-fw m-r-1 text-gray"></i>Euro</a></li>
                            <li><a href="#"><i class="fa fa-gbp fa-fw m-r-1 text-gray"></i>Pound</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            

            
            <div class="row">

            
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="panel panel-default b-a-0 shadow-box">
                        <div class="panel-heading">Main Fundings</div>
                        <div class="panel-body">
                            <h2 class="m-t-0 f-w-300"><sup>$</sup>
              <span> 706.00</span></h2>
                            <i class="fa fa-fw fa-caret-up text-success"></i> <span>$ 871.00</span>
                        </div>
                    </div>
                </div>
            

            
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="panel panel-default b-a-0 shadow-box">
                        <div class="panel-heading">Invoices</div>
                        <div class="panel-body">
                            <h2 class="m-t-0 f-w-300"><sup>$</sup>
              <span> 187.00</span></h2>
                            <i class="fa fa-fw fa-caret-down text-danger"></i> <span>$ 3.00</span>
                        </div>
                    </div>
                </div>
            

            
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="panel panel-default  b-a-0 shadow-box">
                        <div class="panel-heading">Accounts Receiveable</div>
                        <div class="panel-body">
                            <h2 class="m-t-0 f-w-300"><sup>$</sup>
              <span> 530.00</span></h2>
                            <i class="fa fa-fw fa-caret-up text-success"></i> <span>$ 681.00</span>
                        </div>
                    </div>
                </div>
            

                
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="panel panel-default  b-a-0 shadow-box">
                        <div class="panel-heading">Secure Holdings</div>
                        <div class="panel-body">
                            <h2 class="m-t-0 f-w-300"><sup>$</sup>
              <span> 16.00</span></h2> No Change
                        </div>
                    </div>
                </div>
                

            </div>
            



            <div class="row">


                <div class="col-lg-5">

                    <div class="row m-b-2">
                        <div class="col-md-4">
                            <h4 class="m-b-0 ">Money Map</h4></div>
                        <div class="col-md-4 col-md-offset-4 text-right">
                        </div>
                    </div>

                    <div class="panel panel-default b-gray-dark b-a-0 shadow-box">
                        <div class="panel-heading">

                            <div class="row">
                                <div class="col-md-7 col-sm-7 col-xs-7">

                                    <div class="btn-group" role="group" aria-label="...">
                                        <div class="btn-group" role="group" aria-label="...">
                                            <button type="button" class="btn btn-sm btn-default">Last Month</button>
                                            <button type="button" class="btn btn-sm btn-default">This Month</button>
                                            <button type="button" class="btn btn-sm btn-default">Today</button>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-3 col-sm-3 col-xs-3 col-xs-offset-2 col-sm-offset-2 col-md-offset-2 text-right">
                                    <div class="btn-group" role="group" aria-label="...">
                                        <button type="button" class="btn btn-sm btn-default"><i class="fa fa-pie-chart"></i></button>
                                        <button type="button" class="btn btn-sm btn-default"><i class="fa fa-bar-chart"></i></button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="highcharts-pie-with-legend-money-map"></div>
                        </div>
                    </div>
                </div>



                <div class="col-lg-7">

                    <div class="row m-b-2">
                        <div class="col-md-4 col-sm-4 col-xs-6">
                            <h4 class="m-b-0 ">Recent Funding</h4></div>
                        <div class="col-md-4 col-sm-4 col-xs-4 col-xs-offset-2 col-sm-offset-4 col-md-offset-4 text-right">
                            <button type="button" class="btn btn-sm btn-default">View All<i class="fa m-l-1 fa-angle-right"></i> </button>
                        </div>
                    </div>

                    <div class="panel panel-default b-a-0 shadow-box">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th class="small text-muted text-uppercase"><strong>Company</strong>
                                    </th>
                                    <th class="small text-muted text-uppercase"><strong>Amount</strong>
                                    </th>
                                    <th class="small text-muted text-uppercase"><strong>Date</strong>
                                    </th>
                                    <th class="small text-right text-muted text-uppercase"><strong>Action</strong>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="v-a-m"><span class="text-gray-darker">Watsica, Kozey and Schmeler</span></td>
                                    <td class="v-a-m"><span>$ 302.00</span></td>
                                    <td class="v-a-m">
                                        <span>12-08-2012</span>
                                    </td>
                                    <td class="v-a-m text-right">
                                        <a href="#">View <i class="fa fa-angle-right"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="v-a-m">
                                        <span class="text-gray-darker">Kutch, Bednar and Schimmel</span>
                                    </td>
                                    <td class="v-a-m">
                                        <span>$ 986.00</span>
                                    </td>
                                    <td class="v-a-m">
                                        <span>31-12-2016</span>
                                    </td>
                                    <td class="v-a-m text-right">
                                        <a href="#">View <i class="fa fa-angle-right"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="v-a-m">
                                        <span class="text-gray-darker">Bernhard, Kessler and Blick</span>
                                    </td>
                                    <td class="v-a-m">
                                        <span>$ 104.00</span>
                                    </td>
                                    <td class="v-a-m">
                                        <span>26-10-2012</span>
                                    </td>
                                    <td class="v-a-m text-right">
                                        <a href="#">View <i class="fa fa-angle-right"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="v-a-m">
                                        <span class="text-gray-darker">Rosenbaum - Murphy</span>
                                    </td>
                                    <td class="v-a-m">
                                        <span>$ 217.00</span>
                                    </td>
                                    <td class="v-a-m">
                                        <span>04-11-2015</span>
                                    </td>
                                    <td class="v-a-m text-right">
                                        <a href="#">View <i class="fa fa-angle-right"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="v-a-m">
                                        <span class="text-gray-darker">Champlin and Sons</span>
                                    </td>
                                    <td class="v-a-m">
                                        <span>$ 961.00</span>
                                    </td>
                                    <td class="v-a-m">
                                        <span>05-11-2014</span>
                                    </td>
                                    <td class="v-a-m text-right">
                                        <a href="#">View <i class="fa fa-angle-right"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="v-a-m">
                                        <span class="text-gray-darker">Johnson, Jerde and Kutch</span>
                                    </td>
                                    <td class="v-a-m">
                                        <span>$ 405.00</span>
                                    </td>
                                    <td class="v-a-m">
                                        <span>02-11-2012</span>
                                    </td>
                                    <td class="v-a-m text-right">
                                        <a href="#">View <i class="fa fa-angle-right"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="v-a-m">
                                        <span class="text-gray-darker">D&apos;Amore, Sporer and Goldner</span>
                                    </td>
                                    <td class="v-a-m">
                                        <span>$ 764.00</span>
                                    </td>
                                    <td class="v-a-m">
                                        <span>10-06-2013</span>
                                    </td>
                                    <td class="v-a-m text-right">
                                        <a href="#">View <i class="fa fa-angle-right"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="v-a-m">
                                        <span class="text-gray-darker">Hoppe, McLaughlin and Okuneva</span>
                                    </td>
                                    <td class="v-a-m">
                                        <span>$ 876.00</span>
                                    </td>
                                    <td class="v-a-m">
                                        <span>18-03-2015</span>
                                    </td>
                                    <td class="v-a-m text-right">
                                        <a href="#">View <i class="fa fa-angle-right"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="v-a-m">
                                        <span class="text-gray-darker">Grant, Bednar and Kozey</span>
                                    </td>
                                    <td class="v-a-m">
                                        <span>$ 392.00</span>
                                    </td>
                                    <td class="v-a-m">
                                        <span>29-06-2014</span>
                                    </td>
                                    <td class="v-a-m text-right">
                                        <a href="#">View <i class="fa fa-angle-right"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="v-a-m">
                                        <span class="text-gray-darker">Quitzon, Klocko and Effertz</span>
                                    </td>
                                    <td class="v-a-m">
                                        <span>$ 787.00</span>
                                    </td>
                                    <td class="v-a-m">
                                        <span>20-07-2013</span>
                                    </td>
                                    <td class="v-a-m text-right">
                                        <a href="#">View <i class="fa fa-angle-right"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>


            </div>




            <div class="row">


                <div class="col-lg-12">

                    <div class="row m-b-2">
                        <div class="col-md-4 col-sm-4 col-xs-4">
                            <h4 class="m-b-0 ">Invoices</h4></div>
                        <div class="col-md-4  col-sm-4  col-xs-4 col-xs-offset-4 col-sm-offset-4 col-md-offset-4 text-right">
                            <button type="button" class="btn btn-sm btn-default">Pending<i class="fa m-l-1 fa-caret-down"></i> </button>
                        </div>
                    </div>

                    <div class="panel panel-default b-a-0 shadow-box">

                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th class="small text-muted text-uppercase"><strong>Company</strong>
                                        </th>
                                        <th class="small text-muted text-uppercase"><strong>Amount</strong>
                                        </th>
                                        <th class="small text-muted text-uppercase"><strong>Date</strong>
                                        </th>
                                        <th class="small text-muted text-uppercase"><strong>Contact</strong>
                                        </th>
                                        <th class="small text-muted text-uppercase"><strong>Email</strong>
                                        </th>
                                        <th class="small text-right text-muted text-uppercase"><strong>Action</strong>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="v-a-m"><span class="text-gray-darker">King, Simonis and Hermann</span>
                                        </td>
                                        <td class="v-a-m"><span>$ 61.00</span>
                                        </td>
                                        <td class="v-a-m">
                                            <span>26-02-2011</span>
                                        </td>
                                        <td class="v-a-m">
                                            <span>Jean Sporer </span>
                                        </td>
                                        <td class="v-a-m">
                                            <a href="#"><span>Heber_Deckow@hotmail.com</span></a>
                                        </td>
                                        <td class="v-a-m text-right"> <a href="#">View <i class="fa fa-angle-right"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="v-a-m"><span class="text-gray-darker">Wuckert Group</span>
                                        </td>
                                        <td class="v-a-m"><span>$ 16.00</span>
                                        </td>
                                        <td class="v-a-m">
                                            <span>21-07-2016</span>
                                        </td>
                                        <td class="v-a-m">
                                            <span>Kole Russel </span>
                                        </td>
                                        <td class="v-a-m">
                                            <a href="#"><span>Cesar_Satterfield@yahoo.com</span></a>
                                        </td>
                                        <td class="v-a-m text-right"> <a href="#">View <i class="fa fa-angle-right"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="v-a-m"><span class="text-gray-darker">Windler, Schowalter and Cartwright</span>
                                        </td>
                                        <td class="v-a-m"><span>$ 109.00</span>
                                        </td>
                                        <td class="v-a-m">
                                            <span>10-11-2015</span>
                                        </td>
                                        <td class="v-a-m">
                                            <span>Perry Lueilwitz </span>
                                        </td>
                                        <td class="v-a-m">
                                            <a href="#"><span>Velva.Jones@yahoo.com</span></a>
                                        </td>
                                        <td class="v-a-m text-right"> <a href="#">View <i class="fa fa-angle-right"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="v-a-m"><span class="text-gray-darker">Kunde - Effertz</span>
                                        </td>
                                        <td class="v-a-m"><span>$ 578.00</span>
                                        </td>
                                        <td class="v-a-m">
                                            <span>23-10-2013</span>
                                        </td>
                                        <td class="v-a-m">
                                            <span>Elisa Rippin </span>
                                        </td>
                                        <td class="v-a-m">
                                            <a href="#"><span>Randall70@yahoo.com</span></a>
                                        </td>
                                        <td class="v-a-m text-right"> <a href="#">View <i class="fa fa-angle-right"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="v-a-m"><span class="text-gray-darker">Bartell, Lowe and Rippin</span>
                                        </td>
                                        <td class="v-a-m"><span>$ 14.00</span>
                                        </td>
                                        <td class="v-a-m">
                                            <span>29-04-2015</span>
                                        </td>
                                        <td class="v-a-m">
                                            <span>Jeramy Gibson </span>
                                        </td>
                                        <td class="v-a-m">
                                            <a href="#"><span>Maiya97@hotmail.com</span></a>
                                        </td>
                                        <td class="v-a-m text-right"> <a href="#">View <i class="fa fa-angle-right"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="v-a-m"><span class="text-gray-darker">McClure - Schuster</span>
                                        </td>
                                        <td class="v-a-m"><span>$ 173.00</span>
                                        </td>
                                        <td class="v-a-m">
                                            <span>02-11-2013</span>
                                        </td>
                                        <td class="v-a-m">
                                            <span>Jesse Murazik </span>
                                        </td>
                                        <td class="v-a-m">
                                            <a href="#"><span>Willy.Keeling@yahoo.com</span></a>
                                        </td>
                                        <td class="v-a-m text-right"> <a href="#">View <i class="fa fa-angle-right"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="v-a-m"><span class="text-gray-darker">Stark, Kuhic and Schroeder</span>
                                        </td>
                                        <td class="v-a-m"><span>$ 872.00</span>
                                        </td>
                                        <td class="v-a-m">
                                            <span>17-07-2013</span>
                                        </td>
                                        <td class="v-a-m">
                                            <span>Elza Ankunding </span>
                                        </td>
                                        <td class="v-a-m">
                                            <a href="#"><span>Lucas82@hotmail.com</span></a>
                                        </td>
                                        <td class="v-a-m text-right"> <a href="#">View <i class="fa fa-angle-right"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="v-a-m"><span class="text-gray-darker">Larkin - Wisoky</span>
                                        </td>
                                        <td class="v-a-m"><span>$ 541.00</span>
                                        </td>
                                        <td class="v-a-m">
                                            <span>01-04-2012</span>
                                        </td>
                                        <td class="v-a-m">
                                            <span>Albin Streich </span>
                                        </td>
                                        <td class="v-a-m">
                                            <a href="#"><span>Emile1@hotmail.com</span></a>
                                        </td>
                                        <td class="v-a-m text-right"> <a href="#">View <i class="fa fa-angle-right"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="v-a-m"><span class="text-gray-darker">Nader - Connelly</span>
                                        </td>
                                        <td class="v-a-m"><span>$ 891.00</span>
                                        </td>
                                        <td class="v-a-m">
                                            <span>01-08-2015</span>
                                        </td>
                                        <td class="v-a-m">
                                            <span>Kenyatta Stoltenberg </span>
                                        </td>
                                        <td class="v-a-m">
                                            <a href="#"><span>Joseph.Luettgen@gmail.com</span></a>
                                        </td>
                                        <td class="v-a-m text-right"> <a href="#">View <i class="fa fa-angle-right"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>


            </div>




            <div class="row">


                <div class="col-lg-9">

                    <div class="row m-b-2">
                        <div class="col-md-4">
                            <h4 class="m-b-0 ">Account Performance</h4></div>
                        <div class="col-md-4 col-md-offset-4 text-right">
                        </div>
                    </div>

                    <div class="panel panel-default b-a-0 shadow-box">
                        <div class="panel-body">
                            <div class="highcharts-area-with-missing-points"></div>
                        </div>
                    </div>
                </div>



                <div class="col-lg-3">

                    <div class="row m-b-2">
                        <div class="col-md-9">
                            <h4 class="m-b-0 ">Dashboard Settings</h4></div>
                        <div class="col-md-2 col-md-offset-2 text-right">
                        </div>
                    </div>

                    <div class="panel panel-default b-a-0 shadow-box">


                        <table class="table">
                            <tbody>
                                <tr>
                                    <td class="v-a-m">My Cash
                                        </td><td class="v-a-m text-right">
                                            <input type="checkbox" class="js-switch-small" checked/>
                                      </td>
                                </tr>
                                <tr>
                                    <td class="v-a-m">My Cap
                                        </td><td class="v-a-m text-right">
                                            <input type="checkbox" class="js-switch-small" checked/>
                                        </td>
                                </tr>
                                <tr>
                                    <td class="v-a-m">Recent Fundings
                                        </td><td class="v-a-m text-right">
                                            <input type="checkbox" class="js-switch-small" checked/>
                                        </td>
                                </tr>
                                <tr>
                                    <td class="v-a-m">Client List
                                        </td><td class="v-a-m text-right">
                                            <input type="checkbox" class="js-switch-small" checked/>
                                        </td>
                                </tr>
                                <tr>
                                    <td class="v-a-m">Invoice Creator
                                        </td><td class="v-a-m text-right">
                                            <input type="checkbox" class="js-switch-small" checked/>
                                        </td>
                                </tr>
                                <tr>
                                    <td class="v-a-m">Invoice Generator
                                        </td><td class="v-a-m text-right">
                                            <input type="checkbox" class="js-switch-small" checked/>
                                        </td>
                                </tr>
                                <tr>
                                    <td class="v-a-m">Sales Lead
                                        </td><td class="v-a-m text-right">
                                            <input type="checkbox" class="js-switch-small" checked/>
                                        </td>
                                </tr>
                                <tr>
                                    <td class="v-a-m">Q &amp; A
                                        </td><td class="v-a-m text-right">
                                            <input type="checkbox" class="js-switch-small" checked/>
                                        </td>
                                </tr>
                                <tr>
                                    <td class="v-a-m">Account Performance
                                        </td><td class="v-a-m text-right">
                                            <input type="checkbox" class="js-switch-small" checked/>
                                        </td>
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

    )
  }
}

export default Dashboard;

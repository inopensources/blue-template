import React, {Component} from 'react';

class Panel extends Component {
  render() {
    return (
        <div>
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="panel panel-default b-a-0 shadow-box">
                    <div className="panel-heading">Main Fundings</div>
                    <div className="panel-body"><h2 className="m-t-0 f-w-300"><sup>$</sup> <span> 71306.00</span></h2> <i className="fa fa-fw fa-caret-up text-success"></i> <span>$ 871.00</span></div>
				</div>
			</div>
		</div>
    )
  }
}

export default Panel;

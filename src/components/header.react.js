import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
       <div>
		   <div class="sub-navbar sub-navbar__header-breadcrumbs" >
				<div>
					<div class="row">
						<div class="col-lg-12 sub-navbar-column">
							<div class="sub-navbar-header">
								<h3>Financial</h3>
							</div>
							<ol class="breadcrumb navbar-text navbar-right no-bg">
								<li class="current-parent">
									<a class="current-parent" href="../index.html">
										<i class="fa fa-fw fa-home"></i>
									</a>
								</li>
								<li>
									<a href="/">
										Login
									</a>
								</li>
								<li class="active">Financial</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
	   </div>
    )
  }
}

export default Header;

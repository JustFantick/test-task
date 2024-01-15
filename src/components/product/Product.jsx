import React from 'react';
import './product.scss';
import StatusButton from '../status-button/StatusButton';
import NavBulletsList from '../nav-bullets/NavBulletsList';

const tableData = [
	{ name: 'Jane Cooper', company: 'Microsoft', phone: '(225) 555-0118', email: 'jane@microsoft.com', country: 'United States', isStatusActive: true },
	{ name: 'Floyd Miles', company: 'Yahoo', phone: '(205) 555-0100', email: 'floyd@yahoo.com', country: 'Kiribati', isStatusActive: false },
	{ name: 'Ronald Richards', company: 'Adobe', phone: '(302) 555-0107', email: 'ronald@adobe.com', country: 'Israel', isStatusActive: false },
	{ name: 'Marvin McKinney', company: 'Tesla', phone: '(252) 555-0126', email: 'marvin@tesla.com', country: 'Iran', isStatusActive: true },
	{ name: 'Jerome Bell', company: 'Google', phone: '(629) 555-0129', email: 'jerome@google.com', country: 'Réunion', isStatusActive: true },
	{ name: 'Kathryn Murphy', company: 'Microsoft', phone: '(406) 555-0120', email: 'kathryn@microsoft.com', country: 'Curaçao', isStatusActive: true },
	{ name: 'Jacob Jones', company: 'Yahoo', phone: '(208) 555-0112', email: 'jacob@yahoo.com', country: 'Brazil', isStatusActive: true },
	{ name: 'Kristin Watson', company: 'Facebook', phone: '(704) 555-0127', email: 'kristin@facebook.com', country: 'Åland Islands', isStatusActive: false },
]

const Product = () => {
	return (
		<div className="product">
			<div className="product__body">
				<div className="product-head">
					<div className="product-head__title">
						<h4>All Customers</h4>
						<h5>Active Members</h5>
					</div>

					<div className="product-head__search-field">
						<label>
							<div className="icon-search"></div>
							<input type="text" name="search" placeholder='Search' />
						</label>
					</div>

				</div>

				<div className="product-table">
					<table>
						<thead>
							<tr>
								<th className='no-wrap'>Customer Name</th>
								<th>Company</th>
								<th className='no-wrap'>Phone Number</th>
								<th>Email</th>
								<th>Country</th>
								<th><center>Status</center></th>
							</tr>
						</thead>

						<tbody>
							{tableData.map((row, id) => (
								<tr key={id}>
									<td className='no-wrap'>{row.name}</td>
									<td>{row.company}</td>
									<td className='no-wrap'>{row.phone}</td>
									<td>{row.email}</td>
									<td>{row.country}</td>
									<td>
										<center>
											<StatusButton isActive={row.isStatusActive} />
										</center>
									</td>
								</tr>
							))}

						</tbody>
					</table>

				</div>

				<div className="product-footer">
					<div className="product-footer__text">Showing data 1 to 8 of  256K entries</div>

					<div className="product-footer__page-bullets">
						<NavBulletsList />
					</div>


				</div>

			</div>

		</div>
	)
}

export default Product
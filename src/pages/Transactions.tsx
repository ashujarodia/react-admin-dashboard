import { ReactElement, useCallback, useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import TableHOC from '../components/TableHOC';
import { Column } from 'react-table';
import { Link } from 'react-router-dom';

interface DataType {
	user: string;
	amount: number;
	discount: number;
	quantity: number;
	status: ReactElement;
	action: ReactElement;
}

const columns: Column<DataType>[] = [
	{
		Header: 'User',
		accessor: 'user',
	},
	{
		Header: 'Amount',
		accessor: 'amount',
	},
	{
		Header: 'Discount',
		accessor: 'discount',
	},
	{
		Header: 'Quantity',
		accessor: 'quantity',
	},
	{
		Header: 'Status',
		accessor: 'status',
	},
	{
		Header: 'Action',
		accessor: 'action',
	},
];
const arr: DataType[] = [
	{
		user: 'Product 1',
		amount: 50,
		discount: 10,
		quantity: 2,
		status: <span className='red'>Processing</span>,
		action: <Link to={'/admin/transaction/id'}>Manage</Link>,
	},
	{
		user: 'Product 2',
		amount: 30,
		discount: 5,
		quantity: 1,
		status: <span className='green'>Shipped</span>,
		action: <Link to={'/admin/transaction/id'}>Manage</Link>,
	},
];

const Transactions = () => {
	const [data] = useState<DataType[]>(arr);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const Table = useCallback(TableHOC<DataType>(columns, data, 'dashboard-product-box', 'Transactions'), []);
	return (
		<div className='admin-container'>
			<AdminSidebar />
			<main>{Table()}</main>
		</div>
	);
};

export default Transactions;

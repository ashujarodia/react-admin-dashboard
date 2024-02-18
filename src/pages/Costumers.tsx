import { Column } from 'react-table';
import AdminSidebar from '../components/AdminSidebar';
import { ReactElement, useCallback, useState } from 'react';
import TableHOC from '../components/TableHOC';
import { FaTrash } from 'react-icons/fa';

interface DataType {
	avatar: ReactElement;
	name: string;
	email: string;
	gender: string;
	role: string;
	action: ReactElement;
}

const columns: Column<DataType>[] = [
	{
		Header: 'Avatar',
		accessor: 'avatar',
	},
	{
		Header: 'Name',
		accessor: 'name',
	},
	{
		Header: 'Email',
		accessor: 'email',
	},
	{
		Header: 'Gender',
		accessor: 'gender',
	},
	{
		Header: 'Role',
		accessor: 'role',
	},
	{
		Header: 'Action',
		accessor: 'action',
	},
];

const img1 = 'https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg';

const img2 =
	'https://www.shutterstock.com/shutterstock/photos/1617540484/display_1500/stock-photo-closeup-photo-of-amazing-short-hairdo-lady-looking-up-empty-space-deep-thinking-creative-person-arm-1617540484.jpg';

const img3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3cmFFrjCK7ARm1ePt1EPdhHRApGOMrH3KBysiY_3veGXB8XvxzXhYg_rb_CRafUTbKM&usqp=CAU';

const arr: DataType[] = [
	{
		avatar: (
			<img
				style={{ borderRadius: '50%' }}
				src={img1}
				alt='Shoes'
			/>
		),
		name: 'John Doe',
		email: 'john.doe@example.com',
		gender: 'Male',
		role: 'Admin',
		action: (
			<button>
				<FaTrash />
			</button>
		),
	},
	{
		avatar: (
			<img
				style={{ borderRadius: '50%' }}
				src={img2}
				alt='Shoes'
			/>
		),
		name: 'Jane Smith',
		email: 'jane.smith@example.com',
		gender: 'Female',
		role: 'User',
		action: (
			<button>
				<FaTrash />
			</button>
		),
	},
	{
		avatar: (
			<img
				style={{ borderRadius: '50%' }}
				src={img3}
				alt='Shoes'
			/>
		),
		name: 'Alex Johnson',
		email: 'alex.johnson@example.com',
		gender: 'Male',
		role: 'User',
		action: (
			<button>
				<FaTrash />
			</button>
		),
	},
];

const Costumers = () => {
	const [data] = useState<DataType[]>(arr);
	const Table = useCallback(TableHOC<DataType>(columns, data, 'dashboard-product-box', 'Costumers', true), []);

	return (
		<div className='admin-container'>
			{/* Sidebar */}
			<AdminSidebar />
			<main>{Table()}</main>
		</div>
	);
};

export default Costumers;

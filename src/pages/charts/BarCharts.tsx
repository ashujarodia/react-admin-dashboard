import AdminSidebar from '../../components/AdminSidebar';
import { BarChart } from '../../components/Charts';

const BarCharts = () => {
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	return (
		<div className='admin-container'>
			<AdminSidebar />
			<main className='chart-container'>
				<h1>Bar Charts</h1>
				<section>
					<BarChart
						data_1={[200, 33, 33, 422, 225, 223, 234]}
						data_2={[234, 333, 313, 224, 425, 23, 234]}
						title_1='Products'
						title_2='Users'
						bgColor_1={'hsl(260, 50%, 30%'}
						bgColor_2={'hsl(360, 90%, 90%'}
					/>
					<h2>Top Selling Products & Top Costumers</h2>
				</section>
				<section>
					<BarChart
						horizontal={true}
						data_1={[200, 33, 33, 422, 225, 223, 234, 222, 33, 323, 234, 232]}
						data_2={[]}
						title_1='Products'
						title_2=''
						bgColor_1={'hsl(189, 40%, 50%'}
						bgColor_2={''}
						labels={months}
					/>
					<h2>Orders throughout the year</h2>
				</section>
			</main>
		</div>
	);
};

export default BarCharts;

import AdminSidebar from '../../components/AdminSidebar';
import { LineChart } from '../../components/Charts';

const LineCharts = () => {
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	return (
		<div className='admin-container'>
			<AdminSidebar />
			<main className='chart-container'>
				<h1>Line Charts</h1>
				<section>
					<LineChart
						data={[200, 33, 33, 422, 225, 223, 234, 33, 4, 343, 443, 43]}
						label='Users'
						borderColor='rgb(53, 162, 255)'
						backgroundColor='rgb(53, 162, 255, 0.5)'
						labels={months}
					/>
					<h2>Active users</h2>
				</section>
				<section>
					<LineChart
						data={[200, 33, 33, 422, 225, 223, 234, 33, 4, 343, 443, 43]}
						label='Products'
						backgroundColor='hsla(129, 80%, 40%, 0.4)'
						borderColor='hsl(129, 80%, 40%)'
						labels={months}
					/>
					<h2>Total Products (SKU)</h2>
				</section>
				<section>
					<LineChart
						data={[200, 33, 33, 422, 225, 223, 234, 33, 4, 343, 443, 43]}
						label='Revenue'
						borderColor='rgb(53, 162, 255)'
						backgroundColor='rgb(53, 162, 255, 0.5)'
						labels={months}
					/>
					<h2>Total Revenue</h2>
				</section>
				<section>
					<LineChart
						data={[200, 33, 33, 422, 225, 223, 234, 33, 4, 343, 443, 43]}
						label='Discount'
						borderColor='rgb(53, 162, 255)'
						backgroundColor='rgb(53, 162, 255, 0.5)'
						labels={months}
					/>
					<h2>Discount Alloted</h2>
				</section>
			</main>
		</div>
	);
};

export default LineCharts;

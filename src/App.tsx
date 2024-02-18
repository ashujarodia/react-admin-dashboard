import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from './components/Loader';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Products = lazy(() => import('./pages/Products'));
const Transactions = lazy(() => import('./pages/Transactions'));
const Costumers = lazy(() => import('./pages/Costumers'));
const NewProduct = lazy(() => import('./pages/management/NewProduct'));
const ProductManagement = lazy(() => import('./pages/management/ProductManagement'));
const TransactionManagement = lazy(() => import('./pages/management/TransactionManagement'));
const BarCharts = lazy(() => import('./pages/charts/BarCharts'));
const PieCharts = lazy(() => import('./pages/charts/PieCharts'));
const LineCharts = lazy(() => import('./pages/charts/LineCharts'));
const Stopwatch = lazy(() => import('./pages/apps/Stopwatch'));
const Coupen = lazy(() => import('./pages/apps/Coupen'));
const Toss = lazy(() => import('./pages/apps/Toss'));

function App() {
	return (
		<Router>
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route
						path='*'
						element={
							<Link to={'/admin/dashboard'}>
								<button id='close-sidebar'>Visit Dashboard </button>
							</Link>
						}
					/>
					<Route
						path='/admin/dashboard'
						element={<Dashboard />}
					/>
					<Route
						path='/admin/products'
						element={<Products />}
					/>
					<Route
						path='/admin/transactions'
						element={<Transactions />}
					/>
					<Route
						path='/admin/costumers'
						element={<Costumers />}
					/>

					{/* Charts */}
					<Route
						path='/admin/chart/bar'
						element={<BarCharts />}
					/>
					<Route
						path='/admin/chart/pie'
						element={<PieCharts />}
					/>
					<Route
						path='/admin/chart/line'
						element={<LineCharts />}
					/>

					{/* Apps */}
					<Route
						path='/admin/app/stopwatch'
						element={<Stopwatch />}
					/>
					<Route
						path='/admin/app/coupen'
						element={<Coupen />}
					/>
					<Route
						path='/admin/app/toss'
						element={<Toss />}
					/>

					{/* Management */}
					<Route
						path='admin/product/new'
						element={<NewProduct />}
					/>
					<Route
						path='admin/product/:id'
						element={<ProductManagement />}
					/>
					<Route
						path='admin/transaction/:id'
						element={<TransactionManagement />}
					/>
				</Routes>
			</Suspense>
		</Router>
	);
}

export default App;

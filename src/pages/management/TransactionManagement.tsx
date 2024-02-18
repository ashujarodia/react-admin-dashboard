import { useState } from 'react';
import AdminSidebar from '../../components/AdminSidebar';
import { OrderItemType, OrderType } from '../../types';
import { Link } from 'react-router-dom';

const img = 'https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/r/e/m/-original-imagsfdvuffvqx4x.jpeg?q=90&crop=false';

const orderItems: OrderItemType[] = [{ name: 'Puma Shoes', photo: img, _id: 'asdfad', quantity: 4, price: 5000 }];

const TransactionManagement = () => {
	const [order, setOrder] = useState<OrderType>({
		name: 'Ashu',
		address: '33 lksd d',
		city: 'New York',
		state: 'California',
		country: 'India',
		pincode: 43434,
		status: 'Processing',
		subtotal: 34343,
		discount: 3434,
		shippingCharges: 0,
		tax: 444,
		total: 33232,
		orderItems,
		_id: 'asdfadf',
	});
	const { name, address, city, country, pincode, subtotal, shippingCharges, tax, discount, total, status } = order;

	const updateHandler = () => {
		setOrder((prev) => ({
			...prev,
			status: prev.status === 'Processing' ? 'Shipped' : 'Delivered',
		}));
	};
	return (
		<div className='admin-container'>
			<AdminSidebar />
			<main className='product-management'>
				<section style={{ padding: '2rem' }}>
					<h2>Order Items</h2>
					{order.orderItems.map((item) => (
						<ProductCard
							name={item.name}
							photo={item.photo}
							quantity={item.quantity}
							price={item.price}
							_id={item._id}
						/>
					))}
				</section>
				<article className='shipping-info-card'>
					<h1>Order Info</h1>
					<h5>User Info</h5>
					<p>Name: {name}</p>
					<p>Address : {`${address}, ${city}, , ${country}, ${pincode}`}</p>
					<h5>Amount Info</h5>
					<p>Subtotal : {subtotal}</p>
					<p>Shipping Charges : {shippingCharges}</p>
					<p>Tax : {tax}</p>
					<p>Discount : {discount}</p>
					<p>Total : {total}</p>
					<h5>Status info</h5>
					<p>
						Status : <span className={status === 'Delivered' ? 'purple' : status === 'Shipped' ? 'green' : 'red'}>{status}</span>
					</p>
					<button onClick={updateHandler}>Process Status</button>
				</article>
			</main>
		</div>
	);
};

const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => (
	<div className='transaction-product-card'>
		<img
			src={photo}
			alt='name'
		/>
		<Link to={`product/${_id}`}>{name}</Link>
		<span>
			${price} X {quantity} = ${price * quantity}
		</span>
	</div>
);

export default TransactionManagement;

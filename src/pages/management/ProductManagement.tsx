import { ChangeEvent, FormEvent, useState } from 'react';
import AdminSidebar from '../../components/AdminSidebar';

const ProductManagement = () => {
	const img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqRBrJvP4gf2eJujW4wW3djJgPC7OBR5HF84dnagXrTuL4QhXwAHlOtsrP7q4knM94dEQ&usqp=CAU';

	const [name, setName] = useState<string>('Puma shoues');
	const [price, setPrice] = useState<number>(2000);
	const [stock, setStock] = useState<number>(10);
	const [photo, setPhoto] = useState<string>(img);

	const [nameUpdate, setNameUpdate] = useState<string>(name);
	const [priceUpdate, setPriceUpdate] = useState<number>(price);
	const [stockUpdate, setStockUpdate] = useState<number>(stock);
	const [photoUpdate, setPhotoUpdate] = useState<string>(photo);

	const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const file: File | undefined = e.target.files?.[0];
		const reader: FileReader = new FileReader();
		if (file) {
			reader.readAsDataURL(file);
			reader.onloadend = () => {
				if (typeof reader.result === 'string') {
					setPhotoUpdate(reader.result);
				}
			};
		}
	};

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setName(nameUpdate);
		setPrice(priceUpdate);
		setStock(stockUpdate);
		setPhoto(photoUpdate);
	};

	return (
		<div className='admin-container'>
			<AdminSidebar />
			<main className='product-management'>
				<section>
					<strong>Id - asdfadsf</strong>
					<img
						src={photo}
						alt='Product'
					/>
					<p>{name}</p>
					{stock > 0 ? <span className='green'>{stock} Available</span> : <span className='red'>Not available</span>}
					<h3>${price}</h3>
				</section>
				<article>
					<form onSubmit={submitHandler}>
						{' '}
						<h2>Manage Product</h2>
						<div>
							<label>Name</label>
							<input
								type='text'
								id='name'
								placeholder='Name'
								value={nameUpdate}
								onChange={(e) => setNameUpdate(e.target.value)}
								required
							/>
						</div>
						<div>
							<label>Price</label>
							<input
								type='number'
								id='price'
								placeholder='Price'
								value={priceUpdate}
								onChange={(e) => setPriceUpdate(Number(e.target.value))}
								required
							/>
						</div>
						<div>
							<label>Stock</label>
							<input
								type='number'
								id='stock'
								placeholder='Stock'
								value={stockUpdate}
								onChange={(e) => setStockUpdate(Number(e.target.value))}
								required
							/>
						</div>
						<div>
							<label>Photo</label>
							<input
								type='file'
								id='stock'
								onChange={changeImageHandler}
								required
							/>
						</div>
						{photoUpdate && (
							<img
								src={photoUpdate}
								alt='New Image'
							/>
						)}
						<button type='submit'>Update</button>
					</form>
				</article>
			</main>
		</div>
	);
};

export default ProductManagement;

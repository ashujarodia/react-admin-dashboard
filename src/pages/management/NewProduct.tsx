import { ChangeEvent, useState } from 'react';
import AdminSidebar from '../../components/AdminSidebar';

const NewProduct = () => {
	const [name, setName] = useState<string>('');
	const [price, setPrice] = useState<number>();
	const [stock, setStock] = useState<number>();
	const [photo, setPhoto] = useState<string>('');

	const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const file: File | undefined = e.target.files?.[0];
		const reader: FileReader = new FileReader();
		if (file) {
			reader.readAsDataURL(file);
			reader.onloadend = () => {
				if (typeof reader.result === 'string') {
					setPhoto(reader.result);
				}
			};
		}
	};

	return (
		<div className='admin-container'>
			<AdminSidebar />
			<main className='product-management'>
				<article>
					<form>
						{' '}
						<h2>New Product</h2>
						<div>
							<label>Name</label>
							<input
								type='text'
								id='name'
								placeholder='Name'
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
							/>
						</div>
						<div>
							<label>Price</label>
							<input
								type='number'
								id='price'
								placeholder='Price'
								value={price}
								onChange={(e) => setPrice(Number(e.target.value))}
								required
							/>
						</div>
						<div>
							<label>Stock</label>
							<input
								type='number'
								id='stock'
								placeholder='Stock'
								value={stock}
								onChange={(e) => setStock(Number(e.target.value))}
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
						{photo && (
							<img
								src={photo}
								alt='New Image'
							/>
						)}
						<button type='submit'>Create</button>
					</form>
				</article>
			</main>
		</div>
	);
};

export default NewProduct;

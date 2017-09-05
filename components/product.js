export default({product}) => (
	<div>
		<img src={product.url} alt />
		<ul>
			<li>{product.name}</li>
			<li className="price">{product.price}</li>
			<li className={product.available === 'true' ? 'in-stock' : 'out-of-stock'}>{product.available === 'true' ? 'In stock' : 'Out of stock'}</li>
		</ul>
		<style jsx>{`
			ul {
				padding: 0;
			}
			img {
				display: block;
				margin-left: auto;
				margin-right: auto;
				padding-top: 20px;
				height: 300px;
				weight: 300px;
			}
			li {
				list-style-type: none;
				display: flex;
				margin-top: 5px;
				padding: 0 20px;
			}
			.price {
				color: gray;
			}
			.in-stock {
				color: green;
			}
			.out-of-stock {
				color: red;
			}
		`}</style>
	</div>
)

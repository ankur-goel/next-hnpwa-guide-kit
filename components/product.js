export default({product}) => (
	<div>
		<img src={product.url} />
		<ul>
			<li>{product.name}</li>
			<li className="price">{product.price}</li>
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
		`}</style>
	</div>
)

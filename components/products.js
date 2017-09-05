import Link from 'next/link'

export default({type, products, totalPage = 1, page = 1}) => (
	<div>
		<ui>
		{
			Object.keys(products).map(key => (
				<Link href={`/product?id=${key}`}>
					<li key={key}>
						<span className="picture">
							<img src={products[key].url} />
						</span>
						<span className="item">
							<div><a>{products[key].name}</a></div>
							<div className="info">
								<span>
									<a>{products[key].price}</a>
								</span>
							</div>
						</span>
					</li>
				</Link>	
			))
		}
		</ui>
		<footer>
		{/* {
			page <= totalPage &&
				<Link href={`${type}?page=${Number(page) + 1}`}><a>More</a></Link>
		} */}
		</footer>
		<style jsx>{`
			li {
				list-style-type: none;
				position: relative;
				padding: 20px 30px 20px 80px;
				border-bottom: 1px solid #eee;
				line-height: 20px;
			}

			.picture {
				position: absolute;
				top: 35%;
				left: 0;
				width: 80px;
				text-align: center;
				margin-top: -10px;
			}

			img {
				width: 50px;
				height: 50px;
			}

			.item {
				flex-grow: 100;
				text-align: left;
				font-size: 18px;
			}

			.item a {
				color: #0e0e0e;
				text-decoration: none;
			}

			.item a:hover {
				color: #0e0e0e;
				text-decoration: underline;
			}

			.info a {
				color: gray;
				text-decoration: none;
			}

			.info a:hover {
				text-decoration: underline;
			}

			.info {
				font-size: 14px;
			}

			footer {
				padding: 15px
			}

			footer a {
				color: #0e0e0e;
				text-decoration: none;
			}
		`}</style>
	</div>
)

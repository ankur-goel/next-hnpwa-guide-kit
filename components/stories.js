import Link from 'next/link'

export default({type, stories, totalPage = 1, page = 1}) => (
	<div>
		<ui>
		{
			stories.map((s, i) => (
				<li key={s || i}>
					<span className="score">
						<img src={s.url} />
					</span>
					<span className="item">
						<div><a>{s.name}</a></div>
						<div className="info">
							<span>
								<a>{s.price}</a>
							</span>
						</div>
					</span>
				</li>
			))
		}
		</ui>
		<footer>
		{
			page <= totalPage &&
				<Link href={`${type}?page=${Number(page) + 1}`}><a>More</a></Link>
		}
		</footer>
		<style jsx>{`
			li {
				list-style-type: none;
				position: relative;
				padding: 20px 30px 20px 80px;
				border-bottom: 1px solid #eee;
				line-height: 20px;
			}

			.score {
				font-size: 18px;
				font-weight: 700;
				position: absolute;
				top: 50%;
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

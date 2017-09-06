import React from 'react'
import Page from '../components/page'

export default class extends React.Component {
	static async getInitialProps() {
		return {}
	}

	render() {
		return <Page>
			<div>
                <h2>Welcome to E-commerce PWA!</h2>
                <style jsx>{`
					h2 {
                        text-align: center;
                    }
                `}</style>
            </div>
		</Page>
	}
}
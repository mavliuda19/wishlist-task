import React from 'react'
import styled from 'styled-components'
import Categories from '../categories/Categories'
import Header from '../header/Header'
import Products from '../products/Products'

const Main = () => {
	return (
		<Container>
			<Header />
			<Categories />
			<Products />
		</Container>
	)
}

export default Main

const Container = styled.main`
	max-width: 1360px;
	margin: 0 auto;
	padding: 0 10px;
	@media (max-width: 1020px) {
		width: 1000px;
	}
`

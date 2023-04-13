import { Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { ReactComponent as BackIcon } from '../../assets/icons/back.svg'
import { StyledButton } from '../categories/Categories'

const ProductForm = () => {
	return (
		<Container>
			<Button startIcon={<BackIcon />} variant='text'>
				Back
			</Button>
			<div>
				<StyledButton
					variant='outlined'
					sx={{ padding: '10px 116.5px' }}
				>
					Add product
				</StyledButton>
				<StyledButton
					variant='contained'
					sx={{ padding: '10px 120px' }}
				>
					Add to cart
				</StyledButton>
			</div>
		</Container>
	)
}

export default ProductForm

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-top: 20px;
	margin-bottom: 70px;
	> div {
		display: flex;
		gap: 20px;
		flex-wrap: wrap;
	}
`

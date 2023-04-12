import React from 'react'
import styled from 'styled-components'
import Button from '../UI/Button'
import { Button as MuiButton } from '@mui/material'

const Categories = () => {
	return (
		<Wrapper>
			<Container>
				<Button active>All products</Button>
				<Button>Phones</Button>
				<Button>Accessories</Button>
			</Container>
			<StyledButton variant='outlined' sx={{ padding: '8px 62.5px' }}>
				New category
			</StyledButton>
		</Wrapper>
	)
}

export default Categories

const Wrapper = styled.div`
	width: 100%;
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
`
const Container = styled.div`
	display: flex;
	gap: 30px;
`

export const StyledButton = styled(MuiButton)`
	&.MuiButton-root {
		font-size: 12px;
		font-weight: 700;
		line-height: 130%;
		border-color: #405eff;
		font-size: 12px;
		line-height: 130%;
		flex: none;
		order: 0;
		flex-grow: 0;
	}
`

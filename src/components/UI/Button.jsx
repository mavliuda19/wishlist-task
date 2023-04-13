import React from 'react'
import { Button as MuiButton } from '@mui/material'
import styled from 'styled-components'
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg'

const Button = ({ children, id, deleteHandler, ...props }) => {
	return (
		<StyledButton
			variant='contained'
			endIcon={
				<DeleteIcon
					onClick={() => {
						deleteHandler(id)
					}}
				/>
			}
			{...props}
		>
			{children}
		</StyledButton>
	)
}

export default Button

const StyledButton = styled(MuiButton)`
	&.MuiButton-root {
		display: flex;
		align-items: center;
		background-color: ${({ active }) => (active ? '#B2BAC7' : '#E9EBEF')};
		color: ${({ active }) => (active ? '#FFFFFF' : '#303031')};
		font-weight: 700;
		font-size: 12px;
		line-height: 130%;
		:hover,
		:active {
			background-color: #dfe0e2;
		}
	}
`

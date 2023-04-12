import React from 'react'
import styled from 'styled-components'
import {
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Switch,
	FormControlLabel,
	Button,
	Paper,
} from '@mui/material'

import { StyledButton } from '../categories/Categories'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ClearIcon from '@mui/icons-material/Clear'
import { ReactComponent as BackIcon } from '../../assets/icons/back.svg'
import { DATA } from '../common/constants'
import ProductImage from '../../assets/images/image.png'

const Products = () => {
	return (
		<>
			<Wrapper elevation={0}>
				<StyledTable>
					<TableHead>
						<TableRow>
							<StyledTableCellHead>Photo</StyledTableCellHead>
							<StyledTableCellHead>
								Product Code
							</StyledTableCellHead>
							<StyledTableCellHead>Name</StyledTableCellHead>
							<StyledTableCellHead>Stock</StyledTableCellHead>
							<StyledTableCellHead>QTY</StyledTableCellHead>
							<StyledTableCellHead>Price</StyledTableCellHead>
							<StyledTableCellHead>
								<FormControlLabel
									control={<Switch defaultChecked />}
									label='Image'
								/>
							</StyledTableCellHead>
						</TableRow>
					</TableHead>

					<TableBody>
						{DATA.map((item) => {
							return (
								<StyledTableRow>
									<StyledTableCell>
										<StyledImage
											src={ProductImage}
											alt='product img'
										/>
									</StyledTableCell>
									<StyledTableCell>
										{item.product_code}
									</StyledTableCell>
									<StyledTableCell>
										<p>{item.name}</p>
									</StyledTableCell>
									<StyledTableCell sx={{ width: '80px' }}>
										{item.stock}
									</StyledTableCell>
									<StyledTableCell sx={{ width: '80px' }}>
										<p>{item.qty}</p>
									</StyledTableCell>
									<StyledTableCell sx={{ width: '100px' }}>
										<div>
											<p>{item.price_1}$</p>
											{item.price_2}$
										</div>
									</StyledTableCell>
									<StyledTableCellAction>
										<StyledButton
											sx={{ padding: '9px 14px' }}
											variant='outlined'
										>
											Add to cart
										</StyledButton>
										<div>
											<FavoriteIcon color='primary' />
										</div>
										<ClearIcon />
									</StyledTableCellAction>
								</StyledTableRow>
							)
						})}
					</TableBody>
				</StyledTable>
			</Wrapper>
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
		</>
	)
}

export default Products
const Wrapper = styled(Paper)`
	&.MuiPaper-root {
		width: 100%;
		height: 501px;
		overflow-y: scroll;
		background: transparent;
		border: none;
		overflow-x: hidden;
		::-webkit-scrollbar {
			width: 7px;
			height: 150px;
		}
		::-webkit-scrollbar-thumb {
			-webkit-border-radius: 10px;
			border-radius: 10px;
			background: #e9ebef;
		}
	}
`

const StyledTable = styled(Table)`
	&.MuiTable-root {
		border-collapse: separate;
		border-spacing: 0px 10px;
	}
`

const StyledTableCellHead = styled(TableCell)`
	&.MuiTableCell-head {
		border: none;
		padding-bottom: 0px;
		text-align: start;
		color: #303031;
		:last-child {
			text-align: end;
		}
		:first-child {
			text-align: center;
		}
	}
`
const StyledTableCell = styled(TableCell)`
	&.MuiTableCell-body {
		border: none;
	}
	p {
		font-weight: 700;
	}
	> div {
		text-align: center;
	}
`
const StyledTableCellAction = styled(TableCell)`
	div {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 5px;
		width: 40px;
		height: 40px;

		background: #ffffff;
		border: 1px solid #e9ebef;
		border-radius: 45px;
	}
	&.MuiTableCell-body {
		border: none;
		display: flex;
		align-items: center;
		gap: 20px;
		margin-top: 34px;
	}
`
const StyledTableRow = styled(TableRow)`
	&.MuiTableRow-root {
		background: #ffffff;
		border-radius: 2px;
		padding: 5px 10px;
	}
`
const StyledImage = styled.img`
	width: 100px;
	height: 100px;
`
const Container = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
	> div {
		display: flex;
		gap: 20px;
	}
	margin-bottom: 70px;
`

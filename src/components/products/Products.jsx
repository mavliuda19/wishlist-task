import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Switch,
	FormControlLabel,
	Paper,
	CircularProgress,
	Stack,
} from '@mui/material'

import { StyledButton } from '../categories/Categories'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ClearIcon from '@mui/icons-material/Clear'
import { DATA } from '../common/constants'
import ProductImage from '../../assets/images/image.png'
import ProductForm from './ProductForm'
import Notification from '../UI/Notification'

const Products = () => {
	const [checked, setChecked] = useState(false)
	const [products, setProducts] = useState(DATA)
	const [open, setOpen] = useState({
		isOpen: false,
		vertical: 'top',
		horizontal: 'right',
	})
	const [isLoading, setIsLoading] = useState(false)

	const switchHandler = (event) => {
		setChecked(event.target.checked)
	}

	const deleteHandler = (id) => {
		setProducts((current) => current.filter((product) => product.id !== id))
		setOpen({ ...open, isOpen: true })
		setIsLoading(true)
	}

	const handleClose = (event, reason) => {
		console.log(reason)
		if (reason === 'clickaway') {
			return
		}

		setOpen({ ...open, isOpen: false })
	}

	useEffect(() => {
		if (isLoading) {
			setTimeout(() => {
				setIsLoading(false)
			}, 800)
		}
	}, [isLoading])

	return (
		<>
			<Notification
				open={open}
				message='Deleted Successfully'
				handleClose={handleClose}
			/>
			<Wrapper elevation={0}>
				{isLoading ? (
					<Stack alignItems='center'>
						<CircularProgress />
					</Stack>
				) : (
					<StyledTable>
						<TableHead
							sx={{
								position: 'sticky',
								top: '0',
								zIndex: '1',
								backgroundColor: ' #F6F7F9',
							}}
						>
							<TableRow>
								{checked && (
									<StyledTableCellHead>
										Photo
									</StyledTableCellHead>
								)}

								<StyledTableCellHead>
									Product Code
								</StyledTableCellHead>
								<StyledTableCellHead>Name</StyledTableCellHead>
								<StyledTableCellHead>Stock</StyledTableCellHead>
								<StyledTableCellHead>QTY</StyledTableCellHead>
								<StyledTableCellHead>Price</StyledTableCellHead>
								<StyledTableCellHead>
									<FormControlLabel
										control={
											<Switch
												checked={checked}
												onChange={switchHandler}
											/>
										}
										label='Image'
									/>
								</StyledTableCellHead>
							</TableRow>
						</TableHead>

						<TableBody>
							{products.map((item) => {
								return (
									<StyledTableRow key={item.id}>
										{checked && (
											<StyledTableCell>
												<StyledImage
													src={ProductImage}
													alt='product img'
												/>
											</StyledTableCell>
										)}

										<StyledTableCell>
											{item.product_code}
										</StyledTableCell>
										<StyledTableCell>
											<p>{item.name}</p>
										</StyledTableCell>
										<StyledTableCell>
											{item.stock}
										</StyledTableCell>
										<StyledTableCell>
											<p>{item.qty}</p>
										</StyledTableCell>
										<StyledTableCell
										// sx={{ width: '100px' }}
										>
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
											<ClearIcon
												style={{ marginRight: '5px' }}
												onClick={() =>
													deleteHandler(item.id)
												}
											/>
										</StyledTableCellAction>
									</StyledTableRow>
								)
							})}
						</TableBody>
					</StyledTable>
				)}
			</Wrapper>
			<ProductForm />
		</>
	)
}

export default Products

const Wrapper = styled(Paper)`
	&.MuiPaper-root {
		width: 100%;
		background: transparent;
		border: none;
		height: 400px;
		overflow-y: scroll;
	}
	::-webkit-scrollbar {
		width: 7px;
	}
	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background: #e9ebef;
		height: 150px;
	}
`

const StyledTable = styled(Table)`
	&.MuiTable-root {
		border-collapse: separate;
		border-spacing: 0px 10px;
		width: 100%;
	}
`
const Title = styled.p`
	text-align: center;
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
	svg {
		cursor: pointer;
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
	@media (max-width: 1020px) {
		width: 80px;
		height: 80px;
	}
`

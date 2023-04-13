import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../UI/Button'
import { Button as MuiButton } from '@mui/material'
import FormDialog from '../UI/Modal'
import { TABS } from '../common/constants'
import Notification from '../UI/Notification'

const Categories = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [tabs, setTabs] = useState(TABS)
	const [active, setActive] = useState(tabs[0])
	const [open, setOpen] = useState({
		isOpen: false,
		vertical: 'top',
		horizontal: 'right',
	})

	const handleClickOpen = () => {
		setIsModalOpen(true)
	}

	const handleCloseModal = () => {
		setIsModalOpen(false)
	}

	const submitHandler = (tab) => {
		setTabs([...tabs, tab])
	}

	const deleteHandler = (id) => {
		setTabs((current) => current.filter((tab) => tab.id !== id))
		setOpen({ ...open, isOpen: true })
	}

	const handleClose = (event, reason) => {
		console.log(reason)
		if (reason === 'clickaway') {
			return
		}

		setOpen({ ...open, isOpen: false })
	}

	return (
		<>
			<Notification
				open={open}
				message='Deleted Successfully'
				handleClose={handleClose}
			/>
			<FormDialog
				open={isModalOpen}
				handleClose={handleCloseModal}
				submitHandler={submitHandler}
			/>
			<Wrapper>
				<Container>
					{tabs.map((tab) => {
						return (
							<Button
								deleteHandler={deleteHandler}
								key={tab.id}
								active={active === tab}
								onClick={() => setActive(tab)}
								id={tab.id}
							>
								{tab.title}
							</Button>
						)
					})}
				</Container>
				<StyledButton
					variant='outlined'
					sx={{ padding: '8px 62.5px' }}
					onClick={handleClickOpen}
				>
					New category
				</StyledButton>
			</Wrapper>
		</>
	)
}

export default Categories

const Wrapper = styled.div`
	width: 100%;
	margin-top: 20px;
	margin-bottom: 5px;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`
const Container = styled.div`
	display: flex;
	gap: 30px;
	flex-wrap: wrap;
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
		@media (max-width: 703px) {
			margin-top: 10px;
		}
	}
`

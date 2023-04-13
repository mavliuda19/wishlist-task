import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { useState } from 'react'

export default function FormDialog({ open, handleClose, submitHandler }) {
	const [inputValue, setinputValue] = useState('')

	const changeHandler = (e) => {
		console.log(e.target.value)
		setinputValue(e.target.value)
	}

	const handleSubmit = () => {
		const category = {
			title: inputValue,
			id: Date.now(),
		}
		if (inputValue.trim().length > 0) {
			submitHandler(category)
			handleClose()
		}
		setinputValue('')
	}
	return (
		<Dialog
			open={open}
			onClose={handleClose}
			sx={{
				'& .MuiDialog-container': {
					'& .MuiPaper-root': {
						width: '100%',
						maxWidth: '500px',
					},
				},
			}}
		>
			<DialogTitle>Add category</DialogTitle>
			<DialogContent>
				<TextField
					required
					autoFocus
					margin='dense'
					id='name'
					label='Category name'
					type='email'
					fullWidth
					variant='outlined'
					onChange={changeHandler}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancel</Button>
				<Button
					onClick={handleSubmit}
					disabled={!inputValue.trim().length > 0}
				>
					Save
				</Button>
			</DialogActions>
		</Dialog>
	)
}

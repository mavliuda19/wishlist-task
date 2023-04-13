import { Alert, Snackbar } from '@mui/material'
import React from 'react'

const Notification = ({ open, message, handleClose }) => {
	const { vertical, horizontal, isOpen } = open

	return (
		<Snackbar
			open={isOpen}
			autoHideDuration={4000}
			anchorOrigin={{ vertical, horizontal }}
			onClose={handleClose}
			key={vertical + horizontal}
		>
			<Alert
				onClose={handleClose}
				severity='success'
				sx={{ width: '100%', backgroundColor: '#4ee24e' }}
			>
				{message}
			</Alert>
		</Snackbar>
	)
}

export default Notification

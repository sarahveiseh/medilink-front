import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/CustomButtons/Button.jsx'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

function ConfirmDeleteModal({
  open,
  handleClose,
  handleYesClicked,
  title,
  contextText,
}) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{contextText}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="info">
          No
        </Button>
        <Button onClick={handleYesClicked} type="submit" color="danger">
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  )
}

ConfirmDeleteModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleYesClicked: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  contextText: PropTypes.string.isRequired,
}

export default ConfirmDeleteModal

import React, { useState } from 'react'
import { Modal, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useAuth } from 'contexts/AuthContext'
import { addressActions } from 'redux/actions'
import { Button } from 'components/atoms/Buttons'

interface Props {
  setShowModal: any
  addressToEdit: any
}

const AddEditAddress = ({ setShowModal, addressToEdit }: Props) => {
  const dispatch = useDispatch()
  const { currentUser } = useAuth()

  const [contactPerson, setContactPerson] = useState(addressToEdit?.contactPerson || '')
  const [address, setAddress] = useState(addressToEdit?.address || '')
  const [city, setCity] = useState(addressToEdit?.city || '')
  const [state, setState] = useState(addressToEdit?.state || '')
  const [zip, setZip] = useState(addressToEdit?.zip || '')

  const handleSubmit = (e: any) => {
    e.preventDefault()

    const addressObj = { userId: currentUser.uid, contactPerson, address, city, state, zip }

    if (addressToEdit) {
      dispatch(addressActions.editAddress({ id: addressToEdit.id, ...addressObj }))
    } else {
      dispatch(addressActions.addAddress(addressObj))
    }

    setShowModal(false)
  }

  return (
    <Modal show={true} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Ajouter une nouvelle adresse</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3">
            <Form.Label>Contact de la personne</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrer le nom du contact"
              value={contactPerson}
              onChange={(e) => setContactPerson(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Adresse</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrer l'adresse"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Ville</Form.Label>
            <Form.Control type="text" placeholder="Entrer la ville" value={city} onChange={(e) => setCity(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Province</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrer la province"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Entrer le code postal" value={zip} onChange={(e) => setZip(e.target.value)} />
          </Form.Group>
          <Button type="submit" disabled={!contactPerson || !address || !city || !state || !zip}>
            Envoyer
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default AddEditAddress
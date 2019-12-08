import React from 'react'
import { Button, Header, Card, Modal } from 'semantic-ui-react'
import Pokedex from "../dexImport";

const NewTeam = () => (
  <Modal trigger={<Button>New Team </Button>} centered={false}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Card>
      <Card image={"./img/dex/"+Math.floor(Math.random() * 803)+".gif"} />
      </Card>
      <Modal.Description>
        <Header>Select first team member</Header>
          <Pokedex/>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default NewTeam

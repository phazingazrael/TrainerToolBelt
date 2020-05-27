import React from 'react'
import { Button, Header, Card, Modal, Grid } from 'semantic-ui-react'
import Pokedex from "../dexImport";

const NewTeam = () => (
  <Modal id="newTeamModal" trigger={<Button>New Team </Button>} centered={false}>
    <Modal.Header>Select your starter</Modal.Header>
    <Modal.Content>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <Card image={"./img/dex/"+Math.floor(Math.random() * 803)+".gif"} />
          </Grid.Column>
          <Grid.Column width={13} id="contentHeight">
            <Header id="newTeamModalHeader">Select first team member</Header>
            <Pokedex/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className='buPar'>
          <Button.Group floated='right'>
            <Button color='green'>Save Team</Button>
            <Button color='red'>Cancel</Button>
          </Button.Group>
        </Grid.Row>
      </Grid>
    </Modal.Content>
  </Modal>
)

export default NewTeam

import React from 'react'
import { Button, Header, Card, Modal, Grid } from 'semantic-ui-react'
import Pokedex from "../dexImport";

const NewTeam = () => (
  <Modal id="newTeamModal" trigger={<Button>New Team </Button>} centered={false}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <Card image={"./img/dex/"+Math.floor(Math.random() * 803)+".gif"} />
          </Grid.Column>
          <Grid.Column width={13} id="contentHeight">
            <Header id="newTeamModalHeader">Select first team member</Header>
            <Pokedex/>
            <p>Is it okay to use this photo?</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Modal.Content>
  </Modal>
)

export default NewTeam

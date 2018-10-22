import React from 'react'
import axios from 'axios'
import {
    Container,
    Card,
    Header,
} from 'semantic-ui-react'

class Characters extends React.Component {
    state = { characters: [], }

    componentDidMount() {
        axios.get('https://api.got.show/api/characters/locations')
          .then( res => this.setState({ characters: res.data }))
    }

    showCharacters = () => {
        return this.state.characters.map( (character, i) => {
            return(
                <Card key={i}>
                  <Card.Content>
                    <Card.Header>
                      {character.name}
                    </Card.Header>
                    <Card.Description>
                      Locations: {character.locations.map( (location) =>
                        <ul>
                          {location}
                        </ul>
                      )}
                    </Card.Description>
                  </Card.Content>
                </Card>
            )
        })
    }

    render () {
        return(
            <Container textAlign='center'>
              <Header as='h1'>GOT Characters</Header>
              <Card.Group itemsPerRow={4}>
                { this.showCharacters() }
              </Card.Group>
            </Container>
        )
    }
}

export default Characters

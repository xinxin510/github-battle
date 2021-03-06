import React from 'react';
import Instruction from './Instruction.js';
import PlayerInput from './PlayerInput.js';
import PlayerPreview from './PlayerPreview.js';
import Result from './Result.js';

export default class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: null,
      playerTwo: null,
      battle: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit(id, player) {
    this.setState({
      [id]: player
    })
  }

  handleReset(id) {
    this.setState({
      [id]: null
    })
  }

  render() {
    const { playerOne, playerTwo, battle } = this.state;

    if (battle) {
      return <Result
                playerOne={playerOne}
                playerTwo={playerTwo}
                onReset={() => this.setState({
                  playerOne: null,
                  playerTwo: null,
                  battle: false
                })}
              />
    }

    return (
      <>
        <Instruction />
        <div className='players-container'>
          <h1 className='center-text header-lg'>Players</h1>
          <div className='row space-around'>
            {playerOne === null ?
              <PlayerInput
                label='Player One'
                onSubmit={(player) => this.handleSubmit('playerOne', player)}
              /> :
              <PlayerPreview
                username={playerOne}
                label='Player One'
                onReset={() => this.handleReset('playerOne')}
              />
            }

            {playerTwo === null ?
              <PlayerInput
                label='Player Two'
                onSubmit={(player) => this.handleSubmit('playerTwo', player)}
              /> :
              <PlayerPreview
                username={playerTwo}
                label='Player Two'
                onReset={() => this.handleReset('playerTwo')}
              />
            }
          </div>
          {playerOne && playerTwo && (
            <button
              className='btn dark-btn btn-space'
              onClick={() => this.setState({battle: true})}
            >
              Battle
            </button>
          )}
        </div>
      </>
    )
  }
}
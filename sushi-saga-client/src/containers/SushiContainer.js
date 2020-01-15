import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state= {
    startIndex: 0,
    endIndex: 4
  }

  handleMoreButton = () => {
    this.setState({ startIndex: this.state.startIndex + 4});
    this.setState({ endIndex: this.state.endIndex + 4});
  }

  render() {
    
    return (
      <Fragment>
        <div className="belt">
          {
            /* 
              Render Sushi components here!
            */
          this.props.sushiArray.slice(this.state.startIndex, this.state.endIndex).map((sushi) => <Sushi 
            sushi={sushi} 
            key={sushi.id} 
            handleEaten={this.props.handleEaten} 
            eaten={this.props.eaten[sushi.id]}/>)
          }
          <MoreButton 
            handleMoreButton={this.handleMoreButton}/>
        </div>
      </Fragment>
    )

  }

}

export default SushiContainer
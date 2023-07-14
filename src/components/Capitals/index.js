import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {currentCptl: countryAndCapitalsList[0].id}

  onChangeValue = event => {
    this.setState({currentCptl: event.target.value})
  }

  getCountry = () => {
    const {currentCptl} = this.state

    const finalId = countryAndCapitalsList.find(
      eachId => currentCptl === eachId.id,
    )

    return finalId
  }

  render() {
    const {currentCptl} = this.state
    const finalId = this.getCountry(currentCptl)
    return (
      <div>
        <div>
          <h1>Countries And Capitals</h1>
          <div>
            <select onChange={this.onChangeValue} value={currentCptl}>
              {countryAndCapitalsList.map(eachItem => (
                <option key={eachItem.id} value={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country?</p>
          </div>
          <h1>{finalId.country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals

import React, {Component} from 'react'
import './App.css'
import Car from './Car/Car'

class App extends Component {

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  onChangeName(name, index) {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({cars})
  }

  deleteHandler = (index) => {
    const cars = this.state.cars.concat()
    cars.splice(index, 1)
    this.setState({cars})
  }

  state = {
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2016},
      {name: 'Mazda', year: 2010}
    ],
    pageTitle: 'React components',
    showCars: false
  }

  render() {
    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car key={index} name={car.name} year={car.year} onDelete={this.deleteHandler}
               onChangeName={(event) => this.onChangeName(event.target.value, index)} />
        )
      })
    }
    return (
      <div>
        <h1>{this.state.pageTitle}</h1>

        <button onClick={this.toggleCarsHandler}>Toggle cars</button>
        {cars}
      </div>
    )
  }
}

export default App

import React,{Component} from 'react'


class MortgageForm extends Component {

  constructor(props){
    super(props)

    this.state= {
      mainSalary: 0,
      secondSalary: 0,
      deposit: 0,
      mortgageCanAfford: 0,
      errorMessage: ""
    }

    this.handleMainSalary = this.handleMainSalary.bind(this)
    this.handleSecondSalary = this.handleSecondSalary.bind(this)
    this.calculateMortgage = this.calculateMortgage.bind(this)
    this.handleDeposit = this.handleDeposit.bind(this)

  }

      calculateMortgage(event){
        event.preventDefault()
    let totalSalary = this.state.mainSalary + this.state.secondSalary;
    this.setState({mortgageCanAfford: (totalSalary*3)+this.state.deposit})
    this.setState({mainSalary: 0})
    this.setState({secondSalary: 0})


  }


  handleMainSalary(event){
    if (event.target.value > 0 ){
      this.setState({mainSalary: parseInt(event.target.value)})
      this.setState({errorMessage: ""})
    } else{
    this.setState({errorMessage: "You need to enter a positive main salary"})
  }
  }

  handleSecondSalary(event){
    if(event.target.value > 0 ){
      this.setState({secondSalary: parseInt(event.target.value)})
      this.setState({errorMessage: ""})
    } else {
        this.setState({errorMessage: "You need to enter a positive secondary salary"})
    }
    }



  handleDeposit(event){
    if(event.target.value > 0){
    this.setState({deposit: parseInt(event.target.value)})
    this.setState({errorMessage: ""})
  } else {
    this.setState({errorMessage: "You need to enter a positive deposit"})
  }
  }



  render(){
    return (
  <div>
    <form>
      <input name="mainSalary" type="number" onChange={this.handleMainSalary} required />Main Salary

      <input name="secondSalary" type="number" onChange={this.handleSecondSalary} />Secondery Salary

      <input name="deposit" type="number" onChange={this.handleDeposit} />Deposit

      <button onClick={this.calculateMortgage}>Calculate Mortgage</button>

      <p>You can afford {this.state.mortgageCanAfford}</p>

      {this.state.errorMessage}
    </form>
  </div>
  )

  }

}


export default MortgageForm

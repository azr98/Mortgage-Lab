import React,{Component} from 'react'
import MortgageForm from '../components/MortgageForm'

class MainContainer extends Component{

  render(){
    return (
      <div>
        <h1>Mortgage calculator</h1>
        <MortgageForm></MortgageForm>
      </div>
    )
  }


}

export default MainContainer

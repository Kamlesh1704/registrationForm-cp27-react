import {Component} from 'react'

class RegistrationForm extends Component {
  state = {formview: true,firstName:'',lastName:'',showFirstErrorMsg:false , showLastErrorMsf: false}
  
  onChangeFirstName = event => {
     this.setState({firstName:event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName:event.target.value})
  }

  onBlurFirstName = event => {
    const {firstName} = this.state 
    if(firstName === ''){
      this.setState({showFirstErrorMsg:true})
    }else{
      this.setState({showFirstErrorMsg:false})
    }
  }

  onBlurLastName = event => {
    const {lastName} = this.state 
    if(lastName === ''){
      this.setState({showLastErrorMsg:true})
    }else{
      this.setState({showLastErrorMsg:false})
    }
  }
 
  onSubmitForm = event => {
    event.preventDefault()
    const {firstName,lastName} = this.state
    if(firstName !== '' && lastName !== '') {
      this.setState({formview: false})
    }else {
      if(firstName === ''  && lastName === '') {
        this.setState({showFirstErrorMsg: true , showLastErrorMsg: true})
      }else if(firstName === '') {
        this.setState({showFirstErrorMsg: true})
      }else if(lastName === '') {
        this.setState({showLastErrorMsg: true})
      }
    }
  }
  
  anotherResponse = () => {
    this.setState({formview: true , lastName:'',firstName:''})
  }
  render = () => {
    const {formview,showFirstErrorMsg,showLastErrorMsg} = this.state
    return formview ? (
      <form onSubmit={this.onSubmitForm}>
        <h1 className="heading">Registration</h1>
        <label htmlFor="firstname">FIRST NAME</label>
        <input
          type="text"
          id="firstname"
          placeholder="First name"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
        {showFirstErrorMsg && <p>*Required</p>}
        <label htmlFor="lastname">LAST NAME</label>
        <input
          type="text"
          id="lastname"
          placeholder="Last name"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
        {showLastErrorMsg && <p>*Required</p>}
        <button type="submit">Submit</button>
      </form>
    ) : (
      <div className="divv">
        <h1 className="heading">Registration</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
        />
        <p className="p">Submitted Successfully</p>
        <button type="button" onClick = {this.anotherResponse}>Submit Another Response</button>
      </div>
    )
  }
}

export default RegistrationForm

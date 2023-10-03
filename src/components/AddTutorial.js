import React, { Component } from 'react'
import tutorialService from '../services/tutorial.service'

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);

    this.onChangeid = this.onChangeid.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeUniversity = this.onChangeUniversity.bind(this);
    this.onChangeFinished = this.onChangeFinished.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: "",
      Name: "",
      Lastname: "",
      University: "",
      Finished: "",
      submitted: false
    }
  }

  onChangeid(e) {
    this.setState({
      id: e.target.value
    });
  }


  onChangeName(e) {
    this.setState({
      Name: e.target.value
    });
  }

  onChangeLastname(e) {
    this.setState({
      Lastname: e.target.value
    });
  }

  onChangeUniversity(e) {
    this.setState({
      University: e.target.value
    });
  }

  onChangeFinished(e) {
    this.setState({
      Finished: e.target.value
    });
  }

  saveTutorial() {
    var data = {
      id: this.state.id,
      Name: this.state.Name,
      Lastname: this.state.Lastname,
      University: this.state.University,
      Finished: this.state.Finished
    };

    tutorialService.create(data)
    .then(response => {
      this.setState({
        id: response.data.id,
        Name: response.data.Name,
        Lastname: response.data.Lastname,
        University: response.data.University,
        Finished: response.data.Finished,
        submitted: true
      });
    })
    .catch(err => {
      console.log(err);
    });
  }

  newTutorial() {
    this.setState({
      id: "",
      Name: "",
      Lastname: "",
      University:"",
      Finished: false,
      submitted: false
    })
  }

  render() {
    return (
      <div className='submit-from'>
        {this.state.submitted ? (
          <>
            <h4>You submitted successfully!!!</h4>
            <button className='btn btn-success' onClick={this.newTutorial}>Add</button>
          </>
        ) : (
          <>
            <div className='from-group'>
                <label htmlFor='id'>ID</label>
                <input
                  type='text'
                  className='form-control'
                  id='id' 
                  value={this.state.id}
                  onChange={this.onChangeid}
                  required />
            </div>
            <div className='from-group'>
                <label htmlFor='Name'>Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='Name' 
                  value={this.state.Name}
                  onChange={this.onChangeName}
                  name='Name'
                  required />
            </div>
            <div className='from-group'>
                <label htmlFor='Lastname'>Lastname</label>
                <input
                  type='text'
                  className='form-control'
                  id='Lastname' 
                  value={this.state.Lastname}
                  onChange={this.onChangeLastname}
                  name='Lastname'
                  required />
            </div>
            <div className='from-group'>
                <label htmlFor='University'>University</label>
                <input
                  type='text'
                  className='form-control'
                  id='University' 
                  value={this.state.University}
                  onChange={this.onChangeUniversity}
                  name='University'
                  required />
            </div>
            <div className='from-group'>
                <label htmlFor='Finished'>State</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder="1 = (Finished) or 0 = (Unfinished)"
                  id='Finished' 
                  value={this.state.Finished}
                  onChange={this.onChangeFinished}
                  name='Finished'
                  required />
            </div>
            <button onClick={this.saveTutorial} className='btn btn-success'>
              Submit
            </button>
          </>
        )}
      </div>
    )
  }
}

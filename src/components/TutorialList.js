import React, { Component } from 'react';
import TutorialDataService from '../services/tutorial.service';
import { Link }  from 'react-router-dom';

export default class TutorialList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchid = this.onChangeSearchid.bind(this);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.onChangeSearchLastname = this.onChangeSearchLastname.bind(this);
    this.onChangeSearchUniversity = this.onChangeSearchUniversity.bind(this);
    this.onChangeSearchFinished = this.onChangeSearchFinished.bind(this);
    this.retriveTutorials = this.retriveTutorials.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorials = this.setActiveTutorials.bind(this);
    this.removeAllTutorials = this.removeAllTutorials.bind(this);
    this.searchName = this.searchName.bind(this);

    this.state = {
      tutorials : [],
      currentTutorial: null,
      currentIndex: -1,
      searchName:"",
    };
  }

componentDidMount(){
  this.retriveTutorials();
}

onChangeSearchid(e){
  const searchid = e.target.value;
  this.setState({
    searchid: searchid
  });
}

onChangeSearchName(e){
  const searchName = e.target.value;
  this.setState({
    searchName: searchName
  });
}

onChangeSearchLastname(e){
  const searchLastname = e.target.value;
  this.setState({
    searchLastname: searchLastname
  });
}

onChangeSearchUniversity(e){
  const searchUniversity = e.target.value;
  this.setState({
    searchUniversity: searchUniversity
  });
}

onChangeSearchFinished(e){
  const searchFinished = e.target.value;
  this.setState({
    searchFinished: this.onChangeSearchFinished
  });
}

retriveTutorials(){
  TutorialDataService.getAll()
  .then(response => {
    this.setState({
      tutorials: response.data
    });
  })
  .catch(err => {
    console.log(err);
  });
}

refreshList(){
  this.retriveTutorials();
  this.setState({
    currentTutorial: null,
    currentIndex: -1
  });
}

setActiveTutorials(tutorial, index){
  this.setState({
    currentTutorial: tutorial,
    currentIndex: index
  });
}

removeAllTutorials(){
  TutorialDataService.deleteAll()
  .then(response => {
    this.refreshList();
    
  })
  .catch(err => {
    console.log(err);
  })
}
searchName(){
  TutorialDataService.findByTitle(this.state.searchName)
  .then(response => {
    this.setState({
      tutorial: response.data
    });
  })
.catch(err => {
  console.log(err);
});
}



  render() {
    const {searchName, tutorials, currentTutorial, currentIndex} = this.state;

    return (
      <div className = 'list row'>
        <div className = 'col-md-8'>
          <div className = 'input-group mb-3'>
              <input 
                type="text"
                className="form-control"
                placeholder="Search by title"
                value={searchName}
                onChange={this.onChangeSearchName}
                />
            <div className='input-group-append'>
              <button
                className='btn btn-outline-secondary'
                type='button'
                onClick={this.searchName}
              >Search
              </button>
            </div>     
          </div>
        </div>
       
        <div className='col-md-6'>
          <h4>Name List</h4>

          <ul className='list-group'>
            {tutorials && tutorials.map((tutorial, index) => (
              <li className={ "list-group-item " + (index === currentIndex ? "active" : "")} 
              onClick={() => this.setActiveTutorials(tutorial, index)}
              key={index}>
                {tutorial.Name}  {tutorial.Lastname}
              </li>
            ))}
          </ul>
          <button 
            className='btn btn-sm btn-danger m-3' 
            onClick={this.removeAllTutorials}
            >
            RemoveAll
          </button>
        </div>

        <div className='col-md-6'>
              {currentTutorial ? (
              <div>
                <h4>Data</h4>
                <div>
                  <label>
                    <strong>ID :</strong>
                  </label>
                  {" "}
                  {currentTutorial.id}
                </div>
                <div>
                  <label>
                    <strong>Name :</strong>
                  </label>
                  {" "}
                  {currentTutorial.Name}
                </div>
                <div>
                  <label>
                    <strong>Lastname :</strong>
                  </label>
                  {" "}
                  {currentTutorial.Lastname}
                </div>
                <div>
                  <label>
                    <strong>University :</strong>
                  </label>
                  {" "}
                  {currentTutorial.University}
                </div>
                <div>
                  <label>
                    <strong>State :</strong>
                  </label>
                  {" "}
                  {currentTutorial.Finished ? "Finished" : "Unfinished"}
                </div>
              </div>
              ) : (
              <div>
                <br />
                . . . Please select Name . . . 
              </div>)}
        </div>
      </div>
    )
  }
}

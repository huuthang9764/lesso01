import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      ds_cau_hoi: []
    }
  };

  componentDidMount() {
    axios.get('/api/ds_cau_hoi')
         .then(res => {
            const ds_cau_hoi = res.data;
            this.setState({ ds_cau_hoi: ds_cau_hoi.ds_cau_hoi });
          })
         .catch(error => console.log(error));
  };

  render() {
    return(
      <ul>
        {this.state.ds_cau_hoi.map(item => (
          <li key={item.id}>
            <h2>{item.question}</h2>
            
          </li>
        ))}
      </ul>
    )
  }
};

export default App;
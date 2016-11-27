import React from 'react';
import Search from '../search/search';

require('normalize.css/normalize.css');
require('./application.scss');


class AppComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      threads: []
    };
  }

  render() {
    return (
      <div className="index">
        <Search onSearch={this.search.bind(this)}/>
        <ul>
          {
            this.state.threads.map((thread) => {
              return <li><img src={`http://i.4cdn.org/g/${thread.tim}${thread.ext}`}/></li>
            })
          }
        </ul>
      </div>
    );
  }

  search(threads) {
    this.setState({
      threads
    });
  }

}

export default AppComponent;

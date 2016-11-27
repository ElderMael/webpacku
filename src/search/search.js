import axios from 'axios';
import React from 'react';
import Promise from 'bluebird';
import _ from 'lodash';

class Search extends React.Component {

  render() {
    return (
      <form>
        <label className="search">Search</label>
        <input className="search" name="search"/>
        <input className="search" type="submit" onClick={this.search.bind(this)}/>
      </form>
    );
  }

  search(event) {
    event.preventDefault();

    Promise
      .resolve(axios.get('https://crossorigin.me/https://a.4cdn.org/g/catalog.json'))
      .then((response) => response.data)
      .then((pages) => _.map(pages, (page) => page.threads ))
      .then((allThreads) => _.flatten(allThreads))
      .then((threads) => this.props.onSearch( _.take(threads, 3) ));
  }

}

export default Search;

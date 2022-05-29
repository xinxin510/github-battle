import React from 'react';
import LanguagesNav from './LanguagesNav.js';
import fetchPopularRepos from '../utils/api.js';

export default class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null,
      error: null
    }
    this.updateLanguage = this.updateLanguage.bind(this);
    this.isLoading = this.isLoading.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage)
  }

  updateLanguage(selectedLanguage) {
    this.setState({
      selectedLanguage,
      repos: null,
      error: null
    })
    fetchPopularRepos(selectedLanguage)
    .then(repos => this.setState({repos, error: null}))
    .catch(err => this.setState({error: 'There was an error fetching the repositories'}))
  }

  isLoading() {
    return this.state.repos === null && this.state.error === null
  }

  render() {
    const {selectedLanguage, repos, error} = this.state;
    return(
      <>
        <LanguagesNav
          selectedLanguage={selectedLanguage}
          updateLanguage={this.updateLanguage}
        />
        {this.isLoading() && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {repos && <p>{JSON.stringify(repos)}</p>}
      </>
    )
  }
}
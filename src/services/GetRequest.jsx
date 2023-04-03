import React from 'react';

export default class GetRequest extends React.Component {
  _apiBase = 'https://aviasales-test-api.kata.academy';

  async getResoursesFetch(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (res.ok) {
      return await res.json();
    }
  }

  async getSearchId() {
    const res = await this.getResoursesFetch('/search');
    return res.searchId;
  }
}

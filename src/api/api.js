class Api {
  _url = 'https://yalantis-react-school-api.yalantis.com/api/task0/users';

  errObj = (url, status) => {
    return {
      message: `Invalid request: ${url}, status ${status}`,
      status: status
    };
  };

  async fetchData() {
    const res = await fetch(`${this._url}`);
    if (!res.ok) {
      throw this.errObj(`${this._url}`, res.status);
    }
    return res.json();
  }

  async get() {
    return this.fetchData();
  }
}

export default new Api();
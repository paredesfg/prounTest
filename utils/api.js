const BASE_API = 'https://api.github.com/repos/emberjs/data/';

class Api {
    async getContributors() {
        const query = await fetch(`${BASE_API}contributors?anon=1`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        const data = await query.json();
        return data;
      }

      async getContributorDetails(url){
        const query = await fetch(`${url}`, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          });
          const data = await query.json();
          return data;
      }
}

export default new Api();

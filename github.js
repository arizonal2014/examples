class Github {
  constructor() {
    this.client_id = "d9b33ff16cbcd00729ac";
    this.client_secret = "10e3c9c6f252cc6be1e4200f6d1b505224f1f11c";
    this.repo_count = 4;
    this.repo_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
      this.client_secret
      }&client_id=${this.client_secret}`


    );

    


    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${
      this.client_secret
      }&client_id=${this.client_secret}`


    );

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos
    }
  }
}

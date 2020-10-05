class Github {
    constructor(){
        this.cliendId = '5a465c6aaab067e53865';
        this.clientSecret = '3fcaeeff556d8a161b3e033a3f2bee9b4ce14c6c';   
        this.repos_count = 5;
        this.repos_sort = 'created: asc';     
    }
    async getProfile(data){
        const requestProfile = await fetch(`https://api.github.com/users/${data}?client_id=${this.cliendId}&client_secret=${this.clientSecret}`);

        const requestRepo = await fetch(`https://api.github.com/users/${data}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.cliendId}&client_secret=${this.clientSecret}`);

        const profile = await requestProfile.json();
        const repos = await requestRepo.json();
        // console.log(profile);

        return {
            profile,
            repos
        }
        
    }
}




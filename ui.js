class UI {
    constructor(){
        this.profile = document.getElementById('profile');
    }
    updateProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
            <div class="col md-3">
                <img src="${user.avatar_url}" alt="avatar" class="fluid mb-2">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
            </div>
            <div class="col md-9">
                <span class="badge badge-primary mb-1">Public Repos : ${user.public_repos}</span>
                <span class="badge badge-secondary mb-1">Public Gists : ${user.public_gists}</span>
                <span class="badge badge-success mb-1">Followers : ${user.followers}</span>
                <span class="badge badge-info mb-1">Following : ${user.following}</span>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item">Company : ${user.company}</li>
                    <li class="list-group-item">Website/Blog : ${user.blog}</li>
                    <li class="list-group-item">Location : ${user.location}</li>
                    <li class="list-group-item">Member Since : ${user.created_at}</li>
                </ul>
            </div>
        </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
        `
    }

    updateRepos(repos){
        let output = '';
        repos.forEach(repo => {
            output+= `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary mb-1">Stars : ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary mb-1">Watchers : ${repo.watchers_count}</span>
                        <span class="badge badge-success mb-1">Forks : ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
            
            `;
        });
        document.getElementById('repos').innerHTML = output;
    }



    removeProfile(){
        this.profile.innerHTML = '';
    }


    showAlert(message, className){
        this.clearAlert();
        let alert = document.createElement('div');
        alert.className = className;
        alert.appendChild(document.createTextNode(message));
        let parent = document.querySelector('.searchContainer') ;
        let search = document.querySelector('.search');
        parent.insertBefore(alert, search);

        setTimeout(()=>{
            this.clearAlert();
        },2000);
    }

    clearAlert(){
        let cur_alert = document.querySelector('.alert');
        if(cur_alert){
            cur_alert.remove();
        }
    }

}
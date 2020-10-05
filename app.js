const input = document.querySelector('input');
input.addEventListener('keyup' ,getValue);

github = new Github;
ui = new UI;

function getValue(e){
    let val = e.target.value;
    
    if( val === '')
    {
        ui.removeProfile();
    }
    else{
        github.getProfile(val)
        .then((data) => {
            if(data.profile.message != 'Not Found'){
                ui.updateProfile(data.profile);
                ui.updateRepos(data.repos);
                // ui.getRepos(data.profile);
                // console.log(data.profile);
            }
            else{
                ui.showAlert('User Not Found', 'alert alert-danger');
                ui.removeProfile();
            }
        });
    }
}
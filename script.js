window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(function(response){
        response.json().then( function(json){
            const container = document.getElementById("container");
            const astronautCount = document.getElementById("astronautCount");
            let count = json.length;
            astronautCount.innerHTML += count;
            let html = '';
            json.sort((a,b)=>{
                return a.hoursInSpace < b.hoursInSpace ? 1 : -1;
            });
            for(let astronaut of json){
                let activeAstro = astronaut.active;
                html += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${astronaut.hoursInSpace}</li>
                            <li id=${activeAstro ? "active" : "notActive"}>Active: ${activeAstro}</li>
                            <li>Skills: ${astronaut.skills.join(', ')}</li>
                        </ul>
                    </div>
                    <img class="avatar" src=${astronaut.picture}>
                </div>
                `
            }
            container.innerHTML = html;
            console.log(json);
        });
    });
});
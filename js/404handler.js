if (document.location.href.indexOf("/member/") > -1) 
{
  var username = document.location.href.split("/member/")[1].split("/")[0];
  fetch(`https://api.airtable.com/v0/appHwUzo4ARCQQlwr/Profiles%20copy?filterByFormula=username='${username}'`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer pat2bEq3dsaXHSBH9.2edd33a7b1c2de8fd5e4fe14b82900cf807d2c9b56dfead6a8bdd48715826409`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
        if(data.records.length > 0){
            if(data.records[0].fields.Photo){
                var photo = data.records[0].fields.Photo[0].url;
            }
            else{
                var photo = "/img/user.png";
            }
            bio = data.records[0].fields.Bio ? data.records[0].fields.Bio : "";
            document.querySelector("#profile-photo").style.backgroundImage = `url(${photo})`;
            document.querySelector("#profile-name").innerHTML = data.records[0].fields.Name;
            document.querySelector("#profile-batch").innerHTML = "BATCH OF " + data.records[0].fields.Batch;
            document.querySelector("#profile-bio").innerHTML = bio;
            document.querySelector("#profile-email").href = "mailto:" + data.records[0].fields.Email;
            document.querySelector("#profile-linkedin").href = data.records[0].fields.LinkedIn;
            document.querySelector("#profile-github").href = data.records[0].fields.GitHub;
            unload();
        }
    });
}

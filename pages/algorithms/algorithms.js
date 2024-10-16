(async () => {

  let airtable_res = await fetch(
    `https://api.airtable.com/v0/appHwUzo4ARCQQlwr/Algorithm%20Festival?maxRecords=20&view=Grid%20view`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer pat2bEq3dsaXHSBH9.2edd33a7b1c2de8fd5e4fe14b82900cf807d2c9b56dfead6a8bdd48715826409`,
      },
    }
  );
  
  let algs_data = await airtable_res.json();  
  let presentations = document.getElementById("presentations");

  for (let presentation of algs_data.records) {
    // Parse presentation data into an object
    let p_info = {
      title: presentation.fields.Title,
      presenters: presentation.fields.Presenters.split("\n"),
      usernames: presentation.fields.Usernames.split("\n"),
      abstract: presentation.fields.Abstract
    }

    // Initialize presentation div
    let p_div = document.createElement("div");
    p_div.classList.add("presentation");

    // Construct HTML for presenters
    presenter_html = "";

    for (let i in p_info.presenters) {
      if (p_info.usernames[i] == "null") {
        presenter_html += `<span>${p_info.presenters[i]}</span>`;
      } else {
        presenter_html += `<a href="./about/member.html?user=${p_info.usernames[i]}">${p_info.presenters[i]}</a>`;
      }
    }

    // Construct and set the HTML for presentation div
    p_div.innerHTML = `
      <h2>${p_info.title}</h2>
      <div class="presenters">
      ${presenter_html}
      </div>
      <p><b>Abstract:</b> ${p_info.abstract}</p>
    `;

    // Append the presentation div to the parent
    presentations.appendChild(p_div);

    unload();
  }

})();
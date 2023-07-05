function generateProjectRow(num){
    const name = projects[num].name;
    const link = projects[num].link;
    const technologies = projects[num].technologies;
    const publishment = projects[num].publishment;

    const tableBody = document.querySelector('.projects__tbody');
    const tableRow = document.createElement("tr");
    tableRow.className = "projects__tr";

    const nameCell = document.createElement("td");
    nameCell.className = "projects__td";
    nameCell.innerHTML = `${name}`;
    tableRow.appendChild(nameCell);

    const gitHubCell = document.createElement("td");
    gitHubCell.className = "projects__td";
    gitHubCell.innerHTML = `<a href="${link}">link<a>`;
    tableRow.appendChild(gitHubCell);

    const technologiesCell = document.createElement("td");
    technologiesCell.className = "projects__td";
    technologiesCell.innerHTML = `${technologies}`;
    tableRow.appendChild(technologiesCell);

    const publishmentCell = document.createElement('td');
    publishmentCell.className = "projects__td";

    if(publishment === 'none'){
      publishmentCell.innerHTML = `${publishment}`;
    }else{
      publishmentCell.innerHTML = `<a href="${publishment}">published</a>`
    }

    tableRow.appendChild(publishmentCell);

    tableBody.appendChild(tableRow);
}


function fillProjectTable(){
  projects.reverse().map((item, index) => generateProjectRow(index));
}

function generateCourseRow(num){
    const name = courses[num].name;
    const provider = courses[num].provider;
    const link = courses[num].link;
    const year = courses[num].year;
    const certificate = courses[num].certificate;

    const tableBody = document.querySelector('.courses__tbody');

    const tableRow = document.createElement("tr");
    tableRow.className = "courses__tr";

    const courseCell = document.createElement('td');
    courseCell.innerHTML = `${name}`;
    courseCell.className = "courses__td";
    tableRow.appendChild(courseCell);

    const providerCell = document.createElement('td');
    providerCell.innerHTML = `${provider}`;
    providerCell.className = "courses__td";
    tableRow.appendChild(providerCell);

    const linkCell = document.createElement('td');
    linkCell.innerHTML = `<a href="${link}">link</a>`;
    linkCell.className = 'courses__td';
    tableRow.appendChild(linkCell);

    const yearCell = document.createElement('td');
    yearCell.innerHTML = `${year}`;
    yearCell.className = "courses__td year";
    tableRow.appendChild(yearCell);

    const certificateCell = document.createElement('td');
    if(certificate !== 'No'){
      certificateCell.innerHTML = `<a href="${certificate}">Yes</a>`;
    }else{
      certificateCell.innerHTML = `${certificate}`;
    }

    certificateCell.className = 'courses__td';
    tableRow.appendChild(certificateCell);

    tableBody.appendChild(tableRow);
}

function fillCourseTable(){
    courses.reverse().map((item, index) => generateCourseRow(index));
}

fillProjectTable();
fillCourseTable();
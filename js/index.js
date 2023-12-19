var tableData = document.getElementById('tableData');
var tableBody = document.getElementById('tableBody');
var noDataUI = document.getElementById('noDataUI');

var LOCAL_STORAGE_KEY = 'bookmarks';

var websites = getFromLocalStorage();
// var websites = [
//     {
//         "name": "hello",
//         "url": "google.com"
//     },
//     {
//         "name": "hello 2",
//         "url": "google.com2"
//     }
// ]
updateHomePage(websites);



// Function responsible for filling table with bookmarked websites
function updateHomePage(_websites) 
{
    // No bookmarks found -> display no data found UI and exit function
    if (_websites === null)
    {
        noDataUI.classList.replace('d-none', 'd-block');
        return;
    }

    updateTable(_websites);
    tableData.classList.replace('d-none', 'd-table');
}

function updateTable(_websites)
{
    var literalTemplate = ``;
    for (var i = 0; i < _websites.length; i++) {
        literalTemplate += 
        `
        <tr>
        <td>${i}</td>
        <td>${_websites[i].name}</td>
        <td><a class="btn btn-sm btn-warning" href="${_websites[i].url}">Visit website</a></td>
        <td>
          <button class="btn btn-sm btn-danger">Delete</button>
        </td>
      </tr>
        `;
    }
    tableBody.innerHTML = literalTemplate;
}


function updateLocalStorage()
{
    var _websitesStr = JSON.stringify(websites);
    localStorage.setItem(LOCAL_STORAGE_KEY, _websitesStr);
}

function getFromLocalStorage()
{
    var websitesStr = localStorage.getItem(LOCAL_STORAGE_KEY);
    return JSON.parse(websitesStr);
}
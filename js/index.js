var tableData = document.getElementById('tableData');
var tableBody = document.getElementById('tableBody');
var noDataUI = document.getElementById('noDataUI');

var LOCAL_STORAGE_KEY = 'bookmarks';

var websites = getFromLocalStorage();

updateHomePage(websites);



// Function responsible for filling table with bookmarked websites
function updateHomePage(_websites) 
{
    // No bookmarks found -> display no data found UI and exit function
    if (_websites === null || _websites.length <= 0)
    {
        noDataUI.classList.replace('d-none', 'd-block');
        tableData.classList.replace('d-table', 'd-none');
        return;
    }

    updateTable(_websites);
    tableData.classList.replace('d-none', 'd-table');
}

// Update tbody with a given list of Websites objects
function updateTable(_websites)
{
    var literalTemplate = ``;
    for (var i = 0; i < _websites.length; i++) {
        literalTemplate += 
        `
        <tr>
        <td>${i}</td>
        <td>${_websites[i].name}</td>
        <td><a class="btn btn-sm btn-warning" href="https://${_websites[i].url}">Visit website</a></td>
        <td>
          <button class="btn btn-sm btn-danger" onclick="deleteWebsite(${i})">Delete</button>
        </td>
      </tr>
        `;
    }
    tableBody.innerHTML = literalTemplate;
}


function deleteWebsite(idx)
{
    websites.splice(idx, 1);
    updateHomePage(websites);
    updateLocalStorage();
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
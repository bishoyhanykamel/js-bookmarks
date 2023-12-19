var WEBSITE_NAME_REGEX = /^.{3,40}$/
var WEBSITE_URL_REGEX = /^[a-zA-z]{2,}\.com$/

var LOCAL_STORAGE_KEY = 'bookmarks';


var addWebsiteBtn = document.getElementById('addWebsiteBtn');
var websiteNameInput = document.getElementById('websiteName');
var websiteUrlInput = document.getElementById('websiteUrl');

websiteNameInput.addEventListener('input', function() {
    addWebsiteBtn.disabled =! (validationUI(this, WEBSITE_NAME_REGEX, document.getElementById('websiteNameValidation')) && WEBSITE_URL_REGEX.test(websiteUrlInput.value));
});

websiteUrlInput.addEventListener('input', function () {
    addWebsiteBtn.disabled =! (validationUI(this, WEBSITE_URL_REGEX, document.getElementById('websiteUrlValidation')) && WEBSITE_NAME_REGEX.test(websiteNameInput.value));
});

function createBookmark() {
    var websiteName = websiteNameInput.value;
    var websiteUrl = websiteUrlInput.value;

    var websites = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (websites === null)
        websites = [];
    websites.push({
        "name": websiteName,
        "url": websiteUrl
    });
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(websites));

    websiteNameInput.value="";
    websiteNameInput.classList.remove('is-valid');
    websiteUrlInput.value="";
    websiteUrlInput.classList.remove('is-valid');
    addWebsiteBtn.disabled = true;
}

function validationUI(input, regex, validationLabel) {
    input.classList.add('is-invalid');
    if (regex.test(input.value)) {
        input.classList.replace('is-invalid', 'is-valid');
        validationLabel.classList.replace('d-block', 'd-none');
        return true;
    }
    else {
        input.classList.replace('is-valid', 'is-invalid');
        validationLabel.classList.replace('d-none', 'd-block');
        return false;
    }
}

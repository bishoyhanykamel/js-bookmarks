var WEBSITE_NAME_REGEX = /^.{3,40}$/
var WEBSITE_URL_REGEX = /^[a-zA-z]{2,}\.com$/


var addWebsiteBtn = document.getElementById('addWebsiteBtn');
var websiteNameInput = document.getElementById('websiteName');
var websiteUrlInput = document.getElementById('websiteUrl');

websiteNameInput.addEventListener('input', function() {
    addWebsiteBtn.disabled =! (validationUI(this, WEBSITE_NAME_REGEX) && WEBSITE_URL_REGEX.test(websiteUrlInput.value));
});

websiteUrlInput.addEventListener('input', function () {
    addWebsiteBtn.disabled =! (validationUI(this, WEBSITE_URL_REGEX) && WEBSITE_NAME_REGEX.test(websiteNameInput.value));
});

function createBookmark() {

}

function validationUI(input, regex) {
    input.classList.add('is-invalid');
    if (regex.test(input.value)) {
        input.classList.replace('is-invalid', 'is-valid');
        return true;
    }
    else {
        input.classList.replace('is-valid', 'is-invalid');
        return false;
    }
}

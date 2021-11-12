const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const username = urlParams.get('username')
const wish = urlParams.get('wish')
window.location = "wishlist://username:" + username + "&wish:" + wish;
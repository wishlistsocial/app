const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const username = urlParams.get('username')
const wish = urlParams.get('wish')
window.location = "wishlist://username:" + username + "&wish:" + wish;
window.location = "WislistSocial://wishlist.com?username:" + username + "&wish:" + wish;
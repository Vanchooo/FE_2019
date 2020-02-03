'use strict';
let url = 'http://5b1d83fba1c56c001458c63f.mockapi.io/dd-lab/users/1';

function showMainInfo(user_data) {
    let username = document.querySelector('div.user-info__username');
    let photoQuantity = document.querySelector('div.user-info__photo-quantity');
    //username.innerHTML = '<div>"' + user_data.name + '"</div>';
    let avatar = document.querySelector('div.user-info__photo');

    username.innerHTML = user_data.name;
    photoQuantity.innerHTML = 'Posts quantity:' + Object.keys(user_data.posts).length;
    avatar.innerHTML = '<img src=' + user_data.avatar + ' alt=""></img>';
}

function showAllPosts(user_data) {
    let mainContainer = document.querySelector('div.main-container');
    let postsQuantity = Object.keys(user_data.posts).length;

    for (let i = 0; i <= postsQuantity; i++) {
        mainContainer.innerHTML += '<div class="post">'
            + '<div class="post__photo">'
            + '<img src=' + user_data.posts[i].image + ' alt="" />'
            + '</div>'
            + '<div class="post__description">' + user_data.posts[i].description + '</div>'
            + '<div class="post__footer">'
            + '<div class="post__likes">Likes: ' + user_data.posts[i].likes + '</div>'
            + '<div class="post__date-publish">Published: ' + user_data.posts[i].createdAt + ' </div>'
            + '</div>'
            + '</div>';
    }

}
function showFivePosts(user_data, lastPost, lastPostPlusFive) {
    let mainContainer = document.querySelector('div.main-container');

    for (lastPost; lastPost < lastPostPlusFive; lastPost++) {
        mainContainer.innerHTML += '<div class="post">'
            + '<div class="post__photo">'
            + '<img src=' + user_data.posts[lastPost].image + ' alt="" />'
            + '</div>'
            + '<div class="post__description">' + user_data.posts[lastPost].description + '</div>'
            + '<div class="post__footer">'
            + '<div class="post__likes">Likes: ' + user_data.posts[lastPost].likes + '</div>'
            + '<div class="post__date-publish">Published: ' + (user_data.posts[lastPost].createdAt).slice(0, 10) + ' </div>'
            + '</div>'
            + '</div>';
    }

}

fetch(url).then((response) => {
    return response.json();

}).then((data) => {
    showMainInfo(data);
    showFivePosts(data, 0, 5);

    let lastPost = 5;
    let lastPostPlusFive = 10;

    elem.onclick = function () {
        showFivePosts(data, lastPost, lastPostPlusFive);
        lastPost = lastPost + 5;
        lastPostPlusFive = lastPostPlusFive + 5;
    };

})




// var request = new XMLHttpRequest();
// request.open("GET", "assets/json/config.json", false);
// request.send(null);

// const client_data = JSON.parse(JSON.parse(request.responseText));
// console.log(client_data);

// const redirect_uri = "http://localhost:8080/";

// // const db = require('db');
// // db.connect({
// //   client_id: process.env.CLIENT_ID,
// //   client_secret: process.env.CLIENT_SECRET
// // })

// // const client_id = process.env.CLIENT_ID;
// // const client_secret = process.env.CLIENT_SECRET;

// var URIS = {};
// var SONG_LIST = null;
// var CURRENT_TRACK = null;
// var CURRENT_ARTIST = null;
// var BODY = [];

// var json = JSON.parse('<%= JSON.stringify(json) %>');
// console.log(json);
// var client_secret = document.getElementById(client_secret).innerHTML;

// var redirect_uri = "https://john-walling.herokuapp.com/";

// function onPageLoad() {
//   if (window.location.search.length > 0) {
//     handleRedirect();
//   } else {
//     access_token = localStorage.getItem("access_token");
//     if (access_token == null) {
//       let url = "https://accounts.spotify.com/authorize";
//       url += "?client_id=" + client_id;
//       url += "&response_type=code";
//       url += "&redirect_uri=" + encodeURI(redirect_uri);
//       url += "&show_dialog=true";
//       url +=
//         "&scope=user-modify-playback-state streaming user-read-playback-state";
//       window.location.href = url; // Show Spotify's authorization screen
//     }
//     getPlaylist();
//   }
// }

// // function getRecentlyPlayed(){
// //   callApi("GET", "https://api.spotify.com/v1/me/player/recently-played", null, handleRecentlyPlayed);
// // }

// // function handleRecentlyPlayed(){
// //   if ( this.status == 200 ){
// //     songList = JSON.parse(this.responseText);
// //   }
// //   else if ( this.status == 401 ){
// //       refreshAccessToken()
// //   }
// //   else {
// //       console.log(this.responseText);
// //       onPageLoad();
// //   }
// // }

// function refreshAccessToken() {
//   refresh_token = localStorage.getItem("refresh_token");
//   let body = "grant_type=refresh_token";
//   body += "&refresh_token=" + refresh_token;
//   body += "&client_id=" + client_id;
//   callAuthorizationApi(body);
// }

// function handleRedirect() {
//   let code = getCode();
//   fetchAccessToken(code);
//   window.history.pushState("", "", redirect_uri); // remove param from url
// }

// function getCode() {
//   let code = null;
//   const queryString = window.location.search;
//   if (queryString.length > 0) {
//     const urlParams = new URLSearchParams(queryString);
//     code = urlParams.get("code");
//   }
//   return code;
// }

// function fetchAccessToken(code) {
//   let body = "grant_type=authorization_code";
//   body += "&code=" + code;
//   body += "&redirect_uri=" + encodeURI(redirect_uri);
//   body += "&client_id=" + client_id;
//   body += "&client_secret=" + client_secret;
//   callAuthorizationApi(body);
// }

// function callAuthorizationApi(body) {
//   let xhr = new XMLHttpRequest();
//   xhr.open("POST", "https://accounts.spotify.com/api/token", true);
//   xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//   xhr.setRequestHeader(
//     "Authorization",
//     "Basic " + btoa(client_id + ":" + client_secret)
//   );
//   xhr.send(body);
//   xhr.onload = handleAuthorizationResponse;
// }

// function handleAuthorizationResponse() {
//   if (this.status == 200) {
//     var data = JSON.parse(this.responseText);
//     console.log(data);
//     var data = JSON.parse(this.responseText);
//     if (data.access_token != undefined) {
//       access_token = data.access_token;
//       localStorage.setItem("access_token", access_token);
//     }
//     if (data.refresh_token != undefined) {
//       refresh_token = data.refresh_token;
//       localStorage.setItem("refresh_token", refresh_token);
//     }
//     onPageLoad();
//   } else {
//     console.log(this.responseText);
//     alert(this.responseText);
//   }
// }

// function callApi(method, url, body, callback) {
//   let xhr = new XMLHttpRequest();
//   xhr.open(method, url, true);
//   xhr.setRequestHeader("Content-Type", "application/json");
//   xhr.setRequestHeader("Authorization", "Bearer " + access_token);
//   xhr.send(body);
//   xhr.onload = callback;
// }

// function handleApiResponse() {
//   if (this.status == 200) {
//     console.log(this.responseText);
//     // setTimeout(currentlyPlaying, 2000);
//   } else if (this.status == 204) {
//     // setTimeout(currentlyPlaying, 2000);
//   } else if (this.status == 401) {
//     refreshAccessToken();
//   } else {
//     console.log(this.responseText);
//     onPageLoad();
//   }
// }

// function play(DEVICE_ID, URIS) {
//   callApi(
//     "PUT",
//     "https://api.spotify.com/v1/me/player/play?device_id=" + DEVICE_ID,
//     URIS,
//     handleApiResponse
//   );
// }

// function pause(DEVICE_ID) {
//   callApi(
//     "PUT",
//     "https://api.spotify.com/v1/me/player/pause?device_id=" + DEVICE_ID,
//     null,
//     handleApiResponse
//   );
// }

// function currentlyPlaying() {
//   callApi(
//     "GET",
//     "https://api.spotify.com/v1/me/player/currently-playing",
//     null,
//     handleCurrentlyPlaying
//   );
// }

// function skip(DEVICE_ID) {
//   callApi(
//     "POST",
//     "https://api.spotify.com/v1/me/player/next?device_id=" + DEVICE_ID,
//     null,
//     handleApiResponse
//   );
// }

// function getPlaylist() {
//   callApi(
//     "GET",
//     "https://api.spotify.com/v1/playlists/0Me1ANsc8Kmz1cUNdpLK3v",
//     null,
//     handleGetPlaylist
//   );
// }

// function handleGetPlaylist() {
//   if (this.status == 200) {
//     SONG_LIST = JSON.parse(this.responseText);
//   } else if (this.status == 401) {
//     refreshAccessToken();
//   } else {
//     console.log(this.responseText);
//   }
// }

// function handleCurrentlyPlaying() {
//   if (this.status == 200) {
//     // Something is playing
//     var data = JSON.parse(this.responseText);

//     if (data.item != null) {
//       document.getElementById("trackTitle").innerHTML = data.item.name;
//       document.getElementById("trackArtist").innerHTML =
//         data.item.artists[0].name;
//     }
//   } else if (this.status == 401) {
//     refreshAccessToken();
//   } else {
//     console.log(this.responseText);
//   }
// }

// window.onSpotifyWebPlaybackSDKReady = () => {
//   const token = localStorage.getItem("access_token");
//   var DEVICE_ID;
//   const player = new Spotify.Player({
//     name: "John's Website",
//     getOAuthToken: (cb) => {
//       cb(token);
//     },
//   });

//   // Error handling
//   player.addListener("initialization_error", ({ message }) => {
//     console.error(message);
//   });
//   player.addListener("authentication_error", ({ message }) => {
//     refreshAccessToken();
//     onPageLoad();
//     console.error(message);
//   });
//   player.addListener("account_error", ({ message }) => {
//     console.error(message);
//   });
//   player.addListener("playback_error", ({ message }) => {
//     console.error(message);
//   });

//   // Ready
//   player.addListener("ready", ({ device_id }) => {
//     DEVICE_ID = device_id;
//     console.log("Ready with Device ID", device_id);
//   });

//   // Not Ready
//   player.addListener("not_ready", ({ device_id }) => {
//     console.log("Device ID has gone offline", device_id);
//   });

//   player.addListener(
//     "player_state_changed",
//     ({ position, duration, track_window: { current_track } }) => {
//       document.getElementById("trackTitle").innerHTML = current_track.name;
//       document.getElementById("by").innerHTML = " - ";

//       let temp = "";
//       for (let i = 0; i < current_track.artists.length; i++) {
//         temp += current_track.artists[i].name;
//         temp += ", ";
//       }

//       artists = temp.slice(0, -2);

//       document.getElementById("trackArtist").innerHTML = artists;
//     }
//   );

//   // Connect to the player!
//   player.connect().then((success) => {
//     if (success) {
//       console.log("The Web Playback SDK successfully connected to Spotify!");
//       console.log(SONG_LIST);
//       for (let i = 0; i < SONG_LIST.tracks.items.length; i++) {
//         BODY[i] = SONG_LIST.tracks.items[i].track.uri;
//       }
//       URIS.uris = BODY;
//     }
//   });

// $(".playback").on("click", function () {
//   pic = document.getElementsByClassName("playback");

//   if (
//     pic[0].src ==
//     "https://john-walling.herokuapp.com/assets/img/iconmonstr-video-15-240.png"
//   ) {
//     pic[0].src = "/assets/img/iconmonstr-media-control-8-240.png";

//     if (document.getElementById("by").innerHTML == "") {
//       play(DEVICE_ID, JSON.stringify(URIS));
//     } else {
//       callApi(
//         "PUT",
//         "https://api.spotify.com/v1/me/player/play?device_id=" + DEVICE_ID,
//         null,
//         handleApiResponse
//       );
//     }
//   } else {
//     pic[0].src = "assets/img/iconmonstr-video-15-240.png";
//     pause(DEVICE_ID);
//   }
// });

// $(".skip").on("click", function () {
//   skip(DEVICE_ID);
//   if (
//     pic[0].src ==
//     "https://john-walling.herokuapp.com/assets/img/iconmonstr-video-15-240.png"
//   ) {
//     pic[0].src = "/assets/img/iconmonstr-media-control-8-240.png";
//   }
// });
// };

function scroll_to(clicked_link, nav_height) {
  var element_class = clicked_link.attr("href").replace("#", ".");
  var scroll_to = 0;

  element_class += "-container";
  scroll_to = $(element_class).offset().top - nav_height;

  if ($(window).scrollTop() != scroll_to) {
    $("html, body").stop().animate({ scrollTop: scroll_to }, 1000);
  }
}

jQuery(document).ready(function () {
  // navigation
  $("a.scroll-link").on("click", function (e) {
    e.preventDefault();
    scroll_to($(this), $("nav").outerHeight());
  });

  $(".top-container").backstretch("assets/img/mountain.png");
});

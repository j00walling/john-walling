window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQA1ULpF6fdtkSesAtjxTIKrj_vYHzX3U1HaFraJK-siSbZVsm9Ud44WHxXIpLzwcE26fOqKf7t1KGFEqlkAXl20elk7NqTjQqtgqnNgldcgxszPUglO8J2xeV3QBq6oQxQ2KfOjHLHwdFwhu0psSYk3AHMCmdTco_gy'
    const player = new Spotify.Player({
      name: 'John\'s Website',
      getOAuthToken: cb => { cb(token); }
    });
  
    // Error handling
    player.addListener('initialization_error', ({ message }) => { console.error(message); });
    player.addListener('authentication_error', ({ message }) => { console.error(message); });
    player.addListener('account_error', ({ message }) => { console.error(message); });
    player.addListener('playback_error', ({ message }) => { console.error(message); });
  
    // Playback status updates
    player.addListener('player_state_changed', state => { console.log(state); });
  
    // Ready
    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);
    });
  
    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });
  
    // Connect to the player!
    player.connect();

    $('.playback').on('click', function() {
        player.togglePlay().then(() => {
            console.log('Toggled playback!');
        });
    })
  };

function scroll_to(clicked_link, nav_height) {
    var element_class = clicked_link.attr('href').replace('#', '.');
    var scroll_to = 0;
    
    element_class += '-container';
    scroll_to = $(element_class).offset().top - nav_height;
    
    if($(window).scrollTop() != scroll_to) {
        $('html, body').stop().animate({scrollTop: scroll_to}, 1000);
    }
}

jQuery(document).ready(function() {
    // navigation
	$('a.scroll-link').on('click', function(e) {
        e.preventDefault();
        scroll_to($(this), $('nav').outerHeight());
    });

    $('.top-container').backstretch("assets/img/mountain.png");
    
});
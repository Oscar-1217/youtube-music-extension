// Receive messages
browser.runtime.onMessage.addListener(async (message) => {
    console.log("Received:", message);

    // get song title
    if (message.action === "getSong") {
        var songTitle = document.querySelector(".title.style-scope.ytmusic-player-bar").textContent;
        return {
            message: songTitle
        };
    }

    // play, pause music
    if (message.action === "play") {

    }

    // next song
    if (message.action === "nextSong") {

    }

    // previous song
    if (message.action === "prevSong") {

    }
});
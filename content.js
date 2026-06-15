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
        var playButton = document.querySelector(".play-pause-button.style-scope.ytmusic-player-bar").querySelector(".style-scope.yt-icon-button");
        playButton.click();
        return {
            action: "clicked"
        };
    }

    // next song
    if (message.action === "nextSong") {
        var nextButton = document.querySelector(".next-button.style-scope.ytmusic-player-bar").querySelector(".style-scope.yt-icon-button");
        nextButton.click();
        return {
            action: "clicked"
        };
    }

    // previous song
    if (message.action === "prevSong") {
        var prevButton = document.querySelector(".previous-button.style-scope.ytmusic-player-bar").querySelector(".style-scope.yt-icon-button");
        prevButton.click();
        return {
            action: "clicked"
        };
    }

    if (message.action === "getPhoto") {
        var image = document.querySelector(".thumbnail-image-wrapper.style-scope.ytmusic-player-bar").querySelector(".image.style-scope.ytmusic-player-bar");
        return {
            img: image?.src
        };
    }
});

// Observe play bar title changed
const target = document.querySelector(".title.style-scope.ytmusic-player-bar");
const image = document.querySelector(".thumbnail-image-wrapper.style-scope.ytmusic-player-bar").querySelector(".image.style-scope.ytmusic-player-bar");
const observer = new MutationObserver(() => {
    console.log("Song title changed: ", target.textContent);
    browser.runtime.sendMessage({
        action: "songChanged",
        title: target.textContent,
        album: image.src
    });
});
observer.observe(target, {childList: true, characterData: true, subtree: true});
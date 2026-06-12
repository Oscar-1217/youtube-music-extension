// Load song when open
document.addEventListener("DOMContentLoaded", loadSong);

async function loadSong() {
    // check if youtube music is opened
    const tabs = await browser.tabs.query({
        url: "*://music.youtube.com/*"
    });

    // is not opened
    if (tabs.length === 0) {
        document.getElementById("title").textContent = "No Song Playing";
        return;
    }

    // is opened, send message to get song
    const response = await browser.tabs.sendMessage(
        tabs[0].id,
        { action: "getSong" }
    );

    // update song title
    document.getElementById("title").textContent = response.message;
}

// update song title every 0.5 sec
setInterval(loadSong, 500);
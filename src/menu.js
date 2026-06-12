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

// Get song changed on runtime
browser.runtime.onMessage.addListener((message) => {
    if (message.action === "songChanged") {
        document.getElementById("title").textContent = message.title;
    }
});


function prevSong() {

}

function nextSong() {

}

function playPause() {

}
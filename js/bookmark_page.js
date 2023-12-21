const funBookmarkPage = () => {
    if (document.querySelector("ytd-browse.style-scope.ytd-page-manager")) {
        document.querySelector("title").innerText = "Bookmark - Sleezzi";
        document.querySelector("ytd-browse.style-scope.ytd-page-manager").style.height = "100%";
        document.querySelector("ytd-browse.style-scope.ytd-page-manager").innerHTML = `<div><h1>List of videos to add to favorites</h1></div>`;
        Object.keys(JSON.parse(localStorage.getItem("bookmark")).list).forEach(video => {
            const container = document.createElement("div");
            container.classList.add("bookmarkContainer");
            container.innerHTML = `
<a class="bookmarkA" href="https://www.youtube.com/watch?v=${JSON.parse(localStorage.getItem("bookmark")).list[video].id}" target="_blank">
    <div class="bookmarkThumbnailContainer">
        <img src="https://i.ytimg.com/vi/${`${JSON.parse(localStorage.getItem("bookmark")).list[video].id}`.replace(/&t=[^&]*s/, "")}/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBY8fmc84NRW_7PxrGC0fF7dH32qQ" height="90%" width="100%"></img>
    </div>
    <div class="bookmarkTitleContainer">
        <h1 id="video-title">${JSON.parse(localStorage.getItem("bookmark")).list[video].title}</h1>
    </div>
</a>
`;
            document.querySelector("ytd-browse.style-scope.ytd-page-manager").appendChild(container);
        });
    } else setTimeout(funBookmarkPage, 100);
}
funBookmarkPage();
const funChannelPage = () => {
    if (document.querySelectorAll("#meta > h3.style-scope.ytd-grid-video-renderer").length >= 5) {
        document.querySelectorAll("#meta > h3.style-scope.ytd-grid-video-renderer").forEach(element => {
            if (element.querySelector("bookmarkDiv") || element.querySelector("a").href.includes("&list=")) return;
            const videoId = element.querySelector("a").href.replace("https://www.youtube.com", "").replace("/watch?v=", "");
            const title = element.querySelector("a").title;
            const div = document.createElement("bookmarkDiv");
            const button = document.createElement("button");
            button["id-video"] = videoId;
            button.classList.add("bookmarkButton");
            button.title = title;
            if (Object.keys(JSON.parse(localStorage.getItem("bookmark")).list).filter(id => id === videoId).length > 0) {
                button.innerHTML = `<img height="100%" width="100%" src="https://sleezzi.github.io/YouTubeBookmark/bookmarckOn.png" alt="Bookmark">`;
            } else {
                button.innerHTML = `<img height="100%" width="100%" src="https://sleezzi.github.io/YouTubeBookmark/bookmarckOff.png" alt="Bookmark">`;
            }
            div.appendChild(button);
            element.appendChild(div);
            button.onmouseup = () => {
                const bookmark = JSON.parse(localStorage.getItem("bookmark"));
                if (Object.keys(bookmark.list).filter(id => id === videoId).length > 0) {
                    delete bookmark.list[videoId];
                    button.innerHTML = `<img height="100%" width="100%" src="https://sleezzi.github.io/YouTubeBookmark/bookmarckOff.png" alt="Bookmark">`;
                } else {
                    bookmark.list[videoId] = { title: title, id: videoId };
                    button.innerHTML = `<img height="100%" width="100%" src="https://sleezzi.github.io/YouTubeBookmark/bookmarckOn.png" alt="Bookmark">`;
                }
                localStorage.setItem("bookmark", JSON.stringify(bookmark));
            }
        });
    }
    if (document.querySelectorAll("#meta > #title-wrapper > h3.title-and-badge.style-scope.ytd-video-renderer").length > 0) {
        document.querySelectorAll("#meta > #title-wrapper > h3.title-and-badge.style-scope.ytd-video-renderer").forEach(element => {
            if (element.querySelector("bookmarkDiv") || element.querySelector("a").href.includes("&list=")) return;
            const videoId = element.querySelector("a").href.replace("https://www.youtube.com", "").replace("/watch?v=", "");
            const title = element.querySelector("a").title;
            const div = document.createElement("bookmarkDiv");
            const button = document.createElement("button");
            button["id-video"] = videoId;
            button.classList.add("bookmarkButton");
            button.title = title;
            if (Object.keys(JSON.parse(localStorage.getItem("bookmark")).list).filter(id => id === videoId).length > 0) {
                button.innerHTML = `<img height="100%" width="100%" src="https://sleezzi.github.io/YouTubeBookmark/bookmarckOn.png" alt="Bookmark">`;
            } else {
                button.innerHTML = `<img height="100%" width="100%" src="https://sleezzi.github.io/YouTubeBookmark/bookmarckOff.png" alt="Bookmark">`;
            }
            div.appendChild(button);
            element.appendChild(div);
            button.onmouseup = () => {
                const bookmark = JSON.parse(localStorage.getItem("bookmark"));
                if (Object.keys(bookmark.list).filter(id => id === videoId).length > 0) {
                    delete bookmark.list[videoId];
                    button.innerHTML = `<img height="100%" width="100%" src="https://sleezzi.github.io/YouTubeBookmark/bookmarckOff.png" alt="Bookmark">`;
                } else {
                    bookmark.list[videoId] = { title: title, id: videoId };
                    button.innerHTML = `<img height="100%" width="100%" src="https://sleezzi.github.io/YouTubeBookmark/bookmarckOn.png" alt="Bookmark">`;
                }
                localStorage.setItem("bookmark", JSON.stringify(bookmark));
            }
        });
    }
}

setInterval(funChannelPage, 100);
funChannelPage();
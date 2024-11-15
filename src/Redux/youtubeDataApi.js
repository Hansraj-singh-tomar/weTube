// export function fetchYoutubeData(resultsPerPage) {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${import.meta.env.VITE_YOUTUBE_API_KEY}&maxResults=${resultsPerPage}`);
//             const data = await response.json();
//             // console.log("youtube data", data);
//             resolve({ data });
//         } catch (error) {
//             reject(error);
//         }
//     })
// }

export function fetchYoutubeData(resultsPerPage) {
    return new Promise((resolve, reject) => {
        try {
            fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${import.meta.env.VITE_YOUTUBE_API_KEY}&maxResults=${resultsPerPage}`)
                .then(response => response.json())
                .then(data => resolve({ data }))
                .catch(error => reject(error));
        } catch (error) {
            reject(error);
        }
    });
}

// --------------------

// export function fetchSingleData(id) {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`);
//             const data = await response.json();
//             console.log("fetch single data", data);
//             resolve({ data });
//         } catch (error) {
//             reject(error)
//         }
//     })
// }

export function fetchSingleData(id) {
    return new Promise((resolve, reject) => {
        try {
            fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`)
                .then(response => response.json())
                .then(data => resolve({ data }))
                .catch(error => reject(error));
        } catch (error) {
            reject(error);
        }
    });
}

// -----------------------------------
// export function fetchSearchSuggestionsData(searchQuery) {
//     return new Promise(async (resolve) => {
//         const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`)
//         const data = await response.json();
//         resolve(data?.items)
//     })
// }
export function fetchSearchSuggestionsData(searchQuery) {
    return new Promise((resolve, reject) => {
        try {
            fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`)
                .then(response => response.json())
                .then(data => resolve(data?.items))
                .catch(error => reject(error));
        } catch (error) {
            reject(error);
        }
    })
}

// ------------------

// export function fetchSearchQuery(searchQuery) {
//     return new Promise(async (resolve) => {
//         const response = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`)
//         const data = await response.json();
//         resolve(data?.[1])
//     })
// }

export function fetchSearchQuery(searchQuery) {
    return new Promise((resolve, reject) => {
        try {
            fetch(`https://thingproxy.freeboard.io/fetch/https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`)
                // fetch(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`)
                .then(response => response.json())
                .then(data => resolve(data?.[1]))
                .catch(error => reject(error))
        } catch (error) {
            reject(error);
        }
    })
}

// -----------------------------------

// export function fetchVideoCategoriesData() {
//     return new Promise(async (resolve) => {
//         const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`)
//         const data = await response.json();
//         resolve(data?.items);
//     })
// }

export function fetchVideoCategoriesData() {
    return new Promise((resolve, reject) => {
        try {
            fetch(`https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`)
                .then(response => response.json())
                .then(data => resolve(data?.items))
                .catch(error => reject(error));
        } catch (error) {
            reject(error);
        }
    })
}

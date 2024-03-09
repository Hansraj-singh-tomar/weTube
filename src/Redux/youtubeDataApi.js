
export function fetchYoutubeData(resultsPerPage) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${import.meta.env.VITE_YOUTUBE_API_KEY}&maxResults=${resultsPerPage}`);
            const data = await response.json();
            // console.log("youtube data", data);
            resolve({ data });
        } catch (error) {
            reject(error);
        }
    })
}


export function fetchSingleData(id) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`);
            const data = await response.json();
            // console.log("fetch single data", data);
            resolve({ data });
        } catch (error) {
            reject(error)
        }
    })
}

// const response = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`)
export function fetchSearchSuggestionsData(searchQuery) {
    return new Promise(async (resolve) => {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`)
        const data = await response.json();
        resolve(data?.items)
    })
}


export function fetchVideoCategoriesData() {
    return new Promise(async (resolve) => {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`)
        const data = await response.json();
        resolve(data?.items);
    })
}
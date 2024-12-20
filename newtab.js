function getFavicon(url) {
    fetch(url).then(res => res.text()).then(res => {
        let d = new DOMParser().parseFromString(res, 'text/html')
        let allFaviconURLs = [...d.querySelectorAll('link[rel="icon"],link[rel="shortcut icon"]')].map(a => a.href)
    })

}
let favourites = [
    {
        title: `Awesome Favourite Site`,
        url: `https://awesome.com`,
        faviconURL: `https://cdn-icons-png.flaticon.com/512/10917/10917529.png`
    },
    {
        title: `Google Search Engine`,
        url: `https://google.com/`,
        faviconURL: ``,
    },
    {
        title: `TradingView Charts`,
        url: `https://www.tradingview.com/chart/`,
        faviconURL: `https://static.tradingview.com/static/images/favicon.ico`,
    },
    {
        title: `CIMB Bank`,
        url: `https://www.cimbclicks.com.my/`,
        faviconURL: `https://www.cimbclicks.com.my/assets/cimb-favicon.ico`,
    },
    {
        title: ``,
        url: ``,
        faviconURL: ``,
    },
    {
        title: ``,
        url: ``,
        faviconURL: ``,
    },
    {
        title: ``,
        url: ``,
        faviconURL: ``,
    },
]

favourites.map((f, i) => {
    let { title, url, faviconURL } = f
    if(!title && !url && !faviconURL) return
    let favourites_item_url = url, favourites_item_title = title, favourites_item_favicon = faviconURL
    let default_favicon = `https://images.squarespace-cdn.com/content/v1/524883b7e4b03fcb7c64e24c/1685041480038-AWYM7XXSYNHG53PL43L6/Squarespace+Favicon.jpg?format=1500w`

    let item = `<a href="${favourites_item_url}">
        <div class="shortcut-item" style="display: flex; flex-width: 33%; height: 100%; direction:1row; align-items: center; border: 0px solid blue; border-radius: 5px; padding: 5px; ">
            <div style="width: 60px; display: flex; flex-direction: row; justify-content: space-evenly;">
                <div class="favicon">
                    <img src="${favourites_item_favicon ? favourites_item_favicon : default_favicon}" style="width: 35px; height: 35px"alt="" srcset="">
                </div>
                
            </div>
            <div style="display: flex; flex-direction: column;">
                <div class="title" style="width: 250px;">
                    ${favourites_item_title}
                </div>
                <div class="url" style="width: 250px; overflow-wrap: anywhere;">${favourites_item_url}</div> <!-- URL Viz fleh -->
            </div>
            
            <div class="custom-data"></div>
        </div>
    </a>`
    let itemD = document.createElement('div')
    itemD.innerHTML = item
    document.body.querySelector('.quick-links').firstElementChild.appendChild(itemD)

})
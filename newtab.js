function getFavicon(url) {
    fetch(url).then(res => res.text()).then(res => {
        let d = new DOMParser().parseFromString(res, 'text/html')
        let allFaviconURLs = [...d.querySelectorAll('link[rel="icon"],link[rel="shortcut icon"]')].map(a => a.href)
    })

}
let favourites = [
    // {
    //     title: `Awesome Favourite Site`,
    //     url: `https://awesome.com`,
    //     faviconURL: `https://cdn-icons-png.flaticon.com/512/10917/10917529.png`
    // },
    // {
    //     title: `Google Search Engine`,
    //     url: `https://google.com/`,
    //     faviconURL: ``,
    // },
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
        title: `Google Maps`,
        url: `https://www.google.com/maps`,
        faviconURL: `https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-map-icon.png`,
    },
    {
        title: `i3`,
        url: `https://klse.i3investor.com/web/stock/trending-now`,
        faviconURL: `https://cdn2.i3investor.com/web/img/icon/i3investor16.png`,
    },
    {
        title: `IYF `,
        url: `https://www.iyf.tv/`,
        faviconURL: `https://www.ondemandchina.com/favicon.ico`,
    },
    {
        title: `CN 影院`,
        url: `https://cnys.tv/`,
        faviconURL: `https://cnys.tv/upload/site/20241108-1/f15406810699ffec5f80135c212d08de.png`,
    },
    {
        title: `YT Downloader`,
        url: `https://yt5s.is/convert`,
        faviconURL: ``,
    },
    {
        title: `NoteBook LM`,
        url: `https://notebooklm.google.com/`,
        faviconURL: `https://notebooklm.google/_/static/branding/v4/light_mode/favicon/favicon.svg`,
    },
    {
        title: `Google Colab`,
        url: `https://colab.research.google.com/`,
        faviconURL: `https://ssl.gstatic.com/colaboratory-static/common/72333aafcb242d934342c5625a20e095/img/favicon.ico`,
    },
    {
        title: `DeerPark AI`,
        url: `https://deerpark.ai/read/`,
        faviconURL: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBmaWxsPSIjNDU1QTY0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTMgMTFoMTh2MUgzem0xNC42Mi0xLTIuMjktNi4xYy0uMTktLjUtLjc0LS43Ny0xLjI1LS42TDEyIDRsLTIuMDktLjdjLS41MS0uMTctMS4wNi4xLTEuMjUuNkw2LjM4IDEwaDExLjI0em0tMS4xMiAzYy0xLjY2IDAtMy4wNCAxLjE2LTMuNCAyLjcxLS44NC0uMzYtMS42Mi0uMjYtMi4yLS4wMUEzLjUwMyAzLjUwMyAwIDAgMCA3LjUgMTNDNS41NyAxMyA0IDE0LjU3IDQgMTYuNVM1LjU3IDIwIDcuNSAyMGMxLjg0IDAgMy4zMy0xLjQyIDMuNDctMy4yMi4zLS4yMSAxLjA5LS42IDIuMDYuMDIuMTYgMS43OSAxLjY0IDMuMiAzLjQ3IDMuMiAxLjkzIDAgMy41LTEuNTcgMy41LTMuNVMxOC40MyAxMyAxNi41IDEzem0tOSA2YTIuNSAyLjUgMCAwIDEgMC01IDIuNSAyLjUgMCAwIDEgMCA1em05IDBhMi41IDIuNSAwIDAgMSAwLTUgMi41IDIuNSAwIDAgMSAwIDV6Ii8+PC9zdmc+`,
    },
    {
        title: `筹码分布`,
        url: `http://www.maofou.com/jsfx/choumafenbu/`,
        faviconURL: ``,
    },
    {
        title: ``,
        url: ``,
        faviconURL: ``,
    },
]
// Google Maps, i3,, iyf, cnyingyuan, youtube, yt to mp3, notebooklm, deerpark ai, http://www.maofou.com/jsfx/choumafenbu/

favourites.map((f, i) => {
    let { title, url, faviconURL } = f
    if (!title && !url && !faviconURL) return
    let favourites_item_url = url, favourites_item_title = title, favourites_item_favicon = faviconURL
    let default_favicon = `https://images.squarespace-cdn.com/content/v1/524883b7e4b03fcb7c64e24c/1685041480038-AWYM7XXSYNHG53PL43L6/Squarespace+Favicon.jpg?format=1500w`

    // let item = `<a href="${favourites_item_url}">
    //     <div class="shortcut-item" style="display: flex; flex-width: 33%; height: 100%; direction:1row; align-items: center; border: 0px solid blue; border-radius: 5px; padding: 5px; ">
    //         <div style=" flex-direction: row; justify-content: space-evenly;">
    //             <div class="favicon">
    //                 <img src="${favourites_item_favicon ? favourites_item_favicon : default_favicon}" style="width: 35px; height: 35px"alt="" srcset="">
    //             </div>

    //         </div>
    //         <div style="display: flex; flex-direction: column;">
    //             <div class="title" style="width: 250px;">
    //                 ${favourites_item_title}
    //             </div>
    //             <div class="url" style="width: 250px; overflow-wrap: anywhere;">${favourites_item_url}</div> <!-- URL Viz fleh -->
    //         </div>

    //         <div class="custom-data"></div>
    //     </div>
    // </a>`
    let item = `<a href="${favourites_item_url}">
        <div class="shortcut-item"
            style="display: flex; flex-direction: column; align-items: center; justify-content: space-evenly; width: 140px; height: 100px; direction:1row; border: 0px solid blue; border-radius: 5px; margin-bottom: 50px; ">
            <div style=" ">
                <div class="favicon">
                    <img src="${favourites_item_favicon ? favourites_item_favicon : default_favicon}"
                        style="width: 35px; height: 35px" alt="" srcset="">
                </div>

            </div>
            <div class="title" style="width: 100%; font-size: 18px; display: flex; align-items: center; justify-content: center">
                <p style="text-align: center">${favourites_item_title}</p>
            </div>



        </div>
    </a>`
    let itemD = document.createElement('div')
    itemD.style = `height: 100px`
    itemD.innerHTML = item
    document.body.querySelector('.quick-links')/* .firstElementChild */.appendChild(itemD)

})
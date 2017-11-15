((doc, win) => {
    const docEl = document.documentElement
    let tid
    const setRem = () => {
        //let visualView = Math.min(docEl.getBoundingClientRect().width, 540);
        let visualView = docEl.getBoundingClientRect().width
        let newBase = 100 * visualView / 750
        docEl.style.fontSize = newBase + 'px'
    }

    window.addEventListener('resize', () => {
        clearTimeout(tid)
        tid = setTimeout(setRem, 300)
    })
    window.addEventListener('pageshow', (e) => {
        if (e.persisted) {
            clearTimeout(tid)
            tid = setTimeout(setRem, 300)
        }
    })
    setRem()
})(document, window)
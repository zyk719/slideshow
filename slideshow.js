//
// 给前后浏览按钮绑定事件
var bindEventSlide = () => {
    var selector = '.zyy-slide-button'
    bindAll(selector, 'click', (event) => {
        var button = event.target
        var num = Number(button.dataset.num)
        playNextImage(num)
    })
}

// 给指示器绑定事件
var bindEventIndicator = () => {
    var selector = '.zyy-slide-indicator'
    bindAll(selector, 'click', (event) => {
        var indicator = event.target
        var index = indicator.dataset.id
        var slideshow = indicator.parentElement.parentElement
        showImageAtIndex(slideshow, index)
    })
}

// 鼠标悬停在图片上绑定事件
var bindEventPause = () => {
    var selector = '.zyy-slide-image'
    var clockId = autoPlay()
    bindAll(selector, 'mouseover', (event) => {
        clearInterval(clockId)
    })
    bindAll(selector, 'mouseout', (event) => {
        clockId = autoPlay()
    })
}

// 获取下一张图片的 index
var nextIndex = (element, num) => {
    var slideshow = element
    var numberOfImgs = Number(slideshow.dataset.imgs)
    // 当前图片的 序号
    var activeIndex = Number(slideshow.dataset.active)
    var i = (activeIndex + num + numberOfImgs) % numberOfImgs
    return i
}

// 根据下一张图片的 index 显示图片
var showImageAtIndex = (element, num) => {
    var slideshow = element
    var nextIndex = num
    // 改变 slideshow active 的序号为下一张的 index
    slideshow.dataset.active = nextIndex
    var imageActive = 'zyy-image-active'
    var imageSelecor = '#id-zyyimage-' + String(nextIndex)
    var imageShow = e(imageSelecor)
    changeCss(imageShow, imageActive)
    // 改变 indicator 的显示效果
    var indicatorActive = 'zyy-indicator-active'
    var indicatorSelecor = '#id-indicator-' + String(nextIndex)
    var indicatorShow = e(indicatorSelecor)
    changeCss(indicatorShow, indicatorActive)
}

// 根据参数 num 播放上一张或下一张图片
var playNextImage = (num) => {
    var slideshow = e('.zyy-slideshow')
    var index = nextIndex(slideshow, num)
    showImageAtIndex(slideshow, index)
}

// 自动播放图片
var autoPlay = () => {
    var interval = 2000
    var clockId = setInterval(() => {
        playNextImage(1)
    }, interval)
    return clockId
}

var __main = () => {
    bindEventSlide()
    bindEventIndicator()
    bindEventPause()
}

__main()

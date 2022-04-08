$(document).ready(function() {
    let position = 0
    
    const slidesToShow = 1
    const slidesToScroll = 1
    
    const container = $(".slider-container")
    const track = $(".slider-track")
    const item = $(".slider-item")

    const btnprev = $(".slider-prev")
    const btnnext = $(".slider-next")

    const itemWidth = container.width() / slidesToShow 

    const movePosition = slidesToScroll * itemWidth

    const itemsCount = item.length

    btnprev.click(function() {
        position += movePosition
        setPosition()
        checkBtns()
    })
    btnnext.click(function() {
        position -= movePosition
        setPosition()
        checkBtns()
    })

    const setPosition = () => {
        track.css({
            transform: `translateX(${position}px)`
        })
    }

    const checkBtns = () => {
        btnprev.prop('disabled', position === 0)
        btnnext.prop('disabled', position <= -(itemsCount - slidesToShow) * itemWidth)
    }
    checkBtns()
})

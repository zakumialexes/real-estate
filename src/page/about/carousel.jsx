import React from 'react'
import aboutStyle from './about.module.scss'

export const Carousel = () => {

    let box = document.querySelector('.carouselCon')

    const btnpressPre = () => {
        let width = box.clientWidth;    
        box.scrollLeft = box.scrollLeft - width;
        console.log(width)
    }
    const btnpressNext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width)
    }
    return (
        <div className={aboutStyle.carouselProduct}>
            <button className={aboutStyle.preBtn} onClick={btnpressPre}>pre</button>
            <button className={aboutStyle.nextBtn} onClick={btnpressNext}>next</button>

            <div className={aboutStyle.carouselCon}>
                <div className={aboutStyle.cardss}>My card no. 1</div>
                <div className={aboutStyle.cardss}>My card no. 2</div>
                <div className={aboutStyle.cardss}>My card no. 3</div>
                <div className={aboutStyle.cardss}>My card no. 4</div>
                <div className={aboutStyle.cardss}>My card no. 5</div>
                <div className={aboutStyle.cardss}>My card no. 6</div>
                <div className={aboutStyle.cardss}>My card no. 7</div>
                <div className={aboutStyle.cardss}>My card no. 8</div>
                <div className={aboutStyle.cardss}>My card no. 9</div>
            </div>
        </div>
    )
}

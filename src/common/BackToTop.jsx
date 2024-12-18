import React, { useEffect, useState } from 'react'

const BackToTop = () => {
    const [scrollTop, setScrollToTop] = useState(false)
    const scrollHandler = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const setHendler = () => {
        setScrollToTop(window.scrollY > 100)
    }
    useEffect(() => {
        window.addEventListener("scroll", setHendler)
    },)

    return (
        <>
            {scrollTop && (
                <img onClick={scrollHandler} className="fixed right-2.5 bottom-2.5 cursor-pointer size-12 hover:animate-bounce min-[1991px]:hidden" src="/assets/images/webp/back-to-top.webp" alt="bact to top" />)
            }
        </>
    )
}

export default BackToTop
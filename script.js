var tl = gsap.timeline();
tl.from("nav h1",{
    opacity:0,
    duration: 0.5,
    delay: 0.5
})
tl.from("nav .wrap h2",{
    opacity:0,
    duration: 0.5,
    stagger: 0.3
})
tl.from("nav button",{
    opacity:0,
    duration: 0.5
})
tl.from(".container h1",{
    opacity:0,
    duration: 0.5,
    y: 20
})
tl.from(".container p",{
    opacity:0,
    duration: 0.5,
    x: -20
})
tl.from(".container img",{
    opacity:0,
    duration: 0.75,
    scale: 0.5
})

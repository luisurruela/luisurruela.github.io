new Glide('.glide', {
    autoplay: 2000,
    perView: 3,
    peek: { before: 50, after: 50 },
    type: 'carousel',
    breakpoints: {
        767: {
            perView: 1,
            peek: {before: 30, after: 30}
        },
        1025: {
            perView: 2,
            peek: {before: 40, after: 40}
        }
    }
}).mount()
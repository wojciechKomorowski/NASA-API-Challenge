$(() => {

    // --- Load more button ---

    let button = $('button');
    let gallery2 = $('.gallery2');

    button.on('click', () => {
        if (gallery2.hasClass('display-none')) {
            gallery2.toggleClass('display-none');
            button.text('Hide');
        } else {
            gallery2.toggleClass('display-none');
            button.text('Load more');
        }
            
    })

    // --- Astronomy Picture of the day ---

    let apodUrl = 'https://api.nasa.gov/planetary/apod?api_key=XNBvklQQlg62IV2QXvch6CD0QDB3p9UP0ut9Gt4J';
    let header = $('.header');
    let title = header.find('h3');
    let date = header.find('h4');

    $.ajax({
        method: 'GET',
        url: apodUrl
    }).done(function(apod) {
        console.log('Dane zostały wczytane');
        header.css({
            background: `url('${apod.hdurl}')`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        });
        title.text(`${apod.title}`);
        date.text(`${apod.date}`);  
    }).fail(function(error) {
        console.log('Dane nie zostały wczytane!');
    })

    // --- Mars rover photos ---

    let marsUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=XNBvklQQlg62IV2QXvch6CD0QDB3p9UP0ut9Gt4J';

    let pictures = $('.picture');

    $.ajax({
        method: 'GET',
        url: marsUrl
    }).done(function(mars) {
        console.log('Dane zostały wczytane');
        for (let i = 0; i < pictures.length; i++) {
            pictures.eq(i).attr('src', `${mars.photos[i].img_src}`);
        };
    }).fail(function(error) {
        console.log('Dane nie zostały wczytane!');
    })
});

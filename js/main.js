(() => {
    // grab a ref to the audio
    let track = document.querySelector('audio'),
        startBut = document.querySelector('.start-button');

    function startTextAnim() {
        // start the audio
        track.play();        
        // add some animation classes to the main text animation paths
        let part1Paths = document.querySelectorAll('#part1 > path'),
            part2Paths = document.querySelectorAll('#part2 > path'),
            part3Paths = document.querySelectorAll('#part3 > path'),
            part4Paths = document.querySelectorAll('#part4 > path'),
            part5Paths = document.querySelectorAll('#part5 > path'),
            theboyImage = document.querySelector('.theboy');    

            part1Paths.forEach(path => path.classList.add('text-fade'));
            part2Paths.forEach(path => path.classList.add('text-fade'));
            part3Paths.forEach(path => path.classList.add('text-fade'));
            part4Paths.forEach(path => path.classList.add('text-fade'));
            part5Paths.forEach(path => path.classList.add('text-fade'));

        theboyImage.classList.add('zoom-tony');

        // hide the play button
        startBut.classList.add('hidden');
    }

    function setup() {
        // animate the start screen away
        // select the pieces
        let introPieces = document.querySelectorAll("#intro g"),
            girlImg = document.querySelector('.girl-intro'),
            part1Pieces = document.querySelectorAll("#part1 g"),
            part2Pieces = document.querySelectorAll("#part2 g"),
            part3Pieces = document.querySelectorAll("#part3 g"),
            part4Pieces = document.querySelectorAll("#part4 g"),
            part5Pieces = document.querySelectorAll("#part5 g");

        // add the animation class to make them disappear
        introPieces.forEach(piece => piece.classList.add('intro-fade'));
        part1Pieces.forEach(piece => piece.classList.add('intro-fade'));
        part2Pieces.forEach(piece => piece.classList.add('intro-fade'));
        part3Pieces.forEach(piece => piece.classList.add('intro-fade'));
        part4Pieces.forEach(piece => piece.classList.add('intro-fade'));
        part5Pieces.forEach(piece => piece.classList.add('intro-fade'));

        girlImg.addEventListener('animationend', startTextAnim);

        // add tony's animation class and move him left
        girlImg.classList.add('animate-girl');

    }

    startBut.addEventListener('click', setup);
})();
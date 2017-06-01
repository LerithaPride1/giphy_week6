
$(window).load(function() {
			$("#loader-left").fadeIn('fast').delay(4000).fadeOut('slow');
		});

// Initial array of movies
    var movies = ["Denzel Washington", "Halle Berry", "Leonardo DiCaprio", "Will Smith", "Angelina-Jolie","Al-Pacino", "Angela Bassett", "Morgan Freeman", "Tom Hanks"];

    var apiKey ="&api_key=dc6zaTOxFJmzC";
    var limit = "&limit=10";

     
    function displayMovieInfo(){

        var movie = $(this).attr('data-name');

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + movie + apiKey + limit;
         
        $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
            console.log(response);

             for (var i = 0; i < movies.length; i++){

            var newDiv = $('<div>');
            newDiv.addClass("image-container");

            var ratingData = (response.data[i].rating);

            var rating = $("<p>").text(ratingData);
            rating.addClass('img-rating');
            newDiv.append(rating);

            var image = $("<img>").attr("src", response.data[i].images.fixed_height.url);
            image.addClass('img-grid');
          

            newDiv.append(image);

            $("#moviesView").prepend(newDiv);

        }
        });

    }

    // ========================================================

      function renderButtons(){ 
        $('#buttonsView').empty();

            for (var i = 0; i < movies.length; i++){

             
            var a = $('<button>') 
            a.addClass('movie'); 
            a.addClass('btn');
            a.addClass('btn-med'); 
            a.addClass('btn-primary');
            a.attr('data-name', movies[i]); 
            a.text(movies[i]); 
            $('#buttonsView').append(a); 
        }
    }

    $('#addMovie').on('click', function(){

        var movie = $('#movie-input').val().trim();

        movies.push(movie);
        
        renderButtons();

        return false;
    })
    
    $(document).on('click', '.movie', displayMovieInfo);
 
    renderButtons();

	
var menus = document.getElementsByClassName('hamburger-menu');

[].forEach.call(menus, function (m) {
    m.addEventListener('click', function () {
        m.classList.toggle('open');
    });
});
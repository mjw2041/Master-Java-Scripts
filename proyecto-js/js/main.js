$(document).ready(function(){                    
      // slider 
      if(window.location.href.indexOf('index') > -1){

          $('.bxslider').bxSlider({
            mode: 'fade',
            captions: false,
            slideWidth: 1200,
            responsive: true,
            pager: true
          });        
      }
            
        // Posts
        if(window.location.href.indexOf('index') > -1){
        var posts = [
          {
            title: 'Prueba de titulo 1',
            date: "Publicado el dia " + moment().date() + " de " + moment().format('MMMM') + " de " +  moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, atque voluptate! Tenetur ab officiis hic doloribus pariatur nulla, deleniti placeat illo incidunt sequi quibusdam dicta ea aspernatur corporis magnam nostrum vitae error recusandae sapiente animi!  Perspiciatis expedita eveniet laborum optio impedit maiores odio rem vero atque! Similique rem odio placeat!'
          },
          {
            title: 'Prueba de titulo 2',
            date: "Publicado el dia " + moment().date() + " de " + moment().format('MMMM') + " de " +  moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, atque voluptate! Tenetur ab officiis hic doloribus pariatur nulla, deleniti placeat illo incidunt sequi quibusdam dicta ea aspernatur corporis magnam nostrum vitae error recusandae sapiente animi!  Perspiciatis expedita eveniet laborum optio impedit maiores odio rem vero atque! Similique rem odio placeat!'
          },
          {
            title: 'Prueba de titulo 3',
            date: "Publicado el dia " + moment().date() + " de " + moment().format('MMMM') + " de " +  moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, atque voluptate! Tenetur ab officiis hic doloribus pariatur nulla, deleniti placeat illo incidunt sequi quibusdam dicta ea aspernatur corporis magnam nostrum vitae error recusandae sapiente animi!  Perspiciatis expedita eveniet laborum optio impedit maiores odio rem vero atque! Similique rem odio placeat!'
          },
          {
            title: 'Prueba de titulo 4',
            date: "Publicado el dia " + moment().date() + " de " + moment().format('MMMM') + " de " +  moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, atque voluptate! Tenetur ab officiis hic doloribus pariatur nulla, deleniti placeat illo incidunt sequi quibusdam dicta ea aspernatur corporis magnam nostrum vitae error recusandae sapiente animi!  Perspiciatis expedita eveniet laborum optio impedit maiores odio rem vero atque! Similique rem odio placeat!'
          },
          {
            title: 'Prueba de titulo 5',
            date: "Publicado el dia " + moment().date() + " de " + moment().format('MMMM') + " de " +  moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, atque voluptate! Tenetur ab officiis hic doloribus pariatur nulla, deleniti placeat illo incidunt sequi quibusdam dicta ea aspernatur corporis magnam nostrum vitae error recusandae sapiente animi!  Perspiciatis expedita eveniet laborum optio impedit maiores odio rem vero atque! Similique rem odio placeat!'
          },
        ];
    
        posts.forEach((item, index) => {
            var post = `  
            <article class="post">
                      <h2> ${item.title}</h2>
                      <span class="fecha"> ${item.date}</span>
                      <p> 
                          ${item.content}
                      </p>
                      <a href="#" class="buttom-more">Leer mas</a>
                  </article>
            `;
            $("#posts").append(post);  
        }); 
      }  


      // Selecionar Tema
      var theme = $("#theme");
            
      $("#to-green").click(function(){
            theme.attr("href", "css/green.css");

      });

      $("#to-red").click(function(){
        theme.attr("href", "./css/red.css");
        

      });

      $("#to-blue").click(function(){        
        theme.attr("href", "css/blue.css");
        
      });

      // Scroll para arriba
      $('.subir').click(function(e){
        e.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 800);
        return false
      });

      // login falso
      $("#login form").submit(function(){
        var form_name = $("#form_name").val();
        localStorage.setItem("form_name", form_name);        
      });

      var form_name = localStorage.getItem("form_name");
      
      if ( form_name != null && form_name != undefined) {
        var about_parrafo = $("#about p");
        
        about_parrafo.html("<br><strong>Bienvenido " + form_name + "</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar Sesion</a>");
        
        $("#login").hide();
        
        $("#logout").click(function(){
          localStorage.clear();
          location.reload();     
        });
        
      }
      console.log("Paso" + form_name);
     
      // Acordeon

	if(window.location.href.indexOf('about') > -1){
		$("#acordeon").accordion();
	}


	// Reloj
	if(window.location.href.indexOf('reloj') > -1){

		setInterval(function(){
				var reloj = moment().format("hh:mm:ss");
				$('#reloj').html(reloj);
		}, 1000);
		
	
	}

	// ValidaciÃ³n
	if(window.location.href.indexOf('contact') > -1){
	
		$("form input[name='date']").datepicker({
			dateFormat: 'dd-mm-yy'
		});

		$.validate({
		    lang: 'es',
		    errorMessagePosition: 'top',
		    scrollToTopOnError: true
		});

	}
});
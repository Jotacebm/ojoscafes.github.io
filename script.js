const btnSi = document.getElementById('si');
const btnNo = document.getElementById('no');


btnNo.addEventListener('mouseover', ()=>{
    const randomx = parseInt(Math.random()*90);
    const randomy = parseInt(Math.random()*90);
    btnNo.style.setProperty('top', randomy+'%');
    btnNo.style.setProperty('left', randomx+'%');
    btnNo.style.setProperty('transform', `translate(-%${randomx}%,-${randomy}%)`);

});

btnSi.addEventListener('click', (e)=>{

      Swal.fire({
        title: "Ya sabia que si querias jaja",
        imageUrl: "img/abrazo2.jpg",
        imageHeight: 250,
        
        text: "Pero esta vez te dedicare algo, ¿Quieres verlo? entonces aprieta Yes",

        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        cancelButtonText:  "No"
      }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Aun no lo ves porque esta escondido..",
                text: "Solo tienes que encontrarlo... Mentira aquí está solo aprieta VER",
                icon: "success",
                confirmButtonText: "VER"
            }).then((result) => {
                if (result.isConfirmed) {
                    
                    window.location.href = "palabras.html";
                }
            });
        }
    });
});



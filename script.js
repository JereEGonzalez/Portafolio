let e = 0;
const icon = document.getElementById('icon');


document.getElementById('dark-theme').addEventListener
('click', () =>{
  
    if (e === 0){

        document.documentElement.style.setProperty('--color1', '#666' );
        document.documentElement.style.setProperty('--color2', '#333' );
        document.documentElement.style.setProperty('--select', 'rgba(206, 206, 206, 0.2)' );
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        e = 1;
    }
    else if(e === 1){
        document.documentElement.style.setProperty('--color1', 'rgb(250, 236, 218)' );
        document.documentElement.style.setProperty('--color2', 'rgb(95, 59, 6)' );
        document.documentElement.style.setProperty('--select', 'rgba(252, 188, 128, 0.651)' );
        icon.classList.add('fa-moon');
        icon.classList.remove('fa-sun');
        e = 0;
    };

})
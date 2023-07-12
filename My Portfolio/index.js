                    // JavaScript for navation bar 
const section = document.querySelectorAll('section');                        
const navlink = document.querySelectorAll('header nav a');                       
window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset= set.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top>=offset && top<offset+height){
            navlink.forEach(links=>{
                links.classList.remove(active)
                document.querySelector('head nav a[href*='+id+']').classList.add('active')

            })
        }
    })

           // navigation bar fixed
var header = document.querySelector('header')
header.classList.toggle("sticky",window.onscrollY>100)

            //  developing menu option 
menubar.classList.remove('bx-x')
navbar.classList.remove('active')
};

let menubar = document.querySelector('#menu')
let navbar = document.querySelector('.navbar')
menubar.onclick = ()=>{
    menubar.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}


const section = document.querySelector('.features-div')
const sectionObserver = new IntersectionObserver((entries)=>{
 
    entries.forEach(entry=>{
        console.log(entry)
        if(!entry.isIntersecting){
            return;
        }else{
            section.classList.add('active')
            sectionObserver.unobserve(entry.target); 
        }
    })
},section)
sectionObserver.observe(section)
window.onscroll = handleHeaderScroll;

function handleHeaderScroll() {
  console.log(document.body.scrollTop)
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".header").style.height = "100px";
    document.querySelector(".header-logo img").style.height = "50px";
  } else {
    document.querySelector(".header").style.height = "150px";
    document.querySelector(".header-logo img").style.height = "70px";
  }
}

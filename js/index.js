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
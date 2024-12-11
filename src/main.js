const dots = document.querySelectorAll(".scroll-indicator a");

const removeActiveClass = () =>{
    dots.forEach((dot) => {
        dot.classList.remove("active");
    });
}

const addActiveClass = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {     
            const currentDot = document.querySelector(`.scroll-indicator a[href="#${entry.target.id}"]`);
            if (currentDot) {
                removeActiveClass();
                currentDot.classList.add("active");
            }            
        }
    });
};

const options = {
    threshold: 0.4,
};

const observer = new IntersectionObserver(addActiveClass, options);

const sections = document.querySelectorAll("section");
sections.forEach((section) =>{
    observer.observe(section);
});
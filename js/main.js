function  acorddion(){
    let collapserAcordion = document.getElementsByClassName("container__collapsible");

    for (let i = 0; i < collapserAcordion.length; i++) {
        collapserAcordion[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
        content.style.display = "none";
        } else {
        content.style.display = "block";
        }
    });
    }
}

acorddion();

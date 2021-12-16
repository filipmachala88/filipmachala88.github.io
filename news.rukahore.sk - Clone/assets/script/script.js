function openSearch(){
    let menuDropOne = document.querySelector(".dropdown-one");
    let menuDropTwo = document.querySelector(".dropdown-two");

    menuDropOne.addEventListener('mouseover', () => {
        $(".drop-one").slideDown(200);
    })
    menuDropTwo.addEventListener('mouseover', () => {
        $(".drop-two").slideDown(200);
    })
    menuDropOne.addEventListener('mouseout', () => {
        $(".drop-one").slideUp(200);
    })
    menuDropTwo.addEventListener('mouseout', () => {
        $(".drop-two").slideUp(200);
    })
}
openSearch();
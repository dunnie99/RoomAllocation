let btn = document.querySelector('button');
let dropdown = document.getElementById('myDropdown'); 

btn.addEventListener('click', () => {
    clickBtn(dropContent)
    
});


function clickBtn() {
    dropdown.classList.toggle('active');
    
}

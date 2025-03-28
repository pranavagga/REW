const menu = document.querySelector('.menu');
const toggle = document.querySelector('.fa-bars');

toggle.addEventListener('click', function () {
    menu.classList.toggle('show_menu');
});

const sidebar = document.querySelector('.sidebar');
const show_sidebar = document.getElementById('show_sidebar');
const close_sidebar = document.getElementById('close_sidebar');

show_sidebar.addEventListener('click', function () {
    sidebar.classList.add('active');
})

close_sidebar.addEventListener('click', function () {
    sidebar.classList.remove('active');
});


const Plans_list = document.querySelectorAll('.Plans_title ul li');
const Plans_Container = document.querySelectorAll('.Plans_Container');

Plans_Container.forEach((container) => {
    container.style.display = 'none';
})

Plans_Container[0].style.display = 'flex';

Plans_list.forEach((list, index) => {
    list.addEventListener('click', function () {
        Plans_Container.forEach((container) => {
            container.style.display = 'none';
        })
        Plans_Container[index].style.display = 'flex';
    })
})










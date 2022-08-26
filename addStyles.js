// // window.alert('1')

// window.confirm('What is your name?')


// const heading = document.getElementById('hello') //находит слово hello в html документах
// console.log(heading)




// const heading = document.getElementById('hello') //находит структуру  слова hello в html документах
// console.dir(heading)

const heading = document.getElementById('hello')
    // console.dir(heading.textContent) //находит заголовок "Hello word!"

setTimeout(() => {
    addStylesTo(heading)
}, 1500)



function addStylesTo(node) {
    heading.textContent = "Maks best man!" //изменит заголовок "Hello word!" на "Maks best man!"
    heading.style.color = 'red' //изменит цвет заголовка на красный
    heading.style.textAlign = 'center' //поместит заголовок по центру страницы
    heading.style.background = 'black' //изменит фон заголовка на черный
    heading.style.padding = '2rem' //изменит паддинг хедера '2 rem'
}
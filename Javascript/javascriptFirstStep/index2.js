const content = document.getElementById('content')
const date = document.getElementById('date')
const time = document.getElementById('time')
const addedBtn = document.getElementById('addedBtn')
const deletedBtn = document.getElementById('deletedBtn')
const list = document.getElementById('list')

const listContent = []

function render() {
    //渲染頁面的list
    let htmlStr = ''

    //模板語法
    listContent.forEach(function (item) {
        htmlStr = htmlStr + `
        <div class="item">
             <div>
                 <p>內容：${item.content}</p>
                  <p>時間：${item.date} ${item.time}</p>
            </div>
         </div>
`
    })

    // console.log(htmlStr)
    list.innerHTML = htmlStr
}

addedBtn.addEventListener('click', function () {
    // console.log(content.value)
    // console.log(date.value)
    // console.log(time.value)

    listContent.unshift({
        content: content.value,
        date: date.value,
        time: time.value
    })
    render()
})



deletedBtn.addEventListener('click', function () {

    listContent.shift()

    render()

})


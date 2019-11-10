try{
    const style = document.querySelector('style')
    const h1 = document.querySelector('h1')
    h1.innerText = '我还可以变哦'
    style.innerHTML = `h1{color:green;}`
}catch{
    const style = document.createElement('style')
    const h1 = document.querySelector('h1')
    h1.innerText = '我还可以变哦'
    style.innerHTML = `h1{color:green;}`
    document.head.appendChild(style)
}

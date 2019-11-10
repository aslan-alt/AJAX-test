console.log('牛逼了呀')

getCSS.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET','style.css')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if((200<= request.status < 300)){
                const style = document.createElement('style')
                style.innerHTML = request.response
                const h1 = document.getElementsByName('h1')[0]
                text.textContent = `我是CSS请求可以变颜色的哦`
                document.head.appendChild(style)
                console.log('加载成功')
            }else{
                console.log('加载失败')
            }
        }
    }
    request.send()
}
getJS.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET','text.js')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200){
            const script = document.createElement('script')
            script.innerHTML = request.response
            document.body.appendChild(script)
        }
    }
    request.send()
}
getHTML.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET','new.html')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200){
            console.log('可以访问newHTML')
            const div = document.createElement('div')
            div.innerHTML = request.response
            console.log(div)
            document.body.appendChild(div)
        }
        
    }
    request.send()
}
getXML.onclick =()=>{
    const request = new XMLHttpRequest();
    request.open('GET','4.xml')
    request.onreadystatechange =()=>{
        if(request.readyState === 4){
            if( 200 <= request.status <=300){
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                const style = document.createElement('style')
                
                console.log(text.trim())
                const p = document.createElement('p')
                p.textContent = `我是XML的内容${text.trim()}`
                style.innerHTML = `p{color:red;font-size:30px;}`
                document.head.appendChild(style)
                document.body.appendChild(p)
            }
        }
    }
    request.send()
}
getJSON.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET','5.json')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200){
            const h2 = document.createElement('h2')
            h2.innerText =`我的名字叫：${JSON.parse(request.response).name}`
            document.body.appendChild(h2)
        }
    }
    request.send()
}
let n = 1

getData.onclick =()=>{
    
    const request = new XMLHttpRequest();
    request.open('GET',`page${n}.json`)
    request.onreadystatechange = ()=>{
        if(request.readyState === 4&&request.status === 200){
            const array = JSON.parse(request.response)
            array.forEach(item=>{
                const li = document.createElement('li')
                li.textContent = item.id
                document.body.appendChild(li)
                window.scrollTo(0, 99999)
                li.scrollTo(0,99999)
                
            })
        }
        
    }
    request.send()
    n += 1
   
    if(n===4){
        getData.onclick = null
        setTimeout(() => {
            alert(`哥我没数据了哦，你再点也没用了，因为点击事件已经被我删除了`)
        }, 1000);
        
    }
}
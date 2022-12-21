const form = document.querySelector("#form");
const name = document.querySelector(".name");
const money = document.querySelector(".money");
const img = document.querySelector(".img");
const cooker = document.querySelector(".cooker");
const restaurant = document.querySelector(".restaurant");
const btn = document.querySelector(".btn");
const ul = document.querySelector("#ul")

const card =[]
form.addEventListener("submit", (e) =>{
    e.preventDefault()
    let cardSelectors = {
        img: img.value,
        Taomnomi: "TaomNomi: "+name.value,
        Narhi: "Narhi: "+ money.value,
        Oshpaz: "oshpaz: "+ cooker.value,
        Restaran: "restaran nomi: "+ restaurant.value,
        butttonn: "09/28/2022"
    }

    card.push(cardSelectors)
    ul.textContent = null

    card.forEach((element, index) =>{
        let li = document.createElement("div")
        // let imgContent = document.createElement("img")
        let ovkatIsmi = document.createElement("p")
        let elMoney = document.createElement("p")
        // let imgContent = document.createElement("img")
        let cookerName = document.createElement("p")
        let restarant = document.createElement("p")
        let imgContent = document.createElement("img")
        let btn = document.createElement("buttton")

        li.setAttribute("class", "items")
        ovkatIsmi.setAttribute("class", "ovkatIsmi")
        elMoney.setAttribute("class", "moneyy")
        cookerName.setAttribute("class", "cokeer")
        restarant.setAttribute("class", "restaran")
        btn.setAttribute("class", "buttton")
        
        imgContent.setAttribute("src", element.img)
        ovkatIsmi.textContent = element.Taomnomi
        elMoney.textContent = element.Narhi
        cookerName.textContent = element.Oshpaz
        restarant.textContent = element.Restaran
        btn.textContent = element.butttonn

        ul.appendChild(imgContent)
        ul.appendChild(li)
        // ul.appendChild(imgContent)
        li.appendChild(ovkatIsmi)
        li.appendChild(elMoney)
        li.appendChild(cookerName)
        li.appendChild(restarant)
        ul.appendChild(btn)
    })
})

btn.addEventListener("click", ()=>{
    ul.style= "background-color: #ffffff;"
})




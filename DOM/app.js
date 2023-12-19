let button = document.createElement('button')
button.textContent = 'Click Me'

document.body.appendChild(button)

button.addEventListener('click', function(){

    alert("You get a gold star")

})

let submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click', function (){

    let reverb = document.getElementById('reverb').value
    

    alert(reverb)
})

let redSq = document.getElementById('redSq')

redSq.addEventListener('mouseover', function (){

    redSq.style.backgroundColor = 'pink'

})

redSq.addEventListener('mouseout', function(){

    redSq.style.backgroundColor = 'red'
})

let bonesTxt = document.getElementById('dog')

bonesTxt.addEventListener('click', function (){

    bonesTxt.style.color = "#" + Math.floor(Math.random() * 255 ** 3).toString(16)

})

let mdBtn = document.getElementById('mdBtn')

mdBtn.addEventListener('click', function (){

        let theKing = document.createElement('span')

        let kingdom = document.getElementById('kingdom')
        kingdom.textContent = "Sir Michael-Dean"

        kingdom.appendChild(theKing)

})

let theCrew = document.getElementById('hooligans')


theCrew.addEventListener('click', function (){

        let friends = ['Jake', 'Fatts', 'James', 'Manny', 'Jojo', 'Dan', 'Austin', 'Jason Momoa', 'Katie', 'Bones' ]

        for (let i = 0; i < friends.length; ++i) {

            let ul = document.getElementById('stay-classy')

            let li = document.createElement("li")
            li.textContent = friends[i]

            ul.appendChild(li)
            


        }

})
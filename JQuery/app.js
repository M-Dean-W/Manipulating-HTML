const $button = $('<button> Happy Button </button>')
$(document.body).append($button)

$button.on('click', function (){
    alert('You are a cool person')
})

const $submitBtn = $('#submitBtn') 
const $reverb = $('#reverb')

$submitBtn.on('click', function (e){

    e.preventDefault();

    alert($reverb.val())
})

const $redSq = $('#redSq')

$redSq.on('mouseover', function (){

    $($redSq).css('background-color', 'purple')

})

$redSq.on('mouseout', function (){

    $($redSq).css('background-color', 'red')

})

const $bonesTxt = $('#dog')

$bonesTxt.on('click', function(){

        $($bonesTxt).css('color', "#" + Math.floor(Math.random() * 255 ** 3).toString(16))
})

const $mdBtn = $('#mdBtn')

$mdBtn.on('click', function(){

    const $kingdom = $('#kingdom')
    let $theKing = $('<span> Lord Michael-Dean </span>')
    
    $($kingdom).append($theKing)
})

let friends = ['Jake', 'Fatts', 'James', 'Manny', 'Jojo', 'Dan', 'Austin', 'Jason Momoa', 'Katie', 'Bones' ]

const $theCrew = $('#hooligans')

$theCrew.on('click', function(){

    for (let i = 0; i < friends.length; ++i) {

        let $ul = $('#stay-classy')

        const $li = $('<li></li>')
        $li.text(friends[i])

        $($ul).append($li)


    }

})
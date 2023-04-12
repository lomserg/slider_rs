const data = [
	{
		title: "Katrine",
		subtitle: "Cat - British Shorthair",
		description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
		list: {
			age: "6 months",
			inoculations: ["panleukopenia"],
			diseases: ["none"],
			parasites: ["none"],
		},
	},
	{
		title: "Jennifer",
		subtitle: "Dog - Labrador",
		description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
		list: {
			age: "2 months",
			inoculations: ["none"],
			diseases: ["none"],
			parasites: ["none"],
		},
	},
	{
		title: "Woody",
		subtitle: "Dog - Golden Retriever",
		description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
		list: {
			age: "3 years 6 months",
			inoculations: ["adenovirus", "distemper"],
			diseases: ["right back leg mobility reduced"],
			parasites: ["none"],
		},
	},
	{
		title: "Sophia",
		subtitle: "Dog - Shih tzu",
		description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
		list: {
			age: "1 month",
			inoculations: ["parvovirus"],
			diseases: ["none"],
			parasites: ["none"],
		},
	},
	{
		title: "Timmy",
		subtitle: "Cat - British Shorthair",
		description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
		list: {
			age: "2 years 3 months",
			inoculations: ["calicivirus", "viral rhinotracheitis"],
			diseases: ["kidney stones"],
			parasites: ["none"],
		},
	},
	{
		title: "Charly",
		subtitle: "Dog - Jack Russell Terrier",
		description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
		list: {
			age: "8 years",
			inoculations: ["bordetella bronchiseptica", "leptospirosis"],
			diseases: ["deafness", "blindness"],
			parasites: ["lice", "fleas"],
		},
	},
	{
		title: "Scarlett",
		subtitle: "Dog - Jack Russell Terrier",
		description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
		list: {
			age: "3 months",
			inoculations: ["parainfluenza"],
			diseases: ["none"],
			parasites: ["none"],
		},
	},
	{
		title: "Freddie",
		subtitle: "Cat - British Shorthair",
		description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
		list: {
			age: "2 months",
			inoculations: ["rabies"],
			diseases: ["none"],
			parasites: ["none"],
		},
	},
]

const groups = document.querySelectorAll('.group')

// groups.forEach(group => {
//     for(let i = 0; i < 3; i++) {
//         let rand = Math.floor(Math.random() * data.length)
//         const div = document.createElement('div')
//         div.classList.add('item')
//         div.innerHTML = `<h1>${data[rand].title}</h1>`
//         group.appendChild(div)
//     }
// })


 let i = 0;
// const add = [];
let newarr = []
let newarrR = []
let newarrL = []
let items = 3

function generateCurr(){
    for(let i = 0, tempData1 = [...data], len = items; i < len; i++) {
        let rand = Math.floor(Math.random() * tempData1.length)
        newarr.push(tempData1[rand].title)
        tempData1.splice(rand,1)
    }
}
function generateRight() {
    for(let i = 0, tempData2 = [...data], len = tempData2.length; i < len; i++) {
    while(newarrR.length < 3) {
        let rand = Math.floor(Math.random() * tempData2.length)
        if(!newarr.includes(tempData2[rand].title)){
            newarrR.push(tempData2[rand].title)
            tempData2.splice(rand,1)
        }

    }

    }
}
 
function generateLeft() {
    for(let i = 0, tempData = [...data], len = tempData.length; i < len; i++) {
        while(newarrL.length < 3) {
            let rand = Math.floor(Math.random() * tempData.length)
            if(!newarr.includes(tempData[rand].title)){
                newarrL.push(tempData[rand].title)
                tempData.splice(rand,1)
            }
        }
        }
}







// while (i < items) {
//     generateCurr()
//     generateRight()
//     generateLeft()
//     for(let j = 0; j<groups.length; j++){
//         let item = document.createElement('div')
//         item.classList.add('item')
//         item.innerHTML = `<p>${newarr[i]}<p>`
//         groups[j].appendChild(item)
//         console.log(newarr[i])
//     }
//     i++
//      }


window.addEventListener('DOMContentLoaded', () => {
    generateCurr()
    generateRight()
    generateLeft()
	init()
});

function init() {
    while (i < items) {
            let item = document.createElement('div')
            item.classList.add('item')
            item.innerHTML = `<p>${newarr[i]}<p>`
            groups[1].appendChild(item)
            console.log(groups[0])
            //right group
            let itemR = document.createElement('div')
            itemR.classList.add('item')
            itemR.innerHTML = `<p>${newarrR[i]}<p>`
            groups[2].appendChild(itemR)
            //left group
            let itemL = document.createElement('div')
            itemL.classList.add('item')
            itemL.innerHTML = `<p>${newarrL[i]}<p>`
            groups[0].appendChild(itemL)
        i++
         }
}
    
function generateNewItemsL() {
for(let i = 0; i < items;i++) {
	let itemL = document.createElement('div')
	itemL.classList.add('item')
	itemL.innerHTML = `<p>${newarrL[i]}<p>`
	groups[0].appendChild(itemL)
}

}

function generateNewItemsR() {
	for(let i = 0; i < items;i++) {
		let itemR = document.createElement('div')
		itemR.classList.add('item')
		itemR.innerHTML = `<p>${newarrR[i]}<p>`
		groups[2].appendChild(itemR)
	}
	
	}

// console.log(newarr, 'current')
// console.log(newarrR, 'right')
// console.log(newarrL, 'left')


// slider
const slider = document.querySelector('.slider')
const btnL = document.querySelector('.btn-left')
const btnR = document.querySelector('.btn-right')
let groupL = document.querySelector('.group1')
let groupC = document.querySelector('.group2')
let groupR = document.querySelector('.group3')
// console.log(groupL)
// console.log(groupC = groupL)
btnL.addEventListener('click', moveL)
btnR.addEventListener('click', moveR)

function moveL() {
        slider.classList.add('transition-left')
        btnL.removeEventListener('click', moveL)
        btnR.removeEventListener('click', moveR)
}

function moveR() {
    slider.classList.add('transition-right')
    btnL.removeEventListener('click', moveL)
    btnR.removeEventListener('click', moveR)
}

slider.addEventListener('animationend', (annimationEvent) => {
    let changedItem
	console.log(newarrL)
    if(annimationEvent.animationName === 'move-left') {
		console.log('newarrL')
        slider.classList.remove('transition-left')
        // changedItem = groupL;
        groupR.innerHTML = groupC.innerHTML;
        groupC.innerHTML = groupL.innerHTML;
		let newC = groupC.childNodes
		newarr = []
		
		newC.forEach(div => {
			newarr.push(div.firstChild.textContent)
			console.log(newarr)
		})
		newarrL = []
		for(let i = 0, tempData = [...data], len = tempData.length; i < len; i++) {
			while(newarrL.length < 3) {
				let rand = Math.floor(Math.random() * tempData.length)
				if(!newarr.includes(tempData[rand].title)){
					newarrL.push(tempData[rand].title)
					tempData.splice(rand,1)
					console.log(newarrL)
				}
			}
			}
			groups[0].innerHTML = ''
			generateNewItemsL()
		
    } else {
    
        slider.classList.remove('transition-right')
        
        groupL.innerHTML = groupC.innerHTML;
        groupC.innerHTML = groupR.innerHTML;

		let newC = groupC.childNodes
		newarr = []
		newC.forEach(div => {
			newarr.push(div.firstChild.textContent)
			console.log(newarr)
		})

		newarrR = []
		for(let i = 0, tempData = [...data], len = tempData.length; i < len; i++) {
			while(newarrR.length < 3) {
				let rand = Math.floor(Math.random() * tempData.length)
				if(!newarr.includes(tempData[rand].title)){
					newarrR.push(tempData[rand].title)
					tempData.splice(rand,1)
					console.log(newarrR)
				}
			}
			}
			groups[2].innerHTML = ''
			generateNewItemsR()
    }
    // changedItem.innerHTML = ''
	console.log(newarr)
	console.log(newarrL)
	console.log('newarrL')
    // for(let i = 0; i <3; i ++) {
    //     let itemR = document.createElement('div')
    //         itemR.classList.add('item')
    //         itemR.innerHTML = `<p>${newarrR[i]}<p>`
    //     changedItem.appendChild(itemR)
    //     console.log(changedItem)
    // }
    // console.log(changedItem)
    btnL.addEventListener('click', moveL)
    btnR.addEventListener('click', moveR)
})



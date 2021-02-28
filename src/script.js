let details = [{
    season: "Season 2",
    episode: "Episode 1",
    description: "Black History Moment",
    guest: "Educator"
},

{
season: "Season 2",
episode: "Episode 2",
description: "Motivation and Urgency",
guest: "Motivational Speaker"
},

{
season: "Season 2",
episode: "Episode 3",
description: "Self-care & Balance",
guest: "Entrepreneur"
},

{
    season: "Season 2",
    episode: "Episode 4",
    description: "Finance Talk",
    guest: "Financial Consultant"
    }
]

// Responsible for sorting my details and passing it into a function that builds a single detail. 
function buildDetails(){
    details.forEach(detail => buildDetail(detail)) //invoke buildCard() and pass it the arg card
}

//Responsible for building my individual details
function buildDetail(detail){
    let container = document.querySelector("#detail-list")
    console.log(container)
}



// const h2 = document.createElement('h2');

// h2.textContent = "This content was add by js"

// document.querySelector('body').appendChild(h2)



// const div = document.createElement('div');

// document.querySelector('body').appendChild(div)



// const h3 = document.createElement('h3');

// h3.textContent = "Also added by js"

// document.querySelector('div').appendChild(h3)





 
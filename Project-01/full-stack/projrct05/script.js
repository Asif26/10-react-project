// Get Dom Elements


const main = document.getElementById('main');
const addUserBtn = document.getElementById('adduser');
const dobulBtn = document.getElementById('double')
const filterBtn = document.getElementById('show-millionaires')
const sortBtn =  document.getElementById('sort')
const sumBtn = document.getElementById('sum')

// Intilize user data arry

let data = [];


// fetch user random user from  randomuser.net API


async function getRandomUser(){
    //wait for result from Api
    const res =  await fetch('https://randomuser.me/api');
    // Wait for response to convert into Json
    const data = await res.json();
    // console.log(data)
    //Get user name
    const user = data.results[0]

    //Create New User
    const newUser = {
        name:`${user.name.title} ${user.name.first} ${user.name.last}`,
        balance:Math.floor(Math.random()* 1000000)
    }
    console.log(newUser);
    adddata(newUser);
}
// function to Add user data into user data arry
function adddata(newUser){
    //add the user data into the user data ary
    data.push(newUser);
    // Update the Dom to display user in the data arry
    updateDom()
}

// Function to Double Money
function doubleMony(){
    data = data.map(user => {
        return {...user,balance: user.balance * 2}
    });
    updateDom()

} 

function filterUser(){
    data = data.filter(user => user.balance >= 1000000);

    updateDom();
}

//function too formate number

function formateNumberToDollar(number){
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 

}

function sortByBalance(){
   data = data.sort((a,b)=> b.balance - a.balance)
    updateDom();

}
function totalBalance (){
    updateDom();
    const balance = data.reduce((accu,user)=> (accu += user.balance),0);
    const balanceElement = document.createElement('div');
    balanceElement.innerHTML = `<h3>Total Balance : ${formateNumberToDollar(balance)}</h3>`;
    main.appendChild(balanceElement)
    
}


//update the UI with data from the user data arry
function updateDom(userData=data){
    // Clear previous UI
    main.innerHTML = ` <h2><Strong>User</Strong>Wealth</h2>`
    // Loop through userData and render in the UI
    userData.forEach(user => {
        const userDev = document.createElement('div');
        userDev.classList.add('user');
        userDev.innerHTML = `<strong>${user.name}</strong>
                          ${formateNumberToDollar(user.balance)}`
        main.appendChild(userDev)

    });
}

//Event Listners
//1. Listen for click on add User Button

addUserBtn.addEventListener('click',getRandomUser)
dobulBtn.addEventListener('click',doubleMony);
filterBtn.addEventListener('click',filterUser);
sortBtn.addEventListener('click', sortByBalance);
sumBtn.addEventListener('click',totalBalance);
getRandomUser()
getRandomUser()
getRandomUser()
getRandomUser()

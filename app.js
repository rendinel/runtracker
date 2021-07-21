//empty array we are going to fill with the data typed
let entries = [];

//we select the ul
const entriesWrapper = document.querySelector('#entries');

//second step
function addNewEntry(newEntry){
    // we remove the first child from the ul so we are going to have always 7 element
    entriesWrapper.removeChild(entriesWrapper.firstElementChild);
    // we create the element li
    const listItem = document.createElement('li');
    // we store the text from the data inside this let 
    const listValue =  document.createTextNode(newEntry.toFixed(1));
    // we pass the text from the data to the li we created
    listItem.appendChild(listValue);
    //we put the li insdide the ul
    entriesWrapper.appendChild(listItem);
}
//third step we write a reducer function  takes total and currentValue and return the sum of the two
function reducer(total,currentValue){
    return total + currentValue;
}
//fourth step we take the empty array and we add the reducer with reduce,then we set that this sum is equal to the inner html of the value we want to update in the html
function calcTotal(entries){
    const totalValue = entries.reduce(reducer).toFixed(1);
    document.getElementById('total').innerText = totalValue;
    document.getElementById('progressTotal').innerText = totalValue;
}

//fifth step calculate the average
function calcAverage(){
    const average = (entries.reduce(reducer) / entries.length).toFixed(1);
    document.getElementById('average').innerText = average; 
}

//first step
function handleSubmit(event){
    //preventDefault prevent the default of the submission that is to reload the browser
    // we take the value the user type and convert into a number
    event.preventDefault()
    const entry = Number(document.querySelector('#entry').value);
    // if entry is empty or false return break the function since no value has been entered
    if(!entry) return;
    // we grab the form and clear all the input with the reset method
    document.querySelector('form').reset();
    // we push the value typed inside the empty array
    entries.push(entry);
    //we send the data to addNewEntry function
    addNewEntry(entry);
    calcTotal(entries);
    calcAverage(entries);
}

// we select the form and launch the handleSubmit function everytime the form submit something
const form  = document.querySelector('form').addEventListener('submit', handleSubmit);
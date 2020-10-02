import axios from 'axios'
// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const topicsContainer = document.querySelector('.title')
// console.log(topicsContainer)
function newTopic (topic){
    const topicDiv = document.createElement('div')
    topicDiv.classList.add('tab')
    topicDiv.textContent = topic
    return topicDiv
}
console.log(newTopic('My tipic'))


axios.get('https://lambda-times-api.herokuapp.com/topics')
.then(response=>{
    response.data.topics.forEach(topic=>{
        const lambdaTopic = newTopic(topic)
        topicsContainer.appendChild(lambdaTopic)
    })
})
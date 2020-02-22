// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
//axios.get('https://lambda-times-backend.herokuapp.com/topics')
//    .then((response) => {
//        response.data.newTopics.forEach((topic) => {
//            const newTab = document.createElement('div');
//            newTab.classList.add('tab');
//            newTab.textContent = `${topic}`;
//            newTopics.appendChild(newTab);
//        });
//        console.log(response.data.newTopics);
//    })
//    .catch((err) => {
//        console.log('big error', err);
//    });
//
//    const newTopics = document.querySelector('.topics');

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then(res => {
        res.data.topics.forEach(topic => {
            const tab = document.createElement('div');
            tab.classList.add('tab');
            tab.textContent = `${topic}`;
            topics.appendChild(tab);
        });
        console.log(res.data.topics);

    })
    .catch (error => {
        console.log("this is an error", error)
      })
 const topics = document.querySelector('.topics');

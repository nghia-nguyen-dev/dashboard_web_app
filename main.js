
// ------------------------------------ CHARTS ------------------------------------
Chart.defaults.global.defaultFontColor = 'rgb(157, 157, 157)';

const trafficCanvas = document.querySelector('#traffic-chart');
const trafficData = {
    weekly: {
        labels: [
            "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
            backgroundColor: 'rgb(165, 155, 226, .35)',
            borderWidth: 3,
            borderColor: 'rgb(116, 119, 185, .2)',
            pointBackgroundColor: 'rgb(116, 119, 185, .35)',
            pointHoverRadius: 7,
            pointHoverBackgroundColor: 'rgb(116, 119, 185)',
        }]
    },
    daily: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            data: [75, 115, 175, 125, 225, 200, 100],
            backgroundColor: 'rgb(165, 155, 226, .35)',
            borderWidth: 3,
            borderColor: 'rgb(116, 119, 185, .2)',
            pointBackgroundColor: 'rgb(116, 119, 185, .35)',
            pointHoverRadius: 7,
            pointHoverBackgroundColor: 'rgb(116, 119, 185)',
        }]
    },
    hourly: {
        labels: ["1", "2", "3", "4", "5", "6"],
        datasets: [{
            data: [30, 160, 175, 10, 225, 200],
            backgroundColor: 'rgb(165, 155, 226, .35)',
            borderWidth: 3,
            borderColor: 'rgb(116, 119, 185, .2)',
            pointBackgroundColor: 'rgb(116, 119, 185, .35)',
            pointHoverRadius: 7,
            pointHoverBackgroundColor: 'rgb(116, 119, 185)',
        }]
    },
    monthly: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
        datasets: [{
            data: [5, 115, 175, 125, 225, 80, 100, 20, 234, 200, 191, 300],
            backgroundColor: 'rgb(165, 155, 226, .35)',
            borderWidth: 3,
            borderColor: 'rgb(116, 119, 185, .2)',
            pointBackgroundColor: 'rgb(116, 119, 185, .35)',
            pointHoverRadius: 7,
            pointHoverBackgroundColor: 'rgb(116, 119, 185)',
        }]
    },
};

const trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        yAxes: [{
            gridLines: {
                color: '#e4e4e4',
            },
            ticks: {
                beginAtZero:true
            }
        }],
        xAxes: [{
            gridLines: {
                color: '#e4e4e4',
            },
        }]
    },
    legend : {
        display: false
    }
};

const trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData.weekly,
    options: trafficOptions,
});


const dailyCanvas = document.querySelector('#daily-chart');
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: 'rgb(165, 155, 226, .35)',
        borderWidth: 0,
        barPercentage: .65,
        hoverBackgroundColor: 'rgb(116, 119, 185)',
    
    }]
};

const dailyOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    },
    legend : {
        display: false
    }
};

const dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions,
});

const mobileCanvas = document.querySelector('#mobile-chart');
const mobileData = {
    labels: ["Desktop", "Tablet", "Phone"],
    datasets: [{
        data: [2000, 550, 500],
        backgroundColor: [
            'rgb(116, 119, 185)',
            '#80C98F',
            'rgb(81, 189, 168)'
        ],
        borderWidth: 0,
        borderColor: 'rgb(116, 119, 185, .2)',
        pointBackgroundColor: 'rgb(116, 119, 185, .35)',
        pointHoverRadius: 7,
        pointHoverBackgroundColor: 'rgb(116, 119, 185)',
    }]
};

const mobileOptions = {
    rotation: 50.5,
    aspectRatio: 2.5,
    animation: {
        // duration: 0,
        // animateScale: true
    },
    legend: {
        display: true,
        position: 'right',
        labels: {
            boxWidth: 30,
          
        },
    }
};

const mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions,
});


// ------------------------------------ INTERACTIONS ------------------------------------

const alertBar = document.querySelector('.alert-bar');

// --------------------- TRAFFIC TIME SECTION --------------------- //
const trafficTime = document.querySelector('.traffic-time');
const paragraphList = trafficTime.querySelectorAll('p');

// --------------------- NOTIFICATION SECTION --------------------- //
const notify = document.querySelector('.notify');
const dropDown = document.querySelector('.drop-down');
const body = document.querySelector('body');

// --------------------- MESSAGE SECTION --------------------- //
const sendButton = document.querySelector('.message button');
const msgInput = document.querySelector('.message input');
const msgTextArea = document.querySelector('.message textarea');

// --------------------- SETTINGS SECTION --------------------- //
const settings = document.querySelector('.settings');

const timeZone = settings.querySelector('#timezone')
const saveBtn = settings.querySelector('.save-btn')
const cancelBtn = settings.querySelector('.cancel-btn')
const emailInput = settings.querySelector('#email-option');
const profileInput = settings.querySelector('#profile-option');

// -------------------- AUTO COMPLETE -------------------- //
const searchInput = document.querySelector('#search');
const membersName = document.querySelector('.members-name');


const ppl = [
    {name: 'Dan Something'},
    {name: 'Jennifer Lee'},
    {name: 'Jenna Chambers'},
    {name: 'Mike Who'},
    {name: 'Jenny Who'}
 ];

const checkLocalStorage = () => {
    if (localStorage['send email'] === 'true') { // turn on email slider
        emailInput.checked = true;
    }
    if (localStorage['profile to public'] === 'true') { // turn on profile slider
        profileInput.checked = true;
    } 
    if (localStorage.timezone !== undefined) { // if timezone property exists in localStorage, then set that as the value. Without this check the input field will not show "Select Timezone"
        timeZone.value = localStorage.timezone;
    } 
};



checkLocalStorage();

settings.addEventListener('click', (event) => {

    if (event.target.tagName === 'BUTTON') {
        
        const settingsPref = {
            email: function() {
               return emailInput.checked;
            },
            profile() {
                return profileInput.checked;
            },
            timezone: timeZone.value,
            save() {
                if (settingsPref.timezone !== '') {
                    localStorage.setItem('timezone', this.timezone);
                    localStorage.setItem('send email', this.email());
                    localStorage.setItem('profile to public', this.profile());
                    alert('Settings saved!');
                } else {
                    alert('please select a timezone');
                }
            },
            cancel: function() {
                localStorage.clear();
                alert('Settings cleared!');
            },
        };
        const action = event.target.textContent.toLowerCase();
        settingsPref[action]();
    }
})


paragraphList[2].classList.add('selected');

trafficTime.addEventListener('click', (event) => {
    if (event.target.tagName === 'P') {
        removeSelected(paragraphList);
        event.target.classList.add('selected');
        const timeLength = event.target.textContent.toLowerCase();
        new Chart(trafficCanvas, {
            type: 'line',
            data: trafficData[timeLength],
            options: trafficOptions,
        });
    }
});

const removeSelected = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i].classList.remove('selected');
    }
}

alertBar.addEventListener('click', (event) => {
    if (event.target.alt === 'x symbol') {
  
        alertBar.innerHTML = '';
        alertBar.style.padding = '0';
        alertBar.style.animation = 'slide-right .5s ease-out, slide-up-2 .45s ease-in';
        

        alertBar.style.width = '0';
        alertBar.style.height = '0';
    }
})

notify.addEventListener('click', () => {
    dropDown.style.animation = 'slide-down .7s ease-out, shake .6s ease .4s'
    dropDown.style.height = 'auto'
})


body.addEventListener('click', (event) => {
    const target = event.target.offsetParent; // ref the drop-down div
    if(event.target.tagName !== 'svg') { // safeguard from closing notifications right after it slides down
        if (dropDown.style.height === 'auto' && target !== dropDown) { // will not close if target is the drop-down div
            dropDown.style.animation = 'slide-up .7s ease-in';
            dropDown.style.height = '0';
        }
    }
})

sendButton.addEventListener('click', (event) => {
    event.preventDefault();
    const searchFound = () => {
        for (let i = 0; i < ppl.length; i++) {
            if (searchInput.value.toLowerCase() === ppl[i].name.toLowerCase()) {
                return true;
            }
        }
        return false;
    }
    if (msgInput.value === "" && msgTextArea.value === "") {
    alert("Please fill out user and message fields before sending");
    } else if (msgInput.value === "" ) {
    alert("Please fill out user field before sending");
    } else if (msgTextArea.value === "" ) {
    alert("Please fill out message field before sending");
    } else if (!searchFound()) {
        alert(`No user found`);
    } else {
        alert(`Message successfully sent to: ${msgInput.value}`);
    }
});

let counter = 0;

msgInput.addEventListener('keyup', () => {
    membersName.innerHTML = '';
    const input = msgInput.value.toLowerCase().trim(); // trim whitespace from input
    if (input) {
        const result = ppl.filter(person => {
            return person.name.toLowerCase().trim().startsWith(input); // trim whitespace from name
       })
       for (let i = 0; i < result.length; i++) {
           const div = document.createElement('div');
           div.textContent = result[i].name;
           membersName.appendChild(div);
       }
    }

    // if input value is empty reset the font weight back to normal
    if (searchInput.value === '') {
        searchInput.style.fontWeight = '400';
    }

    // Add up and down highlight to user search functionality
    const membersList = membersName.querySelectorAll('div');
    
    if (membersList.length > 0) { // checks if member list exist and highlight the first member always
        membersList[counter].classList.add('selected'); 
    }
    
    if (event.key === 'ArrowDown' && counter < membersList.length - 1) {
        membersList[counter].classList.remove('selected');
        counter += 1;
        membersList[counter].classList.add('selected');
    }

    if (event.key === 'ArrowUp' && counter > 0) {
        membersList[counter].classList.remove('selected');
        counter -= 1;
        membersList[counter].classList.add('selected');
    }

})

membersName.addEventListener('click', (event) => {
    counter = 0;
    searchInput.value = event.target.textContent;
    searchInput.style.fontWeight = '700';
    membersName.innerHTML = '';
})






// поиск услуг 

let searchValue = '';

document.querySelector('#search').oninput = customActions;

function customActions() {
    searchValue = this.value.trim().toLowerCase();;
    let cards = document.querySelectorAll('#card');
    
    if (searchValue != '') {
        cards.forEach(elementSearch);
    }
    else {
        cards.forEach(returnElement);
    }
}

function elementSearch (elem) {

    let searchText = elem.querySelector('#searchText');

    if(searchText.innerText.toLowerCase().search(searchValue) == -1) {
        elem.classList.add('hide');
    }
    else {
        elem.classList.remove('hide');
    }
}

function returnElement(elem) {
    elem.classList.remove('hide');
}

// чат- бот 


let textChat = document.querySelector('.chat-bot');
let icon = document.querySelector('.chat-icon');
let fixIcon = document.querySelector('.fix-icon');

document.querySelector('.chat-icon').onclick = openChat;

function openChat () {
    icon.classList.add('hide');
    textChat.classList.remove('hide');
    fixIcon.classList.remove('visible');
}

document.querySelector('.close').onclick = closeChat;

function closeChat () {
    console.log(12345)
    textChat.classList.add('hide');
    icon.classList.remove('hide');
    if (window.scrollY > 300) { 
        fixIcon.classList.add('visible');
    }
}

const socket = new WebSocket('ws://localhost:8080');

socket.onmessage = function (event) {
    const messages = document.getElementById('messages');
    const message = document.createElement('div');
    message.textContent = `Бот: ${event.data.toString()}`;
    messages.appendChild(message);
};

function sendMessage() {
    const input = document.getElementById('input');
    const message = input.value.trim();
    const messages = document.getElementById('messages');
    const userMessage = document.createElement('div');
    userMessage.textContent = `Вы: ${message}`;
    messages.appendChild(userMessage);
    socket.send(message);
    input.value = '';
}

document.getElementById('input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') { 
        sendMessage();
    }
});



// модальное окно 

const modal = document.getElementById("myModal");
const modalTriggers = document.querySelectorAll(".modal-trigger");
const closeBtn = document.querySelector(".modal-close");

modalTriggers.forEach(trigger => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault(); 
    modal.style.display = "block"; 
    document.body.classList.add("non-scroll"); 
  });
});

closeBtn.addEventListener("click", () => {
  closeModal();
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) { 
    closeModal();
  }
});

function closeModal() {
  modal.style.display = "none"; 
  document.body.classList.remove("non-scroll");
}


// фиксированные иконки сбоку 



window.addEventListener('scroll', function () {
    const fixIcon = document.querySelector('.fix-icon'); 
    const triggerHeight = 300; 

    if (window.scrollY > triggerHeight && textChat.classList.contains('hide')) {
        fixIcon.classList.add('visible');
    } else {
        fixIcon.classList.remove('visible');
    }
});
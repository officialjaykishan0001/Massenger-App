// const socket = io();

// const messages = document.getElementById("messages");
// const form = document.getElementById("form");
// const input = document.getElementById("input");

// form.addEventListener("submit", (e )=>{
//     e.preventDefault();
//     if(input.value ){
//         socket.emit("chat message", input.value)
//         input.value = "";
//     }

// })

// socket.on("chat message", (msg)=>{
//     const item = document.createElement("li");
//     item.textContent = msg;
//     messages.appendChild(item);
//     window.scrollTo(0, document.body.scrollHeight)
// })

const socket = io();

const receivedMessages = document.querySelector(".received")
const sentMessages = document.querySelector(".sent")
const input = document.querySelector(".input-message");
const button = document.querySelector(".button");
let chatMessagesCont = document.querySelector(".chat-messages");


button.addEventListener("click", (e) => {
  if (input.value) {
    socket.emit("chat message", input.value);
    chatMessagesCont.innerHTML += `
            <div class="message sent mb-4 flex items-end justify-end">
              <div class="message-content bg-blue-500 text-white p-3 rounded-lg">
                  <p class="text-sm">${input.value}</p>
                     <span class="text-xs text-gray-200">10:32 AM</span>
               </div>
               <img src="/images/round-gradient-designify (1).png" alt="Avatar" class="rounded-full w-10 h-10 ml-3">
            </div>
    `
    chatMessagesCont.scrollTop = chatMessagesCont.scrollHeight;

    input.value = "";
  }



})


socket.on("chat message", (msg) => {
  chatMessagesCont.innerHTML += `
  <div class="message received mb-4 flex items-start">
  <img src="/images/round-gradient-designify (1).png" alt="Avatar" class="rounded-full w-10 h-10">
  <div class="message-content ml-3 bg-gray-200 p-3 rounded-lg">
    <p class="text-sm">${msg}</p>
    <span class="text-xs text-gray-500">10:30 AM</span>
  </div>
</div>
    `
  chatMessagesCont.scrollTop = chatMessagesCont.scrollHeight;
})
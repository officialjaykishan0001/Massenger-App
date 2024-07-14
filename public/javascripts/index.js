function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const meridian = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;  // Convert to 12-hour format and handle midnight (0 hours)

  return `${hours}:${formattedMinutes} ${meridian}`;
}
var sessionData = { } ;
document.addEventListener("DOMContentLoaded",async  function(){
  let res  = await fetch("https://massenger-app.onrender.com/session");
  sessionData = await res.json();
  console.log(sessionData.user)
})



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
                     <span class="text-xs text-gray-200">${getCurrentTime()}</span>
               </div>
               <img src="data:${sessionData.user.avatarContentType};base64,${sessionData.user.avatar}" alt="Avatar" class="rounded-full w-10 h-10 ml-3">
            </div>
    `
    chatMessagesCont.scrollTop = chatMessagesCont.scrollHeight;

    input.value = "";
  }
})


socket.on("chat message details", (data) => {
  const { msg, connected } = data;
  
  chatMessagesCont.innerHTML += `
  <div class="message received mb-4 flex items-start">
  <img src="/images/round-gradient-designify (1).png" alt="Avatar" class="rounded-full w-10 h-10">
  <div class="message-content ml-3 bg-gray-200 p-3 rounded-lg">
    <p class="text-sm">${msg}</p>
    <span class="text-xs text-gray-500">${getCurrentTime()}</span>
  </div>
</div>
    `
  chatMessagesCont.scrollTop = chatMessagesCont.scrollHeight;
})
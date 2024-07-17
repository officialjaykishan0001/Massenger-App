document.addEventListener("DOMContentLoaded", async function () {
  const userList = document.querySelector(".userlist");

  let r = await fetch("http://localhost:3000/api/users");
  let data = await r.json();

  data.forEach(user => {
    const avatarBase64= arrayBufferToBase64(user.avatar.data);
    userList.innerHTML += `
        <div class="user mb-3 flex items-center p-2 bg-white rounded-lg shadow hover:bg-gray-200 cursor-pointer">
        <img src="data:${user.avatarContentType};base64,${avatarBase64}" alt="User Avatar" class="rounded-full w-10 h-10">
        <div class="ml-3">
          <h3 class="font-bold text-sm">${user.name}</h3>
          <p class="text-xs text-gray-500">Offline</p>
        </div>
      </div>
        `
  });

  let res = await fetch("http://localhost:3000/api/session");
  let sessionData = await res.json();
  const users = Array.from(document.querySelectorAll(".user"));

  socket.emit("User Status", sessionData);
  socket.on("User Status", (sessionData)=>{
    StatusUpdate(sessionData, users);
  })
})


function arrayBufferToBase64(buffer) {
  let binary = '';
  let bytes = new Uint8Array(buffer);
  let len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function StatusUpdate(sessionData, users){
  users.forEach((user)=>{
    // console.log( sessionData.user.username)
    if(user.lastElementChild.firstElementChild.innerHTML == sessionData.user.username){
      user.lastElementChild.lastElementChild.innerHTML = "Online"
      user.lastElementChild.lastElementChild.classList.remove("text-gray-500");
      user.lastElementChild.lastElementChild.classList.add("text-green-500");
    }
  })
}
document.addEventListener("DOMContentLoaded", async function () {
  let r = await fetch("https://massenger-app.onrender.com/api/users");
  let data = await r.json();

  const userList = document.querySelector(".userlist");

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
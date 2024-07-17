socket.on('current_users', (onlineUsers,) => {
    updateUserList(onlineUsers);
})

socket.on('User_Status', (data) => {
    showToast(data)
})

function showToast(data) {
    const toastCont = document.querySelector("#toast-container");
    const toast = document.createElement('div');
    toast.className = (data.status == 'Online') ? 'toast bg-green-500 text-white p-3 rounded-lg shadow-md' : 'toast bg-red-500 text-white p-3 rounded-lg shadow-md'

    toast.innerHTML = `${data.username} is ${data.status}`;

    toastCont.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000)
}

function updateUserList(onlineUsers) {
    const userList = document.querySelector(".userlist");
    userList.innerHTML = '  <h2 class="text-xl font-bold mb-4">Users</h2>';
    for (const socketId in onlineUsers) {
        if (onlineUsers.hasOwnProperty(socketId)) {
            userList.innerHTML += `
          <div class="user mb-3 flex items-center p-2 bg-white rounded-lg shadow hover:bg-gray-200 cursor-pointer">
          <img src="data:${onlineUsers[socketId].avatarContentType};base64,${onlineUsers[socketId].avatar}" alt="User Avatar" class="rounded-full w-10 h-10">
          <div class="ml-3">
            <h3 class="font-bold text-sm">${onlineUsers[socketId].username}</h3>
            <p class="text-xs text-green-500">${onlineUsers[socketId].status}</p>
          </div>
        </div>
          `
        }
    }
}


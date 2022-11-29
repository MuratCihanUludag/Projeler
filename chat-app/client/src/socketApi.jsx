import io from "socket.io-client";
let socket;
export const init = () => {
  console.log("Bağlanıyor...");
  socket = io("http://localhost:3000", {
    transports: ["websocket"],
  });
  socket.on("connect", () => console.log("Bağlandıı"));
};

export const sendMessage = (message) => {
  if (socket) socket.emit("new-message", message);
};

export const subcribeChat = (cb)=> {
    if(!socket) return;
    socket.on('receive-message', (message) => {
        console.log("Yeni mesaj var", message);
        cb(message)
    })
};
export const subcribeInitialMessages = (cb) => {
    if(!socket) return;
    socket.on('message-list', (message) => {
        console.log("Initial", message);
        cb(message)
    })

}

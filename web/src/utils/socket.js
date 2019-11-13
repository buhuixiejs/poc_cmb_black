/* eslint-disable */
import ReconnectingWebSocket from "reconnecting-websocket";
let websock = null;
// 用于记录开启的次数
let openTimes = 0;
let callbackObj = {};
function initWebSocket() {
  //初始化weosocket
  //ws地址
  let url = WEBSOCKET_URL + "/" + Math.random();
  websock = new ReconnectingWebSocket(url);
  websock.onmessage = function(e) {
    websocketonmessage(e);
  };
  websock.onclose = function(e) {
    console.log("连接断", websock);
    websocketclose(e);
  };
  websock.onopen = function() {
    websocketOpen();
  };

  //连接发生错误的回调方法
  websock.onerror = function() {
    console.log("WebSocket错误");
  };
}
function closeWebSocket() {
  websock && websock.close();
}
// 实际调用的方法
function sendSock(agentData, callback) {
  let obj = {
    data: agentData,
    func: callback
  };
  callbackObj = obj;
  // callbackObj[agentData.id] = callback;
  if (websock.readyState === websock.OPEN) {
    //若是ws开启状态
    websocketsend(agentData);
  } else if (websock.readyState === websock.CONNECTING) {
    // 若是 正在开启状态，则等待1s后重新调用
    setTimeout(function() {
      sendSock(agentData, callback);
    }, 1000);
  } else {
    // 若未开启 ，则等待1s后重新调用
    setTimeout(function() {
      sendSock(agentData, callback);
    }, 1000);
  }
}

//数据接收
function websocketonmessage(e) {
  let json = JSON.parse(e.data);
  callbackObj.func(json);
}

//数据发送
function websocketsend(agentData) {
  websock.send(JSON.stringify(agentData));
}

//关闭
function websocketclose() {
  console.log("关闭");
}

function websocketOpen() {
  openTimes++;
  if (openTimes > 1) {
    // 如果ws断开后再重连，订阅信息不能自动重连，故手动
    for (let i in callbackObj) {
      if (callbackObj[i].data && callbackObj[i].data.command === "subscribe") {
        sendSock(callbackObj[i].data, callbackObj[i].func);
      }
    }
  }
  // console.log("连接成功");
}
// timer = setInterval(() => {
//   // 如果没有有websocket,初始化
//   if (websock === null) {
//     initWebSocket();
//   } else {
//     clearInterval(timer);
//   }
// }, 1000);
initWebSocket();

export {  initWebSocket,sendSock, closeWebSocket };

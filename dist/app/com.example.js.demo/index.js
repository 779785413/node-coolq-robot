"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cq_robot_1 = require("cq-robot");
class App extends cq_robot_1.CQApp {
    constructor() {
        super('com.example.js.demo', __dirname);
        this.CQ.setDebug(false);
        this.isEnable = true;
    }
    debug() {
        //本函数里面的内容仅会在debug模式下执行
        this.privateMsg('test', 1, 10001, '这是一条私聊消息', 1);
        this.groupMsg('test', 1, 10001, 10001, '', '这是一条群消息', 1);
        this.discussMsg('test', 1, 10001, 10001, '这是一条讨论组消息', 1);
    }
    startup() {
        return 0;
    }
    exit() {
        return 0;
    }
    enable() {
        this.isEnable = true;
        return 0;
    }
    disable() {
        this.isEnable = false;
        return 0;
    }
    privateMsg(subType, msgId, fromQQ, msg, font) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = `这是${this.APP_ID}，你发送了：${msg}`;
            this.CQ.sendPrivateMsg(fromQQ, res);
            // 如果要回复消息，请调用 api 发送，则 return CQMsg.MSG_INTERCEPT - 拦截本条消息，不再由其他应用继续处理 //注意：应用优先级设置为"最高"(10000)时，无法使用本返回值
            // 如果不回复消息，交由之后的应用处理，则 return CQMsg.MSG_IGNORE - 忽略本条消息
            return cq_robot_1.CQMsg.MSG_IGNORE;
        });
    }
    groupMsg(subType, msgId, fromGroup, fromQQ, fromAnonymous, msg, font) {
        return __awaiter(this, void 0, void 0, function* () {
            //this.CQ.sendGroupMsg(fromGroup, `这是${this.APP_ID}，你发送了：${msg}`)
            return cq_robot_1.CQMsg.MSG_IGNORE;
        });
    }
    discussMsg(subType, msgId, fromDiscuss, fromQQ, msg, font) {
        return __awaiter(this, void 0, void 0, function* () {
            //this.CQ.send_discuss_msg(fromDiscuss, `这是${this.APP_ID}，你发送了：${msg}`)
            return cq_robot_1.CQMsg.MSG_IGNORE;
        });
    }
    groupUpload(subType, sendTime, fromGroup, fromQQ, file) {
        return __awaiter(this, void 0, void 0, function* () {
            return cq_robot_1.CQMsg.MSG_IGNORE;
        });
    }
    groupAdmin(subType, sendTime, fromGroup, beingOperateQQ) {
        return __awaiter(this, void 0, void 0, function* () {
            return cq_robot_1.CQMsg.MSG_IGNORE;
        });
    }
    groupDecrease(subType, sendTime, fromGroup, fromQQ, beingOperateQQ) {
        return __awaiter(this, void 0, void 0, function* () {
            return cq_robot_1.CQMsg.MSG_IGNORE;
        });
    }
    groupIncrease(subType, sendTime, fromGroup, fromQQ, beingOperateQQ) {
        return __awaiter(this, void 0, void 0, function* () {
            return cq_robot_1.CQMsg.MSG_IGNORE;
        });
    }
    friendAdd(subType, sendTime, fromQQ) {
        return __awaiter(this, void 0, void 0, function* () {
            return cq_robot_1.CQMsg.MSG_IGNORE;
        });
    }
    requestAddFriend(subType, sendTime, fromQQ, msg, responseFlag) {
        return __awaiter(this, void 0, void 0, function* () {
            return cq_robot_1.CQMsg.MSG_IGNORE;
        });
    }
    requestAddGroup(subType, sendTime, fromGroup, fromQQ, msg, responseFlag) {
        return __awaiter(this, void 0, void 0, function* () {
            return cq_robot_1.CQMsg.MSG_IGNORE;
        });
    }
}
const app = new App(); //类名可以随意
exports.app = app;
/**
 *仅在debug模式下执行，若不需要也可注释掉
 *请注意，因为debug的内容在此处就会执行，因此是最先执行的内容！
 */
if (app.CQ.getDebug()) {
    app.debug();
}

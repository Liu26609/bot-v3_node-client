import fetch from "node-fetch";
import FormData from 'form-data';////需要自己安装
import fs from 'fs';
import { BOT_MSG_AT } from '../shared/bot/bot';
import bot from "./bot";

export async function sendImage(msgId:string,channel_id:string, picName: string,) {

    picName = picName?.startsWith("/") ? picName : `./${picName}`;
    console.debug(`upload11ing ${picName}`);
    var picData = fs.createReadStream(picName);

    var formdata = new FormData();
    formdata.append("msg_id", msgId);
    //formdata.append("content", "123456");
    formdata.append("file_image", picData);
    await fetch(`https://api.sgroup.qq.com/channels/${channel_id}/messages`, {
        method: "POST",
        headers: {
            "Content-Type": formdata.getHeaders()["content-type"],
            "Authorization": `Bot ${bot.getBotConfig().appID}.${bot.getBotConfig().token}`
        },
        body: formdata

    }).then(async res => {
        const body = await res.json();
        if (body) {
            console.log('img send succress')
        }

    }).catch(error => {
        console.error('img send error');
    })

}
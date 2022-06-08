class base64_safe {
    constructor(){

    }
    encode(unencode){
        return Buffer.from(unencode || '').toString('base64');
    }
    decode(encoded){
        return Buffer.from(encoded || '','base64').toString('utf8');
    }
    urlEncode(unencoded){
        const encoded = this.encode(unencoded.toString());
        return encoded.replace('+','-').replace('/','_').replace(/=+$/g,'');

    }
}
export default new base64_safe;
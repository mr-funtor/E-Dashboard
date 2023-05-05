export function tokenFinder() {
    let namer= "byond"
    let setCookie = document.cookie.split(';');
    for(let i = 0; i < setCookie.length; i++) {
      let singleCookie = setCookie[i];
      let value = singleCookie.split("=");
      if(value[0] === namer){
        return value[1]
      }
    }
    return "";
}
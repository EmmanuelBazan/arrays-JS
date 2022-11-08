const elements = ["Fire","Air","Water"];

let strFinal = "";
const separator = "--";
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    strFinal += element + separator
}

const srt_join = elements.join("--");
const title = "Curso de manupulacion de arreglos con JavasCript";
const url_title = title.split(' ').join("-").toLowerCase();

console.log("FOR --- ",strFinal);
console.log("JOIN -- ",srt_join);
console.log("TITLE FOR URL -- ",url_title);
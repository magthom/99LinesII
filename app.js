document.addEventListener("DOMContentLoaded", function () {
    let btn = document.createElement("button");
    let btnText = document.createTextNode('Sing!');
    btn.appendChild(btnText);
    document.body.appendChild(btn);

let friends = 
    [ { name: 'salem'} ,
    { name: 'junie' } ,
    { name: 'ghost' } ,
    { name: 'pants' } ,
    { name: 'marvin'} ]
 

    btn.addEventListener('click', function() {
    for (let i = 99;  i > 0;  i--) {
        if (i !== 1) { 
            let linesDiv = document.createElement("div");
            let allLinesText = document.createTextNode(friends.name + ": "+ [i] + " Lines of code in the file, " + [i] + " lines of code, " + friends.name + " strikes ones out, clears it all out, " + [i - 1] + " lines of code in the file");
            singLines = linesDiv.appendChild(allLinesText);
            document.body.appendChild(singLines);
        } else {
            let lastDiv = document.createElement("div");
            let lastLineText = document.createTextNode(friends.name + ": " + "1 line of code in the file, 1 line of code," + friends.name + " strikes it out clears it all out, no more code in the file");
            let lastSing = lastDiv.appendChild(lastLineText);
            document.body.appendChild(lastSing);
        }
    } 
 })
})
document.addEventListener("DOMContentLoaded", function () {
    let btn = document.createElement('button');
    let btnText = document.createTextNode('Sing!');
    btn.appendChild(btnText);
    document.body.appendChild(btn);

    function linesOfCode() {
        for (let i = 99; i > 0; i--) {
            if (i !== 1) {
                document.createElement("p").innerHTML = paragraphText;
                document.body.appendChild(paragraphText);
                console.log("onclick is working");
            } else {
                document.createElement("p").innerHTML = (pText);
                console.log("last onclick is working");
            }
        }
    }; 
    btn.addEventListener('click', function () {
        linesOfCode(friends);
    });

    let div = document.createElement('div');
    div.className = 'friend';

 

    let friends = [{
            name: 'salem',
        },
        {
            name: 'junie',
        },
        {
            name: 'ghost',
        },
        {
            name: 'pants',
        },
        {
            name: 'marvin'
        }
    ];


    let i = 99;
    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode(friends.name);

    h3.appendChild(h3Text);
    div.appendChild(h3);
    document.body.appendChild(div);

    let paragraph = document.createElement('p');
    let paragraphText = document.createTextNode([i] + " Lines of code in the file, " + [i] + " lines of code, " + h3Text + " strikes ones out, clears it all out, " + [i - 1] + " lines of code in the file");
    let p2 = document.createElement('p');
    let pText = document.createTextNode("1 line of code in the file, 1 line of code," + h3Text + " strikes it out clears it all out, no more code in the file");

    paragraph.appendChild(paragraphText);
    div.appendChild(paragraph);
    document.body.appendChild(div);

    p2.appendChild(pText);
    div.appendChild(p2);
    document.body.appendChild(div);

});
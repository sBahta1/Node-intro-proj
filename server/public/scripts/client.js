/* jshint esversion:6*/
console.log(people);
$(readyNow);
function readyNow() {
    console.log('JQ');
    randomName();
    
    shuffleArray(people);
    addPicturesToDom();
    
}
//random number generator (1-19) to pick name based on people[i]
function randomNameGen(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}
let name;
function randomName() {
    let randomNum = randomNameGen(0, 18);
    name = people[randomNum].name;
    console.log(name);
    $('#namePlace').html(name);
}

//onclick and compare name with picture-data-name
function checkNameFunc() {
    let picName = $(this).data('name')

    if (name == picName) {
        console.log("You Got It!");
        alert("You Got It!");
        randomName();
    } else{
        console.log("try again");
        alert("Try Again");
    }
}

function addPicturesToDom(){
    $("#imageStorage").on('click','img',checkNameFunc);
    //loop to populate images to the Dom and assign data point to each
    for (person of people) {
        //console.log(person);
    let student = $('<div class="imgContainer"> <img class="photo" src="https://github.com/' + person.githubUsername + '.png?size=250" data-name="' + person.name + '"></div>');
        $('#imageStorage').append(student);

    }
}
//shuffle function was sourced from Mike Bostock (Fisher-Yates Shuffle) (jttps://bost.ocks.org/mike/shuffle/)
function shuffleArray(array){
    let m = array.length, t, i;
    while (m){
        i= Math.floor(Math.random() * m--);
        t= array[m];
        array[m]=array[i];
        array[i]=t;
    }
    
    return array;
}
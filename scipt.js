let buttonText = 'On';
let isOn = false;
let addedClass = '';


updateView()
function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div id="lightBulb" class="div ${addedClass}"></div>
    <button onclick="lightSwitch()">${buttonText}</button>
    `
}

function lightSwitch(){
    if(isOn == true){
        buttonText = 'Off';
        isOn = false;
        addedClass = 'yellowBackground'
    }
    else{
        buttonText = 'On';
        isOn = true;
        addedClass = '';
    }
    updateView();
    //document.getElementById('lightBulb').classList.toggle('yellowBackground')
    //isOn = !isOn

}

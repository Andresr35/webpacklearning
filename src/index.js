import _ from 'lodash';
import myName from './myName';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
import Notes from './data.csv';

function component(){
    const element = document.createElement('div');

    element.innerHTML = _.join(["hello",'webpack'],' ');
    element.textContent = myName('Andres');
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.log(Data);
    console.log(Notes);
    
    return element;

}
document.body.appendChild(component());
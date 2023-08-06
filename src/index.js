import _ from 'lodash';
import myName from './myName';

function component(){
    const element = document.createElement('div');

    element.innerHTML = _.join(["hello",'webpack'],' ');
    element.textContent = myName('Andres');
    
    return element;

}
document.body.appendChild(component());
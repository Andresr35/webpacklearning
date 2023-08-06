import _ from 'lodash';
import printMe from './print';


function component(){
    const element = document.createElement('div');
    const btn = document.createElement('btn');

    element.innerHTML = _.join(["hello",'webpack'],' ');

    btn.innerHTML = 'Click me and check the console';
    btn.onclick = printMe;

    element.appendChild(btn);
    
    return element;

}
document.body.appendChild(component());
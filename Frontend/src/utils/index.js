import {surpriseMePrompts} from './constant'
import FileSaver from 'file-saver';
export function getRandomPrompts(prompt){
    const randomIndex = Math.floor(Math.random()*surpriseMePrompts.length);
    const randomPromt= surpriseMePrompts[randomIndex];

    if(randomPromt==prompt) return getRandomPrompts(prompt);
    return randomPromt
};

export async function downloadImage(_id,photo){
    FileSaver.saveAs(photo,'download-${_id}.jpg');
    
}


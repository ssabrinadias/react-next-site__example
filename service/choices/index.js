import serverChoices from './action';

export default async ({general: {data}, store}) => {
    
    const car = {
        price: '3333',
        name: 'car'
    }

    const firstChoices = Object.keys(data)
    .filter((item)=>(['engine', 'color', 'wheels'].indexOf(item)!= -1))
    .map((item)=> {
        return {[item] : data[item].items[0]}
    })
    
    return store.dispatch(serverChoices(firstChoices));
};

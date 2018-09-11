import serverChoices from './action';

export default async ({general: {data}, store}) => {
   
    const firstChoices = Object.keys(data)
    .filter((item)=>(['engine', 'color', 'wheels'].indexOf(item)!= -1))
    .map((item)=> {
        return {[item] : data[item].items[0]}
    })
    
    firstChoices.push({car: {
        price: data.price,
        name: 'Model R'
    }})
    console.log(firstChoices[0].engine)
    return store.dispatch(serverChoices(firstChoices));
};

import items from './data/data'
export function add(id,num){
   let data=JSON.parse(localStorage.selected)
 if(data.map((a)=>a[0]).includes(id)){
     for (let i in data){ if(data[i][0]===id){data[i][1]+=num}else{null}};

 }
 else{
     data.push([id,num])
 }
 localStorage.selected=JSON.stringify(data)
 }
 export function reduce(id,num){
  let data=JSON.parse(localStorage.selected)
  if(data.map((a)=>a[0]).includes(id)){
    for (let i in data){ if(data[i][0]===id){if(data[i][1]==1){data.splice(i,1)}else{
      data[i][1]-=num}}else{null}};

  }
  localStorage.selected=JSON.stringify(data)


 }
 export function getnum(){



 }
 export function num(){
    let selected=JSON.parse(localStorage.selected)
    let num
    if (selected.length===0){num=null}
   else if (selected.length===1){num=selected[0][1]}
   else if (selected.length===2){num=selected[0][1]+selected[1][1]}
  else{  num=selected[0][1]+selected[1][1]
    let quantity=selected.length
    for(let i=2;i<quantity;i++){
  num=num+selected[i][1]
    }}
return num 
 }
 export function jam(){
  let selected=JSON.parse(localStorage.selected)
  let selectedprices=selected.map((item)=>items.filter((each)=>each.id===item[0])[0].price*item[1])
  let sum=0
  for (let i = 0; i < selectedprices.length; i++) {
    sum += selectedprices[i];
  }
return sum

 }

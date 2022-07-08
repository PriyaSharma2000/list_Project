// let checkboxOne = document.getElementsByClassName("checkboxOne");
// for(var i=0;i<checkboxOne.length;i++){
//     checkboxOne[i].addEventListener("click",(e)=>{
//         // console.log(e.target.parentNode);
//         // var targetedVal = e.target.parentNode;
//         // console.log(targetedVal.value)
//         if(e.target.parentNode){
//             let checkboxOne = document.getElementsByClassName("checkboxOne");
//             let list1 = document.getElementById("list1");
//             // var listA = "";
//             // listA = `<td>${checkboxOne.value}</td>`;
//             list1.innerHTML += checkboxOne.value;
//         }
//     })
// }
// list1Update();
// var checkboxOne = Array.from(document.getElementsByClassName('checkboxOne'));
// checkboxOne.forEach((checkbox1)=>{
//     checkbox1.addEventListener("change",(e)=>{
//         var list1Val = e.target.value;
//         if(e.target.checked){
//             if(localStorage.getItem("listA") == null){
//         var arr1 = [];
//         arr1.push(list1Val)
//         localStorage.setItem("listA" , JSON.stringify(arr1))
//             }else{
//                 var getArr1 = localStorage.getItem("listA");
//         arr1 = JSON.parse(getArr1);
//         localStorage.setItem("listA" , JSON.stringify(arr1));
//             }
//             // console.log(e.target.value);
//                 // var listA = "";
//                 // listA = `<tr><td>${e.target.value}</td></tr><br>`;
//                 // list1.innerHTML += listA;
//                 list1Update();
//         }
//     })
// });

// let checkboxTwo = Array.from(document.getElementsByClassName("checkboxTwo"));
// checkboxTwo.forEach((checkbox2)=>{
//     checkbox2.addEventListener("change",(e)=>{
//         if(e.target.checked){
//             console.log(e.target.value);
//             let list2 = document.getElementById("list2");
//                 var listB = "";
//                 listB = `<tr><td>${e.target.value}</td></tr><br>`;
//                 list2.innerHTML += listB;
//         }
//     })
// });

// let checkboxThree = Array.from(document.getElementsByClassName("checkboxThree"));
// checkboxThree.forEach((checkbox3)=>{
//     checkbox3.addEventListener("change",(e)=>{
//         if(e.target.checked){
//             console.log(e.target.value);
//             let list3 = document.getElementById("list3");
//                 var listC = "";
//                 listC = `<tr><td>${e.target.value}</td></tr><br>`;
//                 list3.innerHTML += listC;
//         }
//     })
// });

// function list1Update(){
//     if(localStorage.getItem("listA")==null){
//         var arr1 = [];
//         localStorage.setItem("listA" , JSON.stringify(arr1));
//     }else{
//         var getArr1 = localStorage.getItem("listA");
//         arr1 = JSON.parse(getArr1);
//         let html1 = "";
//         arr1.forEach((item1)=>{
//             getArr1.push(item1);
//             html1 = `<tr><td>${item1}</td></tr><br>`;
//             let list1 = document.getElementById("list1");
//             list1.innerHTML += html1;
//         })
//     }
// }

// list1Update();

var arr = []
updateArr();
let checkboxOne= Array.from(document.getElementsByClassName("checkboxOne"));
checkboxOne.forEach((checkbox1)=>{
    
    checkbox1.addEventListener("change",(e)=>{
        if(e.target.checked){
            console.log(e.target.value);
            let list1 = document.getElementById("list1");
                var listA = "";
                listA= `<tr><td>${e.target.value}</td></tr><br>`;
                list1.innerHTML += listA;
                arr.push(e.target.value)
                console.log(arr)
        }
        localStorage.setItem("arr", JSON.stringify(arr));
    })
});
function updateArr(){
    JSON.parse(localStorage.getItem("arr"));
arr.forEach((el)=>{
    let list1 = document.getElementById("list1");
                var listA = "";
                listA= `<tr><td>${el}</td></tr><br>`;
                list1.innerHTML = listA;
})
}


let checkboxTwo = Array.from(document.getElementsByClassName("checkboxTwo"));
checkboxTwo.forEach((checkbox2)=>{
    checkbox2.addEventListener("change",(e)=>{
        if(e.target.checked){
            console.log(e.target.value);
            let list2 = document.getElementById("list2");
                var listB = "";
                listB = `<tr><td>${e.target.value}</td></tr><br>`;
                list2.innerHTML += listB;
        }
    })
});

let checkboxThree = Array.from(document.getElementsByClassName("checkboxThree"));
checkboxThree.forEach((checkbox3)=>{
    checkbox3.addEventListener("change",(e)=>{
        if(e.target.checked){
            console.log(e.target.value);
            let list3 = document.getElementById("list3");
                var listC = "";
                listC = `<tr><td>${e.target.value}</td></tr><br>`;
                list3.innerHTML += listC;
        }
    })
});

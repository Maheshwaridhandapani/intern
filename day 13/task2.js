// let arr=[562,477,4,5888,5];
// // let arr2=[3,4,4,4,4];
// // 
// let ans=arr.concat(arr2);
// // console.log(ans);
//  
// let anss=arr.sort();
// console.log(anss);
//
// 
//  let arr="the sentence is used for find the letter";
// let aa=arr.search("lett");
// console.log(aa);
// 
// console.log(arr.indexOf("is"));
// 
// console.log(arr.slice(4,8));
// 
// let arr1=[2,4,4,5,6,83,3];
// let bb=arr1.includes(28,9);
// console.log(bb);
let fi=[3,5,6,7,9];
let mini=[4,6,2,4,55,9];
let len1=fi.length;
let len2=mini.length;
for(let i=0;i<len2-1;i++)
{
    fi[len1++]=mini[i+1];
}
console.log(fi);



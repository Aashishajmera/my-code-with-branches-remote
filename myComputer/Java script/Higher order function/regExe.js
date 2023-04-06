// let pattern = 'pw'

// let regExOne = new RegExp(pattern)

// let flag = 'gi'
// let regExTwo = new RegExp(pattern, flag)

// let regExThree = /pw/gi

// const strToCheck = "PW is growing at a rapid speed and recently they are working on Pwskills to create skills based pwcontent"

// const result = regExThree.test(strToCheck)
// console.log(result);

// const anotherResult = strToCheck.match(regExThree)
// console.log(anotherResult);

// const oneMoreResult = strToCheck.replace(regExThree, 'p-w')
// console.log(oneMoreResult);

// const webUrl = "https://pwskills.com/hitesh%20choudhary"

// const useableUrl = webUrl.replace(/%\d0/, '-')
// console.log(useableUrl);


// regExe define krne ke tarike 

let pattern = 'Loverboy'
let flag = 'gi'


//define krne ke tarike 
// 3 tarike se define kr sakte hai apn 
// let reg_name = new RegExp(pattern,flag);  
// const reg_name = new RegExp('Loverboy', 'gi' );
const reg_name = new RegExp(/Loverboy/, "gi")
const checking_var = 'Hi am a loverboy and my real name is Aashish ajmera and my nick name loverboy';

//only check krta hai true ya false 
const result = reg_name.test(checking_var)    
console.log(result);

// agr hai to kitni bar hai 
const oneMoreResult = checking_var.match(reg_name)
console.log(oneMoreResult);

// agar replace kran ho to
const replace_value = checking_var.replace(reg_name, 'Aashu')
console.log(replace_value);




// ish mathod se regExp check krne pr jesa pahle kra tha 
const reg_name2 =/pw/g   // yah pr only g hai because case sensetive hai 

const value_checking = "PW is growing at a rapid speed and recently they are working on Pwskills to create skills based pwcontent";

const only_test = reg_name2.test(value_checking);
console.log(only_test);

const only_match = value_checking.match(reg_name2);
console.log(only_match);

const replace_val = value_checking.replace(reg_name2, 'A3')
console.log(replace_val);



// MDN 

// const re = /\w+/;
// OR
// const re = new RegExp("\\w+");

// console.log(re);


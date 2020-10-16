'use strict'

{
    
    const person = {
        firstName: "shirahama", 
        lastName: "hiroki",
        tall: 170,
        weight: 65,
        adress1: "", 
        adress2: "", 
        adress3: "",
        tellNumber: 1201111111,
        post: 1111,
        birthday: "",
        sex: "",
    };
    const person2 = {
        firstName: "sugasaki", 
        lastName: "",
        tall: 170,
        weight: 65,
        adress1: "", 
        adress2: "", 
        adress3: "",
        tellNumber: 1201111111,
        post: 1111,
        birthday: "",
        sex: "",
    };
    // obj.forEach(weight => {
    //     console.log(`Key: ${weight} Value: ${person.weight} , firstName: ${person.firstName} , lastName: ${person.lastName}`)
    // })

    // パラメータ: tall
    // // 期待値:　250
    let userInput = "tall";
    let userValue = getValue(person, userInput); 

    console.log(`userInput= ${userInput} , userValue= ${userValue}`);
    // パラメータ: firstName
    // 期待値:　100
    userInput = "firstName";
    userValue = getValue(person, userInput); 
    console.log(`userInput= ${userInput} , userValue= ${userValue}`);

    // // パラメータ: weight
    // // 期待値:　x
    userInput = "weight";
    userValue = getValue(person, userInput); 
    console.log(`userInput= ${userInput} , userValue= ${userValue}`);

    // // パラメータ: sex
    // // 期待値:　男
    userInput = "firstName";
    userValue = getValue(person2, userInput);
    // userValue = person2["firstName"]
    // userValue = person2.firstName
    console.log(`userInput= ${userInput} , userValue= ${userValue}`);



    // console.log(`Key: ${weight} Value: ${person.weight} , firstName: ${person.firstName} , lastName: ${person.lastName}`)
    function getValue(person, userInput) {
        const keys = Object.keys(person);
        keys.forEach(key => {
            console.log(`${key} ${person[key]}`);
        })
        return (person[userInput]);

    };
}

// const tinderUser = new Object() //singleton object
// const tinderUser = {} // non singleton object

//  tinderUser.id = "123abc"
//  tinderUser.name = "shivam"
//  tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "sum@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shivam",
            lastname:"tripathi"

        }
    }
}
console.log(regularUser.fullname.userfullname.firstname) //? is used if there is no value nothing will happen no need to use if else



    const obj1 = {1: "a", 2: "b"}
    const obj2 = {3: "a", 4: "b"}
    const obj4 = {5: "a", 6: "b"}

    //const obj3 = {obj1, obj2}
    //const obj3 = Object.assign({}, obj1, obj2, obj4)
    //console.log(obj3); //{} empty object is given to it and ob1,obj2 these are source.

    const obj3 = {...obj1,...obj2} //...(dot dot dot means spread this ... is used mostly.
    console.log(obj3);
    
    const users = [
        {
            id: 1,
            email: "h@gmail.com"
        }
    ]

    users[1].email
    console.log(tinderUser);
    
console.log(Object.keys(tinderUser)); //very important
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnPropery('fisLoggedIn') );




    
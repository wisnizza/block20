const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main(users) {
    const root = document.getElementById("root");

    const h1 = document.createElement("h1");
    h1.innerHTML = "FREELANCERS";
    root.appendChild(h1);

    const ul = document.createElement("ul");
    root.appendChild(ul);
    
    users.forEach(function(user){
    const li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML += `Name: ${user.name}, Age: ${user.age}, Occupation: ${user.occupation}`;
    });

}

//call the main function
main(users);
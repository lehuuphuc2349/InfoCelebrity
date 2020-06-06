var info = [
  {
    id: 1,
    name: "Bill Gates",
    age: 65,
    title: "CEO MicroSoft",
  },
  {
    id: 2,
    name: "Steb Jobs",
    age: 65,
  },
  {
    id: 3,
    name: "Stark Le",
    age: 65,
  },
];
for (var i = 0; i < info.length; i++) {
  document.getElementById("root").innerHTML +=
    `  <form> <br>${info[i].name} <br> ${info[i].age} <br> ${info[i].title}</form>` +
    `  <form> <br>${info[i].name} <br> ${info[i].age} <br> ${info[i].title}</form>`;
}

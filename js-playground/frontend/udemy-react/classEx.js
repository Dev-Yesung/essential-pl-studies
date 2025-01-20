class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi! my name is ${this.name}.`);
    console.log(`And my age is ${this.age}!`);
  }

  farewell({ name, time }) {
    console.log(`good bye ${name}! it's ${time} now.`);
  }
}

const kimChiUser = new User("kimChi", 34);
kimChiUser.greet();
kimChiUser.farewell({ name: "riceMan", time: "11:00pm" });

const [firstName, lastName] = ["Yesung", "Go"];
console.log(`hi i'm ${firstName} ${lastName}`);

const hobbies = ["Sports", "Cooking", "Computer Game", "Listening Music"];
const secretHobbies = ["Poker", "Hoola"];
const mergedHobbies = [...hobbies, secretHobbies];
console.log(hobbies);
console.log(mergedHobbies);

const user = {
  name: "Yesung",
  age: 30,
};

const user2 = {
  isAdmin: true,
  ...user,
};
console.log(user2);

for (const hobby of hobbies) {
  console.log(hobby);
}

const handleTimeout = (var1) => {
  console.log(var1);
};

setTimeout(() => handleTimeout("Yes!!!"), 2000);

/*// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function user  (id, name, surname, email, phone){
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.emaol = email;
  this.phone = phone;
}


let user1 = new user(1, 'Sergiy', 'Vintonyak', 'vintonyak0601@gmail.com', '0966050643');
console.log(user1);*/

/*// створити пустий масив, наповнити його 10 об'єктами new User(....)

let newArayCity = [
  new City(1, 'Kabul', 'AFG', 'Kabol',178000),
  new City(2, 'Qandahar', 'AFG', 'Qandahar', 237500),
  new City(3,'Amsterdam','NLD','Noord-Holland',731200),
  new City(4,'Tirana','ALB','Tirana',270000),
  new City(5,'Tafuna','ASM','Tutuila',5200),
  new City(6,'Belize City','BLZ','Belize City',55810),
  new City(7,'Curitiba','BRA','ParanÃ¡',1584232),
  new City(8,'Joinville','BRA','Santa Catarina',428011),
  new City(9,'Valdivia','CHL','Los Lagos',133106),
  new City(10,'Panabo','PHL','Southern Mindanao',133786),

];
function City (id,name,countryCode, district, population) {
  this.id = id;
  this.name = name;
  this.countryCode = countryCode;
  this.district = district;
  this.population = population;
}
console.log(newArayCity);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let result = newArayCity.filter(newArayCity => newArayCity.id % 2 === 0);
console.log(result);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

newArayCity.sort((a,b) => b.id - a.id)
console.log(newArayCity);*/


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
  constructor(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
  }
}
// створити пустий масив, наповнити його 10 об'єктами Client

let arrayClient = [
  new Client(1, 'PENELOPE', 'GUINESS', '1234@gmail.com',73456633, ['apple', 'tomato']),
  new Client(5, 'NICK', 'WAHLBERG', '1ssew@gmail.com',988556, ['apple', 'milk','potato']),
  new Client(20, 'JENNIFER', 'DAVIS', 'rubot@gmail.com',380553355 , ['apple','ps4','phone', 'tomato']),
  new Client(4, 'MATTHEW', 'JOHANSSON', 'eogv@gmail.com', 3809659465, ['apple', 'sugar']),
  new Client(7, 'RIP', 'CRAWFORD', 'qpqwr@gmail.com',380679651233 , ['apple', 'tomato']),
  new Client(35, 'TOM', 'MIRANDA', 'qwe@gmail.com',380679651233 , ['apple','abrikos', 'tomato']),
  new Client(14, 'JAYNE', 'NEESON', 'asd4@gmail.com',38067957903456, ['apple','jem', 'tomato']),
  new Client(9, 'RALPH', 'CRUZ', 'dfh@gmail.com',380679651233 , ['apple', 'tomato','baton']),
  new Client(57, 'JIM', 'MOSTEL', 'hjg@gmail.com', 38067965156, ['apple', 'tomato']),
  new Client(11, 'ALBERT', 'NOLTE', 'ewr@gmail.com', 38067965154, ['apple', 'tomato'])
];
console.log(arrayClient);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(arrayClient.sort((a, b) => a.order.length - b.order.length));

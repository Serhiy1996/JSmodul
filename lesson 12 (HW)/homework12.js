// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts


// fetch(' https://jsonplaceholder.typicode.com/posts')
//   .then(respone => {
//     return respone.json();})
//   .then(post => {
//     let wraper = document.createElement('div');
//     wraper.classList.add('wraper');
//     for (const postes of post) {
//       let div = document.createElement('div');
//       div.classList.add('posts');
//       div.innerHTML =`
//       <h2>${postes.id}</h2>
//       <h3>${postes.title}</h3>
//       <p>${postes.body}</p>`
//       wraper.append(div);
//       document.body.append(wraper);
//     }
//   })

//   2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//   Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments


fetch('https://jsonplaceholder.typicode.com/comments')
  .then(respon => {
    return respon.json();
  })
  .then(comments => {
    let wraper = document.createElement('div');
    wraper.classList.add('wraper');
    for (const coments of comments) {
      let div = document.createElement('div');
      div.classList.add('coment');
      div.innerHTML =`
      <h2>${coments.id}</h2>
      <h3>${coments.name}</h3>
      <h4>${coments.body}</h4>
      <p>${coments.email}</p>`
      wraper.appendChild(div);
      document.body.appendChild(wraper)
    }
  });


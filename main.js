// console.log('Hello from the outside');  

// $(document).ready(
//     function() { 
//       $('#loginButton').click(
//         function() { 
//         console.log('Hello from inside');    
//         let addUsername = $('input[id=username]').val();
//         let addPassword = $('input[id=password]').val();
//         console.log(addUsername, addPassword );
//             $.post('/login', {username: addUsername, password: addPassword})
//             .done(function(data){
//                 console.log('Post successful');
//                 console.log('Data loaded', data);
//             });
//         }
//       )
//     }
// )

//   () => { 
//     $('loginButton').click(
//       () => { 
//      let addUser = $('input[id=username]' + 'input[id=password]').val();
//      $('ol').append('<li>' + add + '</li>')
//       }
//     )}
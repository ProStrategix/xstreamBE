
// document.getElementById('basicplan').addEventListener('click', function () {
//   // console.log("in");
//     const featuresElement = document.querySelector('#subplans');
//     const button = document.querySelector('#basicplan');
//     if (featuresElement.style.display=='block') {
      
//           featuresElement.style.display = 'none';
//           button.innerHTML  = 'Add Service';

      
//     } else {
//       fetch('/cart', {
//         method: 'POST', // Or GET, PUT, DELETE, etc.
//         headers: {
//           'Content-Type': 'application/json' // Adjust if necessary
//         },
//         body: JSON.stringify({itemId: '6757ca4504e91d63e43cdf1c'}) // If sending data
//       })
//       .then(response => {
//         // Handle the response
//         if (response.ok) {
//           console.log(response.json()); // Parse JSON response
//           featuresElement.style.display = 'block'; 
//           button.innerHTML  = 'Remove Service';
//         } else {
//           throw new Error('Network response was not ok');
//         }
//       })
//       .then(data => {
//         // Do something with the data
//         console.log(data);
//       })
//       .catch(error => {
//         // Handle errors
//         console.error('Error:', error);
//         Swal.fire({
//               icon: 'error',
//               title: 'Cannot add to cart!',
//               confirmButtonText: 'OK'
//           });
//       });
    
    
//     }
    
// });

document.getElementById('expandedplan').addEventListener('click', function () {
  const featuresElement = document.querySelector('#subplans');
  const button = document.querySelector('#expandedplan');
  const active = document.querySelector('#preferredplan');

  if (button.innerHTML== 'Add Plan') {
    if(active.innerHTML =='Add Plan'){
      featuresElement.style.display = 'block';
    }
    fetch('/cart/add', {
              method: 'POST', // Or GET, PUT, DELETE, etc.
              headers: {
                'Content-Type': 'application/json' // Adjust if necessary
              },
              body: JSON.stringify({itemId: button.getAttribute("value")}) // If sending data
            })
            .then(response => {
              // Handle the response
              if (response.ok) {
                button.innerHTML  = 'Remove Plan';
              } else {
                throw new Error('Network response was not ok');
              }
            })
            .then(data => {
              // Do something with the data
              console.log(data);
            })
            .catch(error => {
              // Handle errors
              // console.log('Error:', error);
              Swal.fire({
                    icon: 'error',
                    title: 'Cannot add to cart!',
                    confirmButtonText: 'OK'
            });
    });
   
  } else {
    if(active.innerHTML =='Remove Plan'){
      featuresElement.style.display = 'block';
    }
    else{
      featuresElement.style.display = 'none';
    }
    fetch('/cart/remove', {
      method: 'POST', // Or GET, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json' // Adjust if necessary
      },
      body: JSON.stringify({itemId: button.getAttribute("value")}) // If sending data
    })
    .then(response => {
      // Handle the response
      if (response.ok) {
        button.innerHTML  = 'Add Plan';
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .then(data => {
      // Do something with the data
      console.log(data);
    })
    .catch(error => {
      // Handle errors
      // console.log('Error:', error);
      Swal.fire({
            icon: 'error',
            title: 'Cannot remove from cart!',
            confirmButtonText: 'OK'
    });
});
   
  }
  
});
document.getElementById('preferredplan').addEventListener('click', function () {
const featuresElement = document.querySelector('#subplans');
const button = document.querySelector('#preferredplan');
const active = document.querySelector('#expandedplan');
if (button.innerHTML== 'Add Plan') {
  if(active.innerHTML =='Add Plan'){
    featuresElement.style.display = 'block';
  }
  
  fetch('/cart/add', {
    method: 'POST', // Or GET, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json' // Adjust if necessary
    },
    body: JSON.stringify({itemId: button.getAttribute("value")}) // If sending data
  })
  .then(response => {
    // Handle the response
    if (response.ok) {
      button.innerHTML  = 'Remove Plan';
    } else {
      throw new Error('Network response was not ok');
    }
  })
  .then(data => {
    // Do something with the data
    console.log(data);
  })
  .catch(error => {
    // Handle errors
    // console.log('Error:', error);
    Swal.fire({
          icon: 'error',
          title: 'Cannot add to cart!',
          confirmButtonText: 'OK'
  });
});
} else {
  if(active.innerHTML =='Remove Plan'){
    featuresElement.style.display = 'block';
  }
  else{
    featuresElement.style.display = 'none';
  }
 
  fetch('/cart/remove', {
    method: 'POST', // Or GET, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json' // Adjust if necessary
    },
    body: JSON.stringify({itemId: button.getAttribute("value")}) // If sending data
  })
  .then(response => {
    // Handle the response
    if (response.ok) {
      button.innerHTML  = 'Add Plan';
    } else {
      throw new Error('Network response was not ok');
    }
  })
  .then(data => {
    // Do something with the data
    console.log(data);
  })
  .catch(error => {
    // Handle errors
    // console.log('Error:', error);
    Swal.fire({
          icon: 'error',
          title: 'Cannot remove from cart!',
          confirmButtonText: 'OK'
  });
});
}

});
document.getElementById('servicebtn').addEventListener('click', function () {
  const button = document.querySelector('#servicebtn');
  if (button.innerHTML== 'Add Plan') {
    
    
    fetch('/cart/add', {
      method: 'POST', // Or GET, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json' // Adjust if necessary
      },
      body: JSON.stringify({itemId: button.getAttribute("value")}) // If sending data
    })
    .then(response => {
      // Handle the response
      if (response.ok) {
        button.innerHTML  = 'Remove Plan';
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .then(data => {
      // Do something with the data
      console.log(data);
    })
    .catch(error => {
      // Handle errors
      // console.log('Error:', error);
      Swal.fire({
            icon: 'error',
            title: 'Cannot add to cart!',
            confirmButtonText: 'OK'
    });
});
  } else {
   
    fetch('/cart/remove', {
      method: 'POST', // Or GET, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json' // Adjust if necessary
      },
      body: JSON.stringify({itemId: button.getAttribute("value")}) // If sending data
    })
    .then(response => {
      // Handle the response
      if (response.ok) {
        button.innerHTML  = 'Add Plan';
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .then(data => {
      // Do something with the data
      console.log(data);
    })
    .catch(error => {
      // Handle errors
      // console.log('Error:', error);
      Swal.fire({
            icon: 'error',
            title: 'Cannot remove from cart!',
            confirmButtonText: 'OK'
    });
});
  }
  
});
document.getElementById('servicebtn2').addEventListener('click', function () {
const button = document.querySelector('#servicebtn2');
if (button.innerHTML== 'Add Plan') {
  
  
  fetch('/cart/add', {
    method: 'POST', // Or GET, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json' // Adjust if necessary
    },
    body: JSON.stringify({itemId: button.getAttribute("value")}) // If sending data
  })
  .then(response => {
    // Handle the response
    if (response.ok) {
      button.innerHTML  = 'Remove Plan';
    } else {
      throw new Error('Network response was not ok');
    }
  })
  .then(data => {
    // Do something with the data
    console.log(data);
  })
  .catch(error => {
    // Handle errors
    // console.log('Error:', error);
    Swal.fire({
          icon: 'error',
          title: 'Cannot add to cart!',
          confirmButtonText: 'OK'
  });
});
} else {
 
  fetch('/cart/remove', {
    method: 'POST', // Or GET, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json' // Adjust if necessary
    },
    body: JSON.stringify({itemId: button.getAttribute("value")}) // If sending data
  })
  .then(response => {
    // Handle the response
    if (response.ok) {
      button.innerHTML  = 'Add Plan';
    } else {
      throw new Error('Network response was not ok');
    }
  })
  .then(data => {
    // Do something with the data
    console.log(data);
  })
  .catch(error => {
    // Handle errors
    // console.log('Error:', error);
    Swal.fire({
          icon: 'error',
          title: 'Cannot remove from cart!',
          confirmButtonText: 'OK'
  });
});
}

});
document.getElementById('internetbtn').addEventListener('click', function () {
  const button = document.querySelector('#internetbtn');
  if (button.innerHTML== 'Add Internet') {
    
    
    button.innerHTML  = 'Remove Internet';
  } else {
   
    button.innerHTML  = 'Add Internet';
  }
  
});
document.getElementById('phonebtn').addEventListener('click', function () {
  const button = document.querySelector('#phonebtn');
  if (button.innerHTML== 'Add Phone') {
    
    
    button.innerHTML  = 'Remove Phone';
  } else {
   
    button.innerHTML  = 'Add Phone';
  }
  
});

document.getElementById('hbobtn').addEventListener('click', function () {
  const button = document.getElementById('hbobtn');
  if (button.innerHTML== 'Add HBO') {
    
    
    fetch('/cart/add', {
      method: 'POST', // Or GET, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json' // Adjust if necessary
      },
      body: JSON.stringify({itemId: button.getAttribute("value")}) // If sending data
    })
    .then(response => {
      // Handle the response
      if (response.ok) {
        button.innerHTML  = 'Remove HBO';
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .then(data => {
      // Do something with the data
      console.log(data);
    })
    .catch(error => {
      // Handle errors
      // console.log('Error:', error);
      Swal.fire({
            icon: 'error',
            title: 'Cannot add to cart!',
            confirmButtonText: 'OK'
    });
  });
  } else {
   
    fetch('/cart/remove', {
      method: 'POST', // Or GET, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json' // Adjust if necessary
      },
      body: JSON.stringify({itemId: button.getAttribute("value")}) // If sending data
    })
    .then(response => {
      // Handle the response
      if (response.ok) {
        button.innerHTML  = 'Add HBO';
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .then(data => {
      // Do something with the data
      console.log(data);
    })
    .catch(error => {
      // Handle errors
      // console.log('Error:', error);
      Swal.fire({
            icon: 'error',
            title: 'Cannot remove from cart!',
            confirmButtonText: 'OK'
    });
});
  }
  
});
document.getElementById('sportsbtn').addEventListener('click', function () {
  const button = document.getElementById('sportsbtn');
  if (button.innerHTML== 'Add Sports') {
    
    
    fetch('/cart/add', {
      method: 'POST', // Or GET, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json' // Adjust if necessary
      },
      body: JSON.stringify({itemId: button.getAttribute("value")}) // If sending data
    })
    .then(response => {
      // Handle the response
      if (response.ok) {
        button.innerHTML  = 'Remove Sports';
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .then(data => {
      // Do something with the data
      console.log(data);
    })
    .catch(error => {
      // Handle errors
      // console.log('Error:', error);
      Swal.fire({
            icon: 'error',
            title: 'Cannot add to cart!',
            confirmButtonText: 'OK'
    });
  });
  } else {
   
    fetch('/cart/remove', {
      method: 'POST', // Or GET, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json' // Adjust if necessary
      },
      body: JSON.stringify({itemId: button.getAttribute("value")}) // If sending data
    })
    .then(response => {
      // Handle the response
      if (response.ok) {
        button.innerHTML  = 'Add Sports';
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .then(data => {
      // Do something with the data
      console.log(data);
    })
    .catch(error => {
      // Handle errors
      // console.log('Error:', error);
      Swal.fire({
            icon: 'error',
            title: 'Cannot remove from cart!',
            confirmButtonText: 'OK'
    });
});
  }
  
});
document.getElementById('spanishbtn').addEventListener('click', function () {
  const button = document.getElementById('spanishbtn');
  if (button.innerHTML== 'Add Spanish') {
    
    
    fetch('/cart/add', {
      method: 'POST', // Or GET, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json' // Adjust if necessary
      },
      body: JSON.stringify({itemId: button.getAttribute("value")}) // If sending data
    })
    .then(response => {
      // Handle the response
      if (response.ok) {
        button.innerHTML  = 'Remove Spanish';
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .then(data => {
      // Do something with the data
      console.log(data);
    })
    .catch(error => {
      // Handle errors
      // console.log('Error:', error);
      Swal.fire({
            icon: 'error',
            title: 'Cannot add to cart!',
            confirmButtonText: 'OK'
    });
  });
  } else {
   
    fetch('/cart/remove', {
      method: 'POST', // Or GET, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json' // Adjust if necessary
      },
      body: JSON.stringify({itemId: button.getAttribute("value")}) // If sending data
    })
    .then(response => {
      // Handle the response
      if (response.ok) {
        button.innerHTML  = 'Add Spanish';
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .then(data => {
      // Do something with the data
      console.log(data);
    })
    .catch(error => {
      // Handle errors
      // console.log('Error:', error);
      Swal.fire({
            icon: 'error',
            title: 'Cannot remove from cart!',
            confirmButtonText: 'OK'
    });
});
  }
  
});
document.addEventListener("DOMContentLoaded", function () {

  const spanish = document.getElementById('spanishbtn');
  const sports = document.getElementById('sportsbtn');
  const hbo = document.getElementById('hbobtn')
  const featuresElement = document.querySelector('#subplans');
  if(spanish.innerHTML==="Remove Spanish" || sports.innerHTML==="Remove Sports" || hbo.innerHTML==="Remove HBO"){
    featuresElement.style.display = 'block';
  }


});
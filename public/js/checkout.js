// document.addEventListener("DOMContentLoaded", () => {
//     // Prepare the payload
//     const payload = {
//             "CustomerId": "879",
//             "MID": "70970000377135",
//             "ReferenceId": "13953826584682688",
//             "Amount": "201.00",
//             "Token": "9a7989553ea6c38469dd41d859a6542408bf73ce",
//             "IsRecurring": "true",
//             "CardToken": "",
//             "CustomerEmail": "test@ippay.com",
//             "SaveForFuture": "false",
//             "CallbackURL": "https://merchant.com/callback",
//             "CustomField1": "",
//             "CustomField2": "",
//             "CustomField3": "",
//             "PaymentType": "CC",
//             "TransactionType": "SALE",
//             "ENQReferenceId": "",
//             "TransactionId": ""
//     };
  
//     // Make the POST request
//     fetch('/checkout/payment-process', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(payload),
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`Error: ${response.statusText}`+error);
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('Response from server:', data);
//         // Handle the response (e.g., update the UI)
//       })
//       .catch(error => {
//         console.error('Error making request:', error);
//       });
//   });
  
const cron = require("node-cron");

cron.schedule('1,2,4,5 * * * * *', () => {
    console.log('running every minute 1, 2, 4 and 5');
    // sendMail();
  });

//   cron.schedule("1 * * * *",()=>{
//     console.log("Wish Birthday...");
//   })
//   cron.schedule("1 * * * *",()=>{
//     console.log("Wish Birthday...");
//   })

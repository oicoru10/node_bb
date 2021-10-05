'use strict';

var request = require('superagent');
require('superagent-retry')(request);
var cron = require('node-cron');


var formId = '1FAIpQLSdPydZ3hO61EoFrHV96rtcwgR4fxuhYZhON_NeaRICE2Dc7mg';
var url = `https://docs.google.com/forms/d/e/${formId}/formResponse`;
var check_succ1 = false;
var check_succ2 = false;
var check_succ3 = false;
var check_succ4 = false;
var check_succ5 = false;
var check_succ6 = false;

var fields = {
    licen: 'entry.1497021422', 
    area: 'entry.1101546368',
  };
var task = cron.schedule('*/1 * * * * *', function(){
    // sentgg_1(); //ผต1054
    // sentgg_2();  //2ฒห8712
    // sentgg_3();  //บล8880
    // sentgg_4();  //3ฒฌ7801
     sentgg_5();  //3ฒฉ1862
    // sentgg_6();  //ศ7617
},
{
    scheduled: false
  });

//   cron.schedule('58 59 15 * * *', function(){
    task.start();
//    });
  

async  function sentgg_1() {

  if(!check_succ1)
  {
    console.log(new Date().toTimeString().substr(0, 8)  + " :", "\x1b[36m" , "ผต1054 :" ,  "\x1b[0m" , "\x1b[34m" , "Start.." , "\x1b[0m");
            request
                .post(url)
                .type('form')
                .send({ 
                    [fields.licen]: 'ผต1054',
                    [fields.area]: 'UPC (ต่างจังหวัด)',
                })
                .end(function(err, res){
                    if (err || !res.ok) {
                        console.log(new Date().toTimeString().substr(0, 8) + " : ", "\x1b[36m" , "ผต1054 :" , "\x1b[0m" , "\x1b[31m" , res.statusCode + " " + err,"\x1b[0m");
                        
                        if(res.statusCode == '400')
                        {
                          check_succ1 = true;
                        }
                    } else 
                    {
                      const submissionPage = res.redirects[0];
                      if (submissionPage) 
                        {
                            if (submissionPage.includes("closedform")) 
                            {
                                console.log(new Date().toTimeString().substr(0, 8) + " :", "\x1b[36m" , "ผต1054 :" , "\x1b[0m" , "\x1b[33m" , "Form Closed","\x1b[0m");
                                
                            }
                            else
                            {
                                console.log(new Date().toTimeString().substr(0, 8) + " :", "\x1b[36m" , "ผต1054 :" , "\x1b[0m" , "\x1b[32m" , "Submitted Successfully","\x1b[0m");
                                check_succ1 = true;
                            }
                        }
                        else
                        {
                            console.log(new Date().toTimeString().substr(0, 8) + " :", "\x1b[36m" , "ผต1054 :" , "\x1b[0m" , "\x1b[32m" , "Submitted Successfully","\x1b[0m");
                            check_succ1 = true;
                        }
                    }
                    
                });
    }
    else
    {
        task.stop();
    }
}

async  function sentgg_2() {

    if(!check_succ2)
    {
        console.log(new Date().toTimeString().substr(0, 8)  + " :", "\x1b[36m" , "2ฒห8712 :" ,  "\x1b[0m" , "\x1b[34m" , "Start.." , "\x1b[0m");
              request
                  .post(url)
                  .type('form')
                  .send({ 
                      [fields.licen]: '2ฒห8712',
                      [fields.area]: 'UPC (ต่างจังหวัด)',
                  })
                  .end(function(err, res){
                      if (err || !res.ok) {
                        console.log(new Date().toTimeString().substr(0, 8) + " : ", "\x1b[36m" , "2ฒห8712 :" , "\x1b[0m" , "\x1b[31m" , res.statusCode +  " " + err,"\x1b[0m");
                          if(res.statusCode == '400')
                          {
                            check_succ2 = true;
                          }
                      } else 
                      {
                        const submissionPage = res.redirects[0];
                        if (submissionPage) 
                          {
                              if (submissionPage.includes("closedform")) 
                              {
                                console.log(new Date().toTimeString().substr(0, 8) + " :", "\x1b[36m" , "2ฒห8712 :" , "\x1b[0m" , "\x1b[33m" , "Form Closed","\x1b[0m");
                              }
                              else
                              {
                                console.log(new Date().toTimeString().substr(0, 8) + " :", "\x1b[36m" , "2ฒห8712 :" , "\x1b[0m" , "\x1b[32m" , "Submitted Successfully","\x1b[0m");
                                  check_succ2 = true;
                              }
                          }
                          else
                          {
                            console.log(new Date().toTimeString().substr(0, 8) + " :", "\x1b[36m" , "2ฒห8712 :" , "\x1b[0m" , "\x1b[32m" , "Submitted Successfully","\x1b[0m");
                              check_succ2 = true;
                          }
                      }
                      
                  });
      }
      else
      {
          task.stop();
      }
  }

  async  function sentgg_3() {

    if(!check_succ3)
    {
        console.log(new Date().toTimeString().substr(0, 8)  + " :", "\x1b[36m" , "บล8880 :" ,  "\x1b[0m" , "\x1b[34m" , "Start.." , "\x1b[0m");
              request
                  .post(url)
                  .type('form')
                  .send({ 
                      [fields.licen]: 'บล8880',
                      [fields.area]: 'UPC (ต่างจังหวัด)',
                  })
                  .end(function(err, res){
                      if (err || !res.ok) {
                        console.log(new Date().toTimeString().substr(0, 8) + " : ", "\x1b[36m" , "บล8880 :" , "\x1b[0m" , "\x1b[31m" , res.statusCode + " " + err,"\x1b[0m");
                          if(res.statusCode == '400')
                          {
                            check_succ3 = true;
                          }
                      } else 
                      {
                        const submissionPage = res.redirects[0];
                        if (submissionPage) 
                          {
                              if (submissionPage.includes("closedform")) 
                              {
                                console.log(new Date().toTimeString().substr(0, 8) + " :", "\x1b[36m" , "บล8880 :" , "\x1b[0m" , "\x1b[33m" , "Form Closed","\x1b[0m");
                              }
                              else
                              {
                                console.log(new Date().toTimeString().substr(0, 8) + " :", "\x1b[36m" , "บล8880 :" , "\x1b[0m" , "\x1b[32m" , "Submitted Successfully","\x1b[0m");
                                  check_succ3 = true;
                              }
                          }
                          else
                          {
                            console.log(new Date().toTimeString().substr(0, 8) + " :", "\x1b[36m" , "บล8880 :" , "\x1b[0m" , "\x1b[32m" , "Submitted Successfully","\x1b[0m");
                              check_succ3 = true;
                          }
                      }
                      
                  });
      }
      else
      {
          task.stop();
      }
  }

  async  function sentgg_4() {

    if(!check_succ4)
    {
        console.log(new Date().toTimeString().substr(0, 8)  + " :", "\x1b[36m" , "3ฒฌ7801 :" ,  "\x1b[0m" , "\x1b[34m" , "Start.." , "\x1b[0m");
              request
                  .post(url)
                  .type('form')
                  .send({ 
                      [fields.licen]: '3ฒฌ7801',
                      [fields.area]: 'UPC (ต่างจังหวัด)',
                  })
                  .end(function(err, res){
                      if (err || !res.ok) {
                        console.log(new Date().toTimeString().substr(0, 8) + " : ", "\x1b[36m" , "3ฒฌ7801 :" , "\x1b[0m" , "\x1b[31m" , res.statusCode + " " + err,"\x1b[0m");
                          if(res.statusCode == '400')
                          {
                            check_succ4 = true;
                          }
                      } else 
                      {
                        const submissionPage = res.redirects[0];
                        if (submissionPage) 
                          {
                              if (submissionPage.includes("closedform")) 
                              {
                                console.log(new Date().toTimeString().substr(0, 8) + " :", "\x1b[36m" , "3ฒฌ7801 :" , "\x1b[0m" , "\x1b[33m" , "Form Closed","\x1b[0m"); 
                              }
                              else
                              {
                                console.log(new Date().toTimeString().substr(0, 8) + " :", "\x1b[36m" , "3ฒฌ7801 :" , "\x1b[0m" , "\x1b[32m" , "Submitted Successfully","\x1b[0m");
                                  check_succ4 = true;
                              }
                          }
                          else
                          {
                            console.log(new Date().toTimeString().substr(0, 8) + " :", "\x1b[36m" , "3ฒฌ7801 :" , "\x1b[0m" , "\x1b[32m" , "Submitted Successfully","\x1b[0m");
                              check_succ4 = true;
                          }
                      }
                      
                  });
      }
      else
      {
          task.stop();
      }
  }

  async  function sentgg_5() {

    if(!check_succ5)
    {
        console.log(new Date().toTimeString().substr(0, 8)  + " :", "\x1b[36m" , "3ฒฉ1862 :" ,  "\x1b[0m" , "\x1b[34m" , "Start.." , "\x1b[0m");
              request
                  .post(url)
                  .type('form')
                  .send({ 
                      [fields.licen]: '3ฒฉ1862',
                      [fields.area]: 'UPC (ต่างจังหวัด)',
                  })
                  .end(function(err, res){
                      if (err || !res.ok) {
                        console.log(new Date().toTimeString().substr(0, 8) + " : ", "\x1b[36m" , "3ฒฉ1862 :" , "\x1b[0m" , "\x1b[31m" , res.statusCode + " " + err,"\x1b[0m");
                          if(res.statusCode == '400')
                          {
                            check_succ5 = true;
                          }
                      } else 
                      {
                        const submissionPage = res.redirects[0];
                        if (submissionPage) 
                          {
                              if (submissionPage.includes("closedform")) 
                              {
                                console.log(new Date().toTimeString().substr(0, 8) + " :", "\x1b[36m" , "3ฒฉ1862 :" , "\x1b[0m" , "\x1b[33m" , "Form Closed","\x1b[0m");
                              }
                              else
                              {
                                console.log(new Date().toTimeString().substr(0, 8) + " :", "\x1b[36m" , "3ฒฉ1862 :" , "\x1b[0m" , "\x1b[32m" , "Submitted Successfully","\x1b[0m");
                                  check_succ5 = true;
                              }
                          }
                          else
                          {
                            console.log(new Date().toTimeString().substr(0, 8) + " :", "\x1b[36m" , "3ฒฉ1862 :" , "\x1b[0m" , "\x1b[32m" , "Submitted Successfully","\x1b[0m");
                              check_succ5 = true;
                          }
                      }
                      
                  });
      }
      else
      {
          task.stop();
      }
  }

  async  function sentgg_6() {

    if(!check_succ6)
    {
        console.log(new Date().toTimeString().substr(0, 8)  + " :", "\x1b[36m" , "ศ7617 :" ,  "\x1b[0m" , "\x1b[34m" , "Start.." , "\x1b[0m");
              request
                  .post(url)
                  .type('form')
                  .send({ 
                      [fields.licen]: 'ศ7617',
                      [fields.area]: 'UPC (ต่างจังหวัด)',
                  })
                  .end(function(err, res){
                      if (err || !res.ok) {
                        console.log(new Date().toTimeString().substr(0, 8) + " : ", "\x1b[36m" , "ศ7617 :" , "\x1b[0m" , "\x1b[31m" , res.statusCode + " " + err,"\x1b[0m");
                          if(res.statusCode == '400')
                          {
                            check_succ6 = true;
                          }
                      } else 
                      {
                        const submissionPage = res.redirects[0];
                        if (submissionPage) 
                          {
                              if (submissionPage.includes("closedform")) 
                              {
                                console.log(new Date().toTimeString().substr(0, 8) + " :", "\x1b[36m" , "ศ7617 :" , "\x1b[0m" , "\x1b[33m" , "Form Closed","\x1b[0m");
                              }
                              else
                              {
                                console.log(new Date().toTimeString().substr(0, 8) + " :", "\x1b[36m" , "ศ7617 :" , "\x1b[0m" , "\x1b[32m" , "Submitted Successfully","\x1b[0m");
                                  check_succ6 = true;
                              }
                          }
                          else
                          {
                            console.log(new Date().toTimeString().substr(0, 8) + " :", "\x1b[36m" , "ศ7617 :" , "\x1b[0m" , "\x1b[32m" , "Submitted Successfully","\x1b[0m");
                              check_succ6 = true;
                          }
                      }
                      
                  });
      }
      else
      {
          task.stop();
      }
  }



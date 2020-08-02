var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/Emp';

app.route('/appnew').get(function(req, res)

    {
        MongoClient.connect(url, function(err, db) {
           if(err)
                      {
                         throw err;
                      }
          else
                     {
                        console.log('Connnection Established');
                       var1=0;
                       var2=0;
                       var3=0;
                       var query=({gender:"male",NAT:"IND"},{age:1,NAT:1});
                       var cursor = db.collection('Information').find(query);
                       cursor.each(function(item) {
              
                       if (item.age>0 && item.age<30)
                                 {
                                       var1=var1+1;
                                 }
                      else if(item.age>30 && item.age<50)
                               {
                                     var2=var2 + 1;
                                }
                     else
                              { 
                                      var3=var3+1;
                              }

                                 res.write('Male:');
                                 res.write('<table>');
                                 res.write('<tr>');
                                 res.write('<th>Nationality</th>');
                                 res.write('<th>0-30</th>');
                                 res.write('<th>30-50</th>');
                                 res.write('<th>50&Above</th>');
                                 res.write('</tr>');
                                 res.write('<tr>');
                                 res.write("<th>"+ item.NAT + "</th>");
                                 res.write("<th>" + var1+ "</th>");
                                 res.write("<th>" + var2 + "</th>");
                                 res.write("<th>" + var3 + "</th>");
                                res.write('</tr>');
                         
                         });
                        var query=({gender:"female",NAT:"IND"},{age:1,NAT:1});
                        var cursor = db.collection('Information').find(query);
                        cursor.each(function(item) {
              
                                if (item.age>0 && item.age<30)
                                               {
                                                     var1=var1+1;
                                               }
                              else if(item.age>30 && item.age<50)
                                              {
                                                    var2=var2 + 1;
                                              }
                             else
                                             { 
                                                    var3=var3+1;
                                             }
                                      
                                          res.write('Female:');
                                          res.write('<table>');
                                          res.write('<tr>');
                                          res.write('<th>Nationality</th>');
                                          res.write('<th>0-30</th>');
                                          res.write('<th>30-50</th>');
                                          res.write('<th>50&Above</th>');
                                          res.write('</tr>');
                                          res.write('<tr>');
                                          res.write('<tr>');
                                          res.write("<th>"+ item.NAT + "</th>");
                                          res.write("<th>" + var1+ "</th>");
                                          res.write("<th>" + var2 + "</th>");
                                          res.write("<th>" + var3 + "</th>");
                                          res.write('</tr>');
                                 });
                            
                             }
                           });
                                          db.close();
        });
 
var server = app.listen(3000, function() {}); 
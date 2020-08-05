var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/Emp';

app.route('/appnew').get(function(req, res)

    {
        MongoClient.connect(url, function(err, db) {
           if(err)
                      {
                          console.log('Connnection Failed');
                      }
          else
                     {
                                 console.log('Connnection Established');
                                 res.write('Male:');
                                 res.write('<table>');
                                 res.write('<tr>');
                                 res.write('<th>Nationality</th>');
                                 res.write('<th>0-30</th>');
                                 res.write('<th>30-50</th>');
                                 res.write('<th>50&Above</th>');
                                 res.write('</tr>');
                                  res.write('<tr>');
                                 
                                 
                              
                                            var query=( [
                                                                               { $match: { $and: [ { age: { $gt: 0, $lt: 30 } }, { gender: 'male'} ] } },
                                                                               { $group: { _id:$NAT, count: { $sum: 1 } } }
                                                             ] );
                       
                                          var cursor= db.collection('Information').aggregate(query);
                                          cursor.forEach(function(item) { 
                                                                                                    res.write('<th>+ item._id </th>');
                                                                                                    res.write("<th>" + item.count + "</th>");
                                                                                        });
                                      
                                         var query=( [
                                                                                 { $match: { $and: [ { age: { $gt: 30, $lt: 50 } }, { gender: 'male'} ] } },
                                                                                 { $group: { _id:$NAT, count: { $sum: 1 } } }
                                                          ] );
                       
                                        var cursor1= db.collection('Information').aggregate(query);
                                        cursor1.forEach(function(item1) {
                                                                                                     res.write("<th>" + item1.count + "</th>");
                                                                                          });

                                       var query=( [
                                                                               { $match: { $and: [ { age: { $gt: 50 } }, { gender: 'male'}] } },
                                                                               { $group: { _id:$NAT, count: { $sum: 1 } } }
                                                        ] );
                       
                                      var cursor2= db.collection('Information').aggregate(query);
                                      cursor2.forEach(function(item2) {
                                                                                                    res.write("<th>" + item2.count + "</th>");
                                                                                                    res.write('</tr>');
                                                                                                    res.write('</table>');
                                                                                         });

                      
                                          res.write('Female:');
                                          res.write('<table>');
                                          res.write('<tr>');
                                          res.write('<th>Nationality</th>');
                                          res.write('<th>0-30</th>');
                                          res.write('<th>30-50</th>');
                                          res.write('<th>50&Above</th>');
                                          res.write('</tr>');
                                          res.write('<tr>');
                                      

                                      var query=( [
                                                                          { $match: { $and: [ { age: { $gt: 0, $lt: 30 } }, { gender: 'female'} ] } },
                                                                          { $group: { _id: $NAT, count: { $sum: 1 } } }
                                                       ] );
                       
                                     var cursor3= db.collection('Information').aggregate(query);
                                     cursor3.forEach(function(item3) {               
                                                                                                      res.write('<th>+ item3._id </th>');
                                                                                                       res.write("<th>" + item3.count + "</th>");
                                                                                       });
                         
                                    var query=( [
                                                                          { $match: { $and: [ { age: { $gt: 30, $lt: 50 } }, { gender: 'female'}] } },
                                                                          { $group: { _id: $NAT, count: { $sum: 1 } } }
                                                     ] );
                       
                                  var cursor4= db.collection('Information').aggregate(query);
                                  cursor4.forEach(function(item4) {
                                                                                                      res.write("<th>" + item4.count + "</th>");
                                                                                     });

                                 var query=( [
                                                                          { $match: { $and: [ { age: { $gt: 50 } }, { gender: 'male'}] } },
                                                                         { $group: { _id: $NAT, count: { $sum: 1 } } }
                                                 ] );
                       
                               var cursor5= db.collection('Information').aggregate(query);
                                cursor5.forEach(function(item5) {
                                                                                                         res.write("<th>" + item5.count + "</th>");
                                                                                                         res.write('</tr>');
                                                                                                         res.write('</table>');
                                                                                   });
                                 }
                            
                    });
                                          db.close();
        });
 
var server = app.listen(3000);
module.exports = ({ date, fullName, street, postcode, documentName, description }) => {

return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
            .newDocument {
               margin-top: 30px;
               padding-left: 10px;
               padding-right: 10px;
            }
            
            .date {
               margin: 0 10px 20px 0;
               float: right;
            }

            .documentName {
               margin-top: 10px;
               text-align: center;
            }
            
            .personalData p {
               margin-left: 15px;
               margin-bottom: 0px;
               line-height: 1;
            }

            .description {
               margin-left: 30px;
               margin-right: 30px;
            }

            .description p {
               text-indent: 30px;
            }
            
          </style>
       </head>
       <body>
       <div class="App">
         <div class="newDocument">
            <div class="date">
               <p>${date}</p>
            </div>
            <div style="clear:both"></div>
            <div class="personalData">
               <p>${fullName}</p>
               <p>${street}</p>
               <p>${postcode}</p>
            </div>
            <div class="documentName">
               <h2>${documentName}</h2>
            </div>
            <div class="description">
               <p>${description}</p>
            </div>
         </div>
      </div>
       </body>
    </html>
    `;
};
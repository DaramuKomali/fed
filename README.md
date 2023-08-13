<html>
    <head>
        <style>
            body{
                margin-top:150px;
                margin-left:350px;
            }
           
            
            #txt{
              height:55px;
              width:230px;
              font-size:35px
            }
            table{
                background-color: black;
                border-color: black;;
            }
            #cancel{
                background-color:red;
            }
            #equal{
                background-color:rgb(82, 220, 82);
            }
            button{
                font-size: 22px;
                height:38px;
                width:38px;
                padding:25px 25px;

            }
            button:hover{
                background-color: gray;
            }
            #equal:hover{
                background-color:darkgreen;
            }

        </style>
    </head>
    <body>
        <div>
        <table>
            
                <tr><td colspan="4"><input type="text" id="txt"></td></tr>
                <tr>
                <td><button id="cancel" onclick="getButtonText(this)" value="C">C</button></td>
                <td><button id="b1" onclick="getButtonText(this)" value="CE">CE</button></td>
                <td><button id="b1" onclick="getButtonText(this)" value=")">)</button></td>
                <td><button id="b1" onclick="getButtonText(this)" value="(">(</button></td>
            </tr>
             <tr>
                <td><button id="b1" onclick="getButtonText(this)" value="1">1</button></td>
                <td><button id="b1" onclick="getButtonText(this)" value="2">2</button></td>
                <td><button id="b1" onclick="getButtonText(this)" value="3">3</button></td>
                <td><button id="b1" onclick="getButtonText(this)" value="+">+</button></td>
            </tr>
             <tr>
               <td><button id="b1" onclick="getButtonText(this)" value="4">4</button></td>
               <td><button id="b1" onclick="getButtonText(this)" value="5">5</button></td>
               <td><button id="b1" onclick="getButtonText(this)" value="6">6</button></td>       
               <td><button id="b1" onclick="getButtonText(this)" value="-">-</button></td>
        </tr>
            <tr>
            <td><button id="b1" onclick="getButtonText(this)" value="7">7</button></td>
            <td><button id="b1" onclick="getButtonText(this)" value="8">8</button></td>
            <td><button id="b1" onclick="getButtonText(this)" value="9">9</button></td>       
            <td><button id="b1" onclick="getButtonText(this)" value="x">x</button></td>
        </tr>
            <tr>
                <td><button id="b1" onclick="getButtonText(this)" value="0">0</button></td>
                <td><button id="b1" onclick="getButtonText(this)" value=".">.</button></td>
                <td><button id="b1" onclick="getButtonText(this)" value="/">/</button></td>       
                <td><button id="equal" onclick="getButtonText(this)" value="=">=</button></td>
         </tr>
         
           
        </table>
        </div>
        <script>
           function getButtonText(button){
            var text=button.getAttribute("value");
            var str=document.getElementById("txt").value;
            if(text==="CE"){
                str=str.substring(0,str.length-1);
            }
            else if(text==="C"){
                str="";
             }
             else if(text==="="){
                str=eval(str);
             }
             else{
                str=str+text;
             }
              document.getElementById("txt").value=str;
             
           }
        </script>
    </body>
</html>

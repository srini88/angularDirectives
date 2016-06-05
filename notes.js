
your first directive

events, scope and controller

decorator directives 

transclusion...



structureal directives -- modifies structure of dom 

controllers and nesteed directives 

directives and services...

4 different ways to specify directives...

one way is to use attribute..
2nd way brand new custom tag ..<my-directive> </my-directive>

other ways not recommended....


1st way --- implies modifying existing element --
2nd way - implies adding new object to teh page..


userInfoCard directive ...changes to user-info-card in the view...remember..have to use dashes...coz html is not case -sensitive..  dasherization or snakecasing..

also use colons user:info:card 
also underscores user_info_card 

also prefix with  x, or data...


changed to custom element --- 1.2 or before --- no custom directives...

use restrict........1.3 directive can be an element or attribute...

//lets add some bindings...to not only display static shit


//naming our directives ---

in production env --  better to use directives in a separate JS file..
//better to prefix your directive --with ng- or some shit like that...
or prefix with the company name... 

dont use directives like section and all --- it messes up with HTML5 section element...so always prefix..


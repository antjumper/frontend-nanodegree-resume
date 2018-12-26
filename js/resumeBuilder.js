/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var name = "刘红波";
 var role = "iOS";
 var formatedName = HTMLheaderName.replace("%data%",name);
 var formatedRole = HTMLheaderRole.replace("%data%",role);
 $("#header").prepend(formatedRole);
 $("#header").prepend(formatedName);

var currentDate = new Date();
var currentHour = currentDate.getHours();
var greeting = "";

if (currentHour < 12)
{ //	Before noon.  Good morning
	greeting = 'Good Morning';
} 
else if ((currentHour >= 12) && (currentHour < 17)) //	Good afternoon
{
  greeting = 'Good Afternoon';
} 
else if ((hrs >= 17) && (hrs <= 24)) //	Good evening
{
  greeting = 'Good Evening';
}

greeting += " " + currentDate;

document.getElementById('holder').innerHTML = greeting;

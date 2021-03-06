// Bio section including name, role, contact information and welcome message

var bio = {
	"name" : "Edina Orban",
	"role" : "Web Designer, Programmer and Illustrator",
	"contacts" : {
		"mobile": "0123 456 7891  (outside the UK call +44 (0)123 456 7891)",
		"email": "mynick@gmail.com",
		"github": "amarillia",
		"location": "City, Country"
		},
	"welcomeMessage": "<p>I'm open for possibilities.</p><p>I'm open for choices.</p><p>I always welcome new ideas.</p><p>I'm always eager to learn.</p><p>I'm never going to close my mind from learning.</p> - Cesar Millan",
	"skills": ["HTML ", "CSS ", "JavaScript ", "Bootstrap", "Responsive Design"],
	"biopic": ["images/placeholder.png"]
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	var formattedwelcomeMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
	

	$("#header").prepend(formattedName, formattedRole);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedgithub);
	$("#topContacts").append(formattedLocation);
	$("#header").append(formattedwelcomeMessage);
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedLocation);

	var formattedbioPic = HTMLbioPic.replace("%data%",bio.biopic);
	$("#header").prepend(formattedbioPic);


	if (bio.skills.length > 0 )
	{
		$("#skills").append(HTMLskillsStart);

		for (var skill in bio.skills)
			{
				var formattedSkill = HTMLskills.replace("%data%" , bio.skills[skill]);
				$("#skills").append(formattedSkill);
			}
	}
}

bio.display()

// Work Experience section - figure it out why it's not working

var work = {
	"jobs": [{
		"dates": "Month Year - ",
		"employer": "Company",
		"title": "Job title",
		"description": "Nice description of position",
		"location": "City, Country",
		"url":"https://www.google.com/"
		}]
};


//Function to display our Work Object.

work.display = function(){
	for (var job in work.jobs){
	//create new div for work experience

		$("#workExperience").append(HTMLworkStart);
	    //concat employer and title

	    var formattedEmployer = HTMLworkEmployer.replace("#", work.jobs[job].url).replace("%data%", work.jobs[job].employer);
	    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	    var formattedEmployerTitle = formattedEmployer + formattedTitle;    
	    $(".work-entry:last").append(formattedEmployerTitle);

	    //format employment dates
	    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	    $(".work-entry:last").prepend(formattedDates);

	    //format job description
	    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	    $(".work-entry:last").append(formattedDescription);
    
	}
};
work.display()


//Projects section - needs to polish the images


var projects = {
	"projectWork": [
		{
		"title": "CV",
		"description": "This is my interactive CV what I have created as a Udacity project.",
		"dates" : "2016",
		"images" : ["images/cv_small.jpg"],
		"url" : "http://n-media.net/wp-content/uploads/2013/05/Web-under-construction.jpeg"
		},
		{
		"title": "Game",
		"description": "This is my game what I have created as a Udacity project.",
		"dates" : "2016",
		"images" : ["images/game_small.jpg"],
		"url" : "http://n-media.net/wp-content/uploads/2013/05/Web-under-construction.jpeg"
		}
   	]
};

projects.display = function(){
	for(var project in projects.projectWork){
		$("#projects").append(HTMLprojectStart);

			var formattedprojectTitle = HTMLprojectTitle.replace("#", projects.projectWork[project].url).replace("%data%", projects.projectWork[project].title);
			$(".project-entry:last").append(formattedprojectTitle);

			var formattedprojectDescr = HTMLprojectDescription.replace("%data%", projects.projectWork[project].description);
			$(".project-entry:last").append(formattedprojectDescr);

			var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projectWork[project].dates);
			$(".project-entry:last").append(formattedprojectDates);

			if (projects.projectWork[project].images.length > 0){
			for (var images_object in projects.projectWork[project].images){

				var formattedImage = HTMLprojectImage.replace("%data%", projects.projectWork[project].images[images_object]);
				$(".project-entry:last").append(formattedImage);
				
			}
		}
	}
};	

projects.display()



//Education section


var education = {
	"schools": [
		{
		"name" : "IDI - Interactive Design Institute",
		"dates" : "2018-2022",
		"degree" : "BsC",
		"major" : "Graphic Design",
		"location" : "Edinburgh, Scotland",
		"url" : "https://idesigni.co.uk/"
		},
	{
		"name" : "Open University",
		"dates" : "2012-2022",
		"degree" : "BsC",
		"major" : "Computer Science",
		"location" : "Milton Keynes, United Kingdom",
		"url" : "http://www.open.ac.uk/"
		}
	],
	"onlineCourses" : [
	{
		"date" : "2015 - 2016",
		"title" : "Front End NanoDegree",
		"school" : "Udacity",
		"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}
	]
};


education.display = function(){
	for (school in education.schools){
		//create new div for schools
		$("#education").append(HTMLschoolStart);
		//concat school and title
		var formattedSchoolName = HTMLschoolName.replace("#", education.schools[school].url).replace("%data%", education.schools[school].name);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);
		
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

		var formattedSchoolTitle = formattedSchoolName + formattedSchoolDegree;
		$(".education-entry:last").append(formattedSchoolTitle);
		
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedSchoolMajor);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation)
	}

	for (var classes in education.onlineCourses) 
	{
		var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[classes].date);
		var formattedOnlineSchool = HTMLonlineSchool.replace("#", education.onlineCourses[classes].url).replace("%data%", education.onlineCourses[classes].school);				
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[classes].title);

		$(".education-entry:last").append(HTMLonlineClasses);
		$(".education-entry:last").append(formattedOnlineDate, formattedOnlineSchool, formattedOnlineTitle);
	}	
};

education.display()


var charEscape = function(_html){
	var newHTML = _html;

	newHTML = _html.replace(/</g, "&lt;");
	newHTML = newHTML.replace(/>/g, "&gt;");

	return newHTML;
};

$("#mapDiv").append(googleMap);


//Internationalize button

function inName(name) {
	var name = ($("#name").text()).trim().split(' ');
	//console.log(name);
	name[1] = name[1].toUpperCase();
	//console.log(name[1]);
	name[0] = name[0].slice(0,1).toUpperCase() +
	name[0].slice(1).toLowerCase();
	//console.log(name[0]);
	
	return name[0] + " " + name[1];
}

$('#header').prepend(internationalizeButton);


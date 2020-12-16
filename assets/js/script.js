$(document).ready(function () {

     // event listener for hamburger drop down menu
    $(".navbar-burger").each(function () {
        $(this).on("click", function () {
            // targets data-target attribute which is equal to regular nav bar menu's ID
            var targetAttribute = $(this).attr("data-target");
            var $navbarMenuID = $("#" + targetAttribute);

            // toggles active class between regular navbar menu and hamburger menu
            $(this).toggleClass("is-active");
            $navbarMenuID.toggleClass("is-active");
        });
    });

    // event listener when user clicks on project card - displays info
    $(document).on("click", ".overlay", function() {
        $(".overlay").css("opacity", "0");
        $(this).css("opacity", ".95");
    });

    // event listener when user hovers over project card - displays info
    $(document).on("mouseover", ".overlay", function () {
        $(".overlay").css("opacity", "0");
        $(this).css("opacity", ".95");
    });

    // event listener when mouse leaves project card - hides info
    $(document).on("mouseleave", ".overlay", function () {
        $(".overlay").css("opacity", "0");
    });

     // event listener for contact
    $(".contact-link").on("click", function (event) {
        event.preventDefault();
        $(".contact-modal").addClass("is-active");
    })

    // event listener closing contact modal
    $(".contact-modal-close").on("click", function (event) {
        event.preventDefault();
        $(".contact-modal").removeClass("is-active");
    });

    // function constructor Project Card
    function ProjectCard(title, about, imgURL, siteURL, repoURL) {
        this.title = title;
        this.about = about;
        this.imgURL = imgURL;
        this.siteURL = siteURL;
        this.repoURL = repoURL;
    };

    // new Project Card instances
    const weatherCard = new ProjectCard(
        "Weather Dashboard",
        "View current and future weather conditions for any city. Past viewed cities are saved to search history for easier viewing in the future.",
        "assets/images/weatherdashboard.jpg",
        "https://fbabauta.github.io/Weather-Dashboard/",
        "https://github.com/fbabauta/Weather-Dashboard"
    );

    const plannerCard = new ProjectCard(
        "Work Day Planner",
        "A simple calendar app for scheduling your work day. Color coded time blocks update depending on what time of day it is, allowing the user to see where they are in their day at a glance.",
        "assets/images/dayplanner.png",
        "https://fbabauta.github.io/Day-Planner/",
        "https://github.com/fbabauta/Day-Planner"
    );

    const quizCard = new ProjectCard(
        "Code Quiz",
        "A quiz built using JavaScript, to test your coding knowledge. Race against the clock to answer all the questions correctly. Save your high scores to track your improvement.",
        "assets/images/codequiz.jpg",
        "https://fbabauta.github.io/Code-Quiz-Challenge/",
        "https://github.com/fbabauta/Code-Quiz-Challenge"
    );

     const profileGenCard = new ProjectCard(
        "Team Profile Generator",
        "A command-line-interface application, built with Node.js, that allows the user to easily generate a team profile webpage, featuring summaries of their team members.",
        "assets/images/myteam.png",
        "https://github.com/fbabauta/Team-Profile-Generator",
        "https://github.com/fbabauta/Team-Profile-Generator"
    );

     const passwordGenCard = new ProjectCard(
        "Password Generator",
        "Random password generator created by user based on their criteria",
        "assets/images/passwordgen.png",
        "https://fbabauta.github.io/Password-Generator/",
        "https://github.com/fbabauta/Password-Generator"
    );



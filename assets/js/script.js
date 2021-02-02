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
    $(document).on("click", ".overlay", function () {
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
    });

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
    }

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
        "Random password generator created by user based on their criteria.",
        "assets/images/passwordgen.png",
        "https://fbabauta.github.io/Password-Generator/",
        "https://github.com/fbabauta/Password-Generator"
    );

    const burgerCard = new ProjectCard(
        "Eat-Da-Burger",
        "A CRUD application to keep track of burger consumption.",
        "assets/images/burgerdemo.jpg",
        "https://stark-citadel-52180.herokuapp.com/",
        "https://github.com/fbabauta/Eat-Da-Burger"
    );

    const workoutbuddiesCard = new ProjectCard(
        "Workout-Buddies",
        "Group Project: A full-stack web application that allows fitness enthusiast to connect with other buddies to workout together.",
        "assets/images/workoutbuddies.png",
        "https://workout-buddies.herokuapp.com/",
        "https://github.com/Tuzosdaniel12/Workout-Buddies"
    );

    const notetakerCard = new ProjectCard(
        "Note-Taker",
        "A simple note taking application that makes creating, editing, and deleting notes as easy as 1-2-3.",
        "assets/images/notetaker.jpg",
        "https://serene-ocean-62587.herokuapp.com/",
        "https://github.com/fbabauta/Note-Taker"
    );

    let projectCardsArr = [weatherCard, plannerCard, quizCard, profileGenCard, passwordGenCard, burgerCard, workoutbuddiesCard, notetakerCard];
    
     // function to render project cards to screen
    function renderCard(card) {
        let newCard =
            `<div class="column is-half">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-3by2 pic-container">
                        <img src=${card.imgURL} alt="Placeholder image" class="portfolio-img">
                        <div class="overlay">
                            <div class="card overlay-card">
                                <div class="card-content project-card-content has-text-centered">
                                    <p class="title has-text-white project-title">
                                        ${card.title}
                                    </p>
                                    <p class="subtitle is-6 has-text-white project-description">
                                        ${card.about}
                                    </p>
                                </div>
                                footer class="card-footer">
                                    <p class="card-footer-item">
                                        <a href=${card.siteURL} target="_blank" class="card-links">View Website</a>
                                    </p>
                                    <p class="card-footer-item">
                                        <a href=${card.repoURL} target="_blank" class="card-links">GitHub Repo</a>
                                    </p>
                                </footer>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </div>`;

         $("#cards-container").append(newCard);
    }

    function init() {
        // render project cards
        projectCardsArr.forEach(renderCard);
    }
    
    init();

});
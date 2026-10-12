document.addEventListener("DOMContentLoaded", () => {


    /* ==================================================
       PAGE LOADER
    ================================================== */

    const pageLoader =
        document.querySelector("#pageLoader");


    window.addEventListener("load", () => {

        setTimeout(() => {

            pageLoader?.classList.add("loaded");

        }, 1100);

    });



    /* ==================================================
       HERO TYPE EFFECT
    ================================================== */

    const heroType =
        document.querySelector("#hero-type");


    const heroIntro =
        document.querySelector(".hero-intro");


    if (heroType) {

        const text =
            "I work with Python, data analysis and machine learning to turn data into useful insights and practical solutions.";


        let index = 0;


        const typeText = () => {

            if (index < text.length) {

                heroType.textContent +=
                    text.charAt(index);

                index++;

                setTimeout(
                    typeText,
                    25
                );

            } else {

                setTimeout(() => {

                    heroIntro?.classList.add(
                        "typing-complete"
                    );

                }, 400);

            }

        };


        setTimeout(
            typeText,
            2100
        );

    }



    /* ==================================================
       NAVIGATION
    ================================================== */

    const nav =
        document.querySelector("#mainNav");


    const mobileMenuButton =
        document.querySelector(
            "#mobileMenuButton"
        );


    const navLinks =
        document.querySelectorAll(
            ".nav-links a"
        );


    const updateNav =
        () => {

            if (!nav) return;


            if (window.scrollY > 60) {

                nav.classList.add(
                    "scrolled"
                );

            } else {

                nav.classList.remove(
                    "scrolled"
                );

            }

        };


    window.addEventListener(
        "scroll",
        updateNav,
        {
            passive: true
        }
    );


    updateNav();



    /* MOBILE MENU */

    if (
        mobileMenuButton &&
        nav
    ) {

        mobileMenuButton.addEventListener(
            "click",
            () => {

                const isOpen =
                    nav.classList.toggle(
                        "menu-open"
                    );


                mobileMenuButton.setAttribute(
                    "aria-expanded",
                    isOpen
                        ? "true"
                        : "false"
                );


                document.body.classList.toggle(
                    "menu-open",
                    isOpen
                );

            }
        );

    }


    navLinks.forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                nav?.classList.remove(
                    "menu-open"
                );

                mobileMenuButton?.setAttribute(
                    "aria-expanded",
                    "false"
                );

                document.body.classList.remove(
                    "menu-open"
                );

            }
        );

    });


    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape"
            ) {

                nav?.classList.remove(
                    "menu-open"
                );

                mobileMenuButton?.setAttribute(
                    "aria-expanded",
                    "false"
                );

                document.body.classList.remove(
                    "menu-open"
                );

            }

        }
    );



    /* ==================================================
       SCROLL REVEAL
    ================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal-on-scroll, .reveal-card"
        );


    const revealObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12,
                rootMargin:
                    "0px 0px -50px 0px"
            }
        );


    revealElements.forEach(
        (element) => {

            revealObserver.observe(
                element
            );

        }
    );



    /* ==================================================
       STAGGER PROJECT CARDS
    ================================================== */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    projectCards.forEach(
        (card, index) => {

            card.style.transitionDelay =
                `${index * 80}ms`;

        }
    );



    /* ==================================================
       SKILL DATA
    ================================================== */

    const skillsData = [
        {
            title: "Programming & Querying",
            description: "Writing Python code and using SQL to query, organize and work with data.",
            stack: ["Python", "SQL"],
            focus: "Programming & Data Queries",
            icon: "⌘"
        },
        {
            title: "Data Analysis",
            description: "Preparing and exploring datasets, checking data quality, and applying statistical methods to identify patterns and useful insights.",
            stack: ["Data Cleaning", "Data Validation", "Reconciliation", "Preprocessing", "EDA", "Statistical Analysis", "Descriptive Statistics", "Probability", "Hypothesis Testing", "Chi-Square Test"],
            focus: "Reliable, Insightful Data",
            icon: "◫"
        },
        {
            title: "Machine Learning",
            description: "Building and evaluating supervised and unsupervised machine learning workflows, from preprocessing and feature engineering to model evaluation.",
            stack: ["Supervised Learning", "Unsupervised Learning", "Classification", "Regression", "Feature Engineering", "Feature Scaling", "Encoding", "Model Evaluation", "Scikit-learn"],
            focus: "Predictive Modeling",
            icon: "✧"
        },
        {
            title: "Python Libraries",
            description: "Using Python's data ecosystem to manipulate datasets, analyze patterns, visualize results and build lightweight data applications.",
            stack: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Streamlit"],
            focus: "Python Data Workflow",
            icon: "⌘"
        },
        {
            title: "Data Visualization & Reporting",
            description: "Communicating findings through clear charts, reports and dashboards that help people understand data and make decisions.",
            stack: ["Power BI", "Dashboards", "Matplotlib", "Seaborn"],
            focus: "Clear Data Communication",
            icon: "▥"
        },
        {
            title: "Microsoft Excel",
            description: "Organizing and analyzing data with spreadsheet formulas, lookup functions, pivot tables and charts.",
            stack: ["Pivot Tables", "Lookup Functions", "Charts", "Formulas"],
            focus: "Spreadsheet Analysis",
            icon: "▦"
        },
        {
            title: "Tools & Environment",
            description: "Using common development and notebook tools to write code, explore data, manage versions and collaborate on projects.",
            stack: ["Jupyter Notebook", "VS Code", "Google Colab", "Git", "GitHub"],
            focus: "Development Workflow",
            icon: "↗"
        }
    ];


    /* ==================================================
       SKILLS ELEMENTS
    ================================================== */

    const skillsSection =
        document.querySelector(
            "#skills"
        );


    const skillItems =
        document.querySelectorAll(
            ".skill-item"
        );


    const skillCurrent =
        document.querySelector(
            "#skillCurrent"
        );


    const skillProgressBar =
        document.querySelector(
            "#skillProgressBar"
        );


    const skillDetailNumber =
        document.querySelector(
            "#skillDetailNumber"
        );


    const skillDetailContent =
        document.querySelector(
            "#skillDetailContent"
        );


    let activeSkill = 0;


    function renderSkill(index) {

        const skill =
            skillsData[index];


        if (!skill) return;


        if (
            skillDetailContent &&
            index !== activeSkill
        ) {

            skillDetailContent.classList.add(
                "changing"
            );


            setTimeout(() => {

                updateSkillContent(
                    skill,
                    index
                );


                skillDetailContent.classList.remove(
                    "changing"
                );

            }, 220);

        } else {

            updateSkillContent(
                skill,
                index
            );

        }


        activeSkill = index;

    }


    function updateSkillContent(
        skill,
        index
    ) {

        if (
            !skillDetailContent
        ) return;


        const stackHTML =
            skill.stack
                .map(
                    item =>
                        `<span>${item}</span>`
                )
                .join("");


        skillDetailContent.innerHTML = `

            <span class="detail-icon">
                ${skill.icon}
            </span>

            <h3>
                ${skill.title}
            </h3>

            <p>
                ${skill.description}
            </p>

            <div class="detail-stack">
                ${stackHTML}
            </div>

            <div class="detail-footer">

                <span>
                    FOCUS
                </span>

                <strong>
                    ${skill.focus}
                </strong>

            </div>
        `;


        if (skillCurrent) {

            skillCurrent.textContent =
                String(index + 1)
                    .padStart(2, "0");

        }


        if (skillDetailNumber) {

            skillDetailNumber.textContent =
                `${String(index + 1).padStart(2, "0")} / ${String(skillsData.length).padStart(2, "0")}`;

        }


        if (skillProgressBar) {

            skillProgressBar.style.width =
                `${((index + 1) / skillsData.length) * 100}%`;

        }


        skillItems.forEach(
            (item, itemIndex) => {

                item.classList.toggle(
                    "active",
                    itemIndex === index
                );
                item.setAttribute("aria-pressed", itemIndex === index ? "true" : "false");

            }
        );

    }



    /* ==================================================
       DESKTOP SCROLL-DRIVEN SKILLS
    ================================================== */

    function updateSkillsFromScroll() {

        if (
            !skillsSection ||
            window.innerWidth <= 700
        ) {
            return;
        }


        const rect =
            skillsSection.getBoundingClientRect();


        const totalScrollable =
            skillsSection.offsetHeight -
            window.innerHeight;


        if (
            totalScrollable <= 0
        ) {
            return;
        }


        const progress =
            Math.max(
                0,
                Math.min(
                    1,
                    -rect.top /
                    totalScrollable
                )
            );


        const index =
            Math.min(
                skillsData.length - 1,
                Math.floor(
                    progress *
                    skillsData.length
                )
            );


        if (index !== activeSkill) {

            renderSkill(index);

        }

    }


    let ticking = false;


    window.addEventListener(
        "scroll",
        () => {

            if (!ticking) {

                window.requestAnimationFrame(
                    () => {

                        updateSkillsFromScroll();

                        ticking = false;

                    }
                );

                ticking = true;

            }

        },
        {
            passive: true
        }
    );


    /* Initial skill */

    renderSkill(0);



    /* ==================================================
       MOBILE SKILL CLICK
    ================================================== */

    skillItems.forEach(
        (item) => {

            item.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            item.dataset.skill
                        );


                    if (
                        Number.isNaN(index)
                    ) {
                        return;
                    }


                    renderSkill(index);

                }
            );

        }
    );



    /* ==================================================
       PROJECT PARALLAX
    ================================================== */

    const projectVisuals =
        document.querySelectorAll(
            ".project-visual"
        );


    window.addEventListener(
        "mousemove",
        (event) => {

            if (
                window.innerWidth <= 900
            ) {
                return;
            }


            const x =
                (event.clientX /
                    window.innerWidth -
                    0.5);


            const y =
                (event.clientY /
                    window.innerHeight -
                    0.5);


            projectVisuals.forEach(
                (visual, index) => {

                    const strength =
                        2 +
                        (index % 3);


                    visual.style.setProperty(
                        "--mouse-x",
                        `${x * strength}px`
                    );


                    visual.style.setProperty(
                        "--mouse-y",
                        `${y * strength}px`
                    );

                }
            );

        },
        {
            passive: true
        }
    );



    /* ==================================================
       FORM BUTTON MICRO INTERACTION
    ================================================== */

    const form =
        document.querySelector(
            ".contact-form"
        );


    if (form) {

        form.addEventListener(
            "submit",
            () => {

                const button =
                    form.querySelector(
                        ".form-submit span:first-child"
                    );


                if (button) {

                    button.textContent =
                        "Sending...";

                }

            }
        );

    }



    /* ==================================================
       SMOOTH ANCHOR OFFSET
    ================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(
            (link) => {

                link.addEventListener(
                    "click",
                    (event) => {

                        const targetId =
                            link.getAttribute(
                                "href"
                            );


                        if (
                            !targetId ||
                            targetId === "#"
                        ) {
                            return;
                        }


                        const target =
                            document.querySelector(
                                targetId
                            );


                        if (!target) {
                            return;
                        }


                        event.preventDefault();


                        const navHeight =
                            nav
                                ? nav.offsetHeight + 30
                                : 30;


                        const targetPosition =
                            target.getBoundingClientRect()
                                .top +
                            window.scrollY -
                            navHeight;


                        window.scrollTo({

                            top:
                                targetPosition,

                            behavior:
                                "smooth"

                        });

                    }
                );

            }
        );



    /* ==================================================
       ESCAPE FORM PLACEHOLDER
    ================================================== */

    const textarea =
        document.querySelector(
            ".contact-form textarea"
        );


    if (textarea) {

        textarea.addEventListener(
            "focus",
            () => {

                textarea.style.minHeight =
                    "150px";

            }
        );


        textarea.addEventListener(
            "blur",
            () => {

                if (!textarea.value) {

                    textarea.style.minHeight =
                        "125px";

                }

            }
        );

    }

});
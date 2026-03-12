(function () {
  const { createElement: h, Fragment, useState } = React;

  function NavBar({ sections, active, onSelect }) {
    return h(
      "nav",
      { className: "navbar" },
      h(
        "ul",
        { className: "nav-links" },
        sections.map((section) =>
          h(
            "li",
            { key: section.id },
            h(
              "button",
              {
                className:
                  "nav-link" + (section.id === active ? " active" : ""),
                onClick: () => {
                  onSelect(section.id);
                  const el = document.getElementById(section.id);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }
              },
              section.label
            )
          )
        )
      )
    );
  }

  function App() {
    const [activeSection, setActiveSection] = useState("about");

    const sections = [
      { id: "about", label: "About" },
      { id: "projects", label: "Projects" },
      { id: "experiences", label: "Experiences" },
      { id: "contact", label: "Contact" }
    ];

    const projects = window.projectsData || [];
    const experiences = window.experiencesData || [];
    const contact = window.contactData || {};

    return h(
      Fragment,
      null,
      h(
        "header",
        null,
        h("h1", null, "Saurya Bhatt"),
        h(
          "p",
          null,
          "Data Science Student \u2022 Analytics \u2022 Problem Solver"
        )
      ),
      h(NavBar, {
        sections,
        active: activeSection,
        onSelect: setActiveSection
      }),
      h(
        "main",
        null,
        h(
          "section",
          { id: "about" },
          h("h2", null, "About"),
          h(
            "p",
            null,
            "I'm a data science student at the University of Texas at Dallas with an interest in analytics, finance, and understanding real-world systems through data. I enjoy exploring patterns, building projects, and learning new tools that turn raw information into insight."
          )
        ),
        h(
          "section",
          { id: "projects" },
          h("h2", null, "Projects"),
          projects.map((project, index) =>
            h(
              "div",
              { key: index, className: "project" },
              h("h3", null, project.title),
              h("p", null, project.description)
            )
          )
        ),
        h(
          "section",
          { id: "experiences" },
          h("h2", null, "Experiences"),
          experiences.map((exp, index) =>
            h(
              "div",
              { key: index, className: "project" },
              h(
                "h3",
                null,
                exp.role,
                " \u2022 ",
                exp.organization
              ),
              h(
                "p",
                null,
                exp.timeframe
                  ? h("strong", null, exp.timeframe, " \u2014 ")
                  : null,
                exp.description
              )
            )
          )
        ),
        h(
          "section",
          { id: "contact" },
          h("h2", null, "Contact"),
          contact.email &&
            h(
              "p",
              null,
              "Email: ",
              h(
                "a",
                { href: "mailto:" + contact.email },
                contact.email
              )
            ),
          contact.location && h("p", null, "Location: ", contact.location),
          Array.isArray(contact.links) &&
            contact.links.length > 0 &&
            h(
              "p",
              null,
              "Links: ",
              contact.links.map((link, index) =>
                h(
                  Fragment,
                  { key: index },
                  h(
                    "a",
                    {
                      href: link.url,
                      target: "_blank",
                      rel: "noopener noreferrer"
                    },
                    link.label
                  ),
                  index < contact.links.length - 1 ? " \u2022 " : ""
                )
              )
            )
        )
      ),
      h(
        "footer",
        null,
        h("p", null, "\u00a9 2026 Saurya Bhatt")
      )
    );
  }

  const container = document.getElementById("root");
  if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(h(App));
  }
})();


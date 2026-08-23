export default function AboutStory() {
  const chapters = [
    {
      number: "01",
      title: "The curiosity started early",
      text:
        "I started exploring computers in school — from typing tutors and Lotus to FoxPro, C and C++. By Class 6, programming had become something I genuinely enjoyed.",
    },
    {
      number: "02",
      title: "Then I discovered the web",
      text:
        "In Class 12, I built my first personal website and hosted it on Yahoo GeoCities, later moving to saurabhjaiswal.notlong.com. That was the beginning of a web journey that never really stopped.",
    },
    {
      number: "03",
      title: "Engineering made it serious",
      text:
        "Computer Science Engineering took me deeper into C++, Java, Oracle, .NET and enterprise Java — turning early curiosity into serious software engineering.",
    },
    {
      number: "04",
      title: "That little website opened a big door",
      text:
        "My personal website helped me stand out during my JRF interview at DRDO. Research introduced me to modelling, simulation and Python, followed by an M.Tech. in Modelling and Simulation.",
    },
    {
      number: "05",
      title: "saurabhjaiswal.com became my home",
      text:
        "As I entered professional life, I bought saurabhjaiswal.com and my own hosting. The site has evolved with me ever since — through new technologies, roles and ideas.",
    },
    {
      number: "06",
      title: "From research to enterprise",
      text:
        "C++, simulation, OpenFOAM and Python led into enterprise engineering, financial technology, cloud and architecture — each stage expanding the scale of problems I could solve.",
    },
    {
      number: "07",
      title: "And eventually, AIMates",
      text:
        "Today those threads converge in AI and AIMates — bringing together what I've learned about research, engineering, architecture and building technology for real work.",
    },
  ];

  return (
    <section className="about-story-section">
      <div className="site-shell">
        <div className="about-story-heading">
          <div className="about-eyebrow">
            HOW IT STARTED
          </div>

          <h2 className="about-story-title">
            Before AI,
            <br />
            there was always{" "}
            <span>curiosity.</span>
          </h2>

          <p className="about-story-intro">
            The tools changed. The platforms changed.
            The scale changed. But the habit of learning,
            experimenting and building never really did.
          </p>
        </div>

        <div className="about-story-list">
          {chapters.map((chapter) => (
            <article
              key={chapter.number}
              className="about-story-item"
            >
              <div className="about-story-number">
                {chapter.number}
              </div>

              <div className="about-story-copy">
                <h3>{chapter.title}</h3>
                <p>{chapter.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
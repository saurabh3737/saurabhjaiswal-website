import {
  Brain,
  CheckCircle2,
  GitBranch,
  Hammer,
  Workflow,
} from "lucide-react";

const lessons = [
  {
    number: "01",
    icon: Brain,
    title: "Think with AI",
    text:
      "Use AI as a thinking partner to explore ideas, structure problems, challenge assumptions and improve the quality of your reasoning.",
  },
  {
    number: "02",
    icon: GitBranch,
    title: "Decide with AI",
    text:
      "Learn where AI can support decisions, how to compare alternatives and why human judgement remains essential when context and consequences matter.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Build with AI",
    text:
      "Move from conversation to creation — using AI to help design, write, analyse, automate, prototype and produce useful work.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Verify the Output",
    text:
      "Recognise that fluent answers are not necessarily correct answers. Develop habits for checking evidence, assumptions, accuracy and quality.",
  },
  {
    number: "05",
    icon: Workflow,
    title: "Integrate AI into Real Work",
    text:
      "Go beyond isolated prompts and start thinking in workflows: where AI fits, where people fit and how the pieces work together.",
  },
];

export default function BookLearn() {
  return (
    <section
      id="inside-the-book"
      className="book-learn-section"
    >
      <div className="site-shell">
        <div className="book-learn-heading">
          <div className="section-eyebrow">
            INSIDE THE BOOK
          </div>

          <h2 className="section-title">
            From using AI to{" "}
            <span className="section-accent">
              working with it.
            </span>
          </h2>

          <p className="section-intro">
            The book is built around a practical
            shift: AI becomes much more useful when
            you stop treating it as a question-and-answer
            machine and start thinking about how it
            participates in real work.
          </p>
        </div>

        <div className="book-learn-list">
          {lessons.map(
            ({
              number,
              icon: Icon,
              title,
              text,
            }) => (
              <article
                key={number}
                className="book-learn-item"
              >
                <div className="book-learn-number">
                  {number}
                </div>

                <div className="surface-card-icon">
                  <Icon size={22} />
                </div>

                <div className="book-learn-copy">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

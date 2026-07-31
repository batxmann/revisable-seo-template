import './GradedQuestionCard.css'

// The page's signature element: a real QBank-style question rendered as a
// graded index card, with the correct answer checked in red ink. Purely
// prop-driven from hero.sampleQuestion, so it varies per programmatic page
// (or is simply omitted — the hero lays out fine without it).
function GradedQuestionCard({ examLabel, prompt, options = [], correctIndex, stat }) {
  return (
    <div className="graded-card">
      {stat && (
        <div className="graded-card__stamp">
          <span className="graded-card__stamp-value">{stat.value}</span>
          <span className="graded-card__stamp-label">{stat.label}</span>
        </div>
      )}

      <div className="graded-card__tag">{examLabel}</div>
      <p className="graded-card__prompt">{prompt}</p>

      <ol className="graded-card__options">
        {options.map((option, index) => {
          const isCorrect = index === correctIndex
          return (
            <li
              key={option}
              className={`graded-card__option ${isCorrect ? 'graded-card__option--correct' : ''}`}
            >
              <span className="graded-card__letter">{String.fromCharCode(65 + index)}</span>
              <span className="graded-card__option-text">{option}</span>
              {isCorrect && (
                <svg
                  className="graded-card__check"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 12.5L9.5 18L20 6"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default GradedQuestionCard

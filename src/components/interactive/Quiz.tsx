import { useState } from 'react'

import { quizMap } from '@/content'
import { useProgress } from '@/hooks/useProgress'
import type { Quiz, QuizQuestion } from '@/types/content'

export function LessonQuiz({ quizId, mode }: { quizId: string; mode: 'check' | 'quiz' }) {
  const quiz = quizMap[quizId]
  if (!quiz) return null
  if (mode === 'check') return <KnowledgeCheck quiz={quiz} />
  return <InteractiveQuiz quiz={quiz} />
}

function KnowledgeCheck({ quiz }: { quiz: Quiz }) {
  const question = quiz.questions[0]
  const [choiceId, setChoiceId] = useState<string>()
  if (!question) return null
  const selected = question.choices.find((choice) => choice.id === choiceId)
  const correct = choiceId === question.correctChoiceId

  return (
    <section aria-labelledby={`${quiz.id}-title`} className="space-y-4 rounded-2xl border border-border bg-card p-5">
      <div>
        <p className="text-xs font-semibold tracking-wide text-accent uppercase">Knowledge check</p>
        <h3 id={`${quiz.id}-title`} className="font-serif text-2xl">
          {quiz.title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{quiz.description}</p>
      </div>
      <ChoiceList question={question} name={quiz.id} value={choiceId} onChange={setChoiceId} />
      {selected ? (
        <p className="rounded-xl bg-muted px-4 py-3 text-sm leading-6" role="status">
          <span className="font-semibold">{correct ? 'Correct. ' : 'Not quite. '}</span>
          {question.explanation}
        </p>
      ) : null}
    </section>
  )
}

function InteractiveQuiz({ quiz }: { quiz: Quiz }) {
  const { recordQuiz, progress } = useProgress()
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const saved = progress.quizResults[quiz.id]
  const allAnswered = quiz.questions.every((question) => answers[question.id])
  const correctCount = quiz.questions.filter((question) => answers[question.id] === question.correctChoiceId).length

  function submit() {
    setSubmitted(true)
    recordQuiz(quiz.id, correctCount, quiz.questions.length)
  }

  function retry() {
    setAnswers({})
    setSubmitted(false)
  }

  return (
    <section aria-labelledby={`${quiz.id}-title`} className="space-y-5 rounded-2xl border border-border bg-card p-5">
      <div>
        <p className="text-xs font-semibold tracking-wide text-accent uppercase">Quiz</p>
        <h3 id={`${quiz.id}-title`} className="font-serif text-2xl">
          {quiz.title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{quiz.description}</p>
        {saved ? (
          <p className="mt-2 text-sm">
            Latest saved score: {saved.correct} of {saved.total}.
          </p>
        ) : null}
      </div>
      {quiz.questions.map((question, index) => {
        const chosen = answers[question.id]
        const isCorrect = chosen === question.correctChoiceId
        return (
          <fieldset key={question.id} className="space-y-3">
            <legend className="font-semibold">
              {index + 1}. {question.prompt}
            </legend>
            <ChoiceList
              question={question}
              name={`${quiz.id}-${question.id}`}
              value={chosen}
              onChange={(choiceId) => setAnswers((current) => ({ ...current, [question.id]: choiceId }))}
              disabled={submitted}
            />
            {submitted ? (
              <p className="rounded-xl bg-muted px-4 py-3 text-sm leading-6" role="status">
                <span className="font-semibold">{isCorrect ? 'Correct. ' : 'Not quite. '}</span>
                {question.explanation}
              </p>
            ) : null}
          </fieldset>
        )
      })}
      <div className="flex flex-wrap gap-3">
        {!submitted ? (
          <button
            type="button"
            className="h-10 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground disabled:opacity-50"
            disabled={!allAnswered}
            onClick={submit}
          >
            Check answers
          </button>
        ) : (
          <>
            <p className="self-center text-sm font-semibold" role="status">
              {correctCount} of {quiz.questions.length} correct.
            </p>
            <button type="button" className="h-10 rounded-full border border-border px-4 text-sm font-semibold" onClick={retry}>
              Try again
            </button>
          </>
        )}
      </div>
    </section>
  )
}

function ChoiceList({
  question,
  name,
  value,
  onChange,
  disabled = false,
}: {
  question: QuizQuestion
  name: string
  value?: string
  onChange: (choiceId: string) => void
  disabled?: boolean
}) {
  return (
    <div className="space-y-2">
      {question.choices.map((choice) => (
        <label key={choice.id} className="flex cursor-pointer gap-3 rounded-xl border border-border px-3 py-3 text-sm leading-6 has-[:focus-visible]:outline-2">
          <input
            type="radio"
            name={name}
            value={choice.id}
            checked={value === choice.id}
            disabled={disabled}
            onChange={() => onChange(choice.id)}
            className="mt-1"
          />
          <span>{choice.label}</span>
        </label>
      ))}
    </div>
  )
}

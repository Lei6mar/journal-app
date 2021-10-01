import React from 'react'

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div className="journal__entry-picture" style={{
        backgroundSize: 'cover',
        backgroundImage: 'url(data:image/jpeg;base64,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)'
      }}></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">
          A new day
        </p>
        <p className="journal__entry-content">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  )
}

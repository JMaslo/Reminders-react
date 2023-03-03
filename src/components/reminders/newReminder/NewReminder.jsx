import React from 'react'
import "./newReminder.css"

export default function NewReminder() {
  return (
    <div>
        <button className='add-new'>+</button>
        <h1 className='title'>Dnes</h1>
        <ol className='todos'>
          <li>
            <svg>
              <circle cx='13' cy='14' r='11'></circle>
            </svg>
            <p>Úkoly</p>
          </li>
          <li>
            <svg>
              <circle cx='13' cy='14' r='11'></circle>
            </svg>
            <p>Programovat</p>
          </li>
          <li>
            <svg>
              <circle cx='13' cy='14' r='11'></circle>
            </svg>
            <p>Spát</p>
          </li>
          <li>
            <svg>
              <circle cx='13' cy='14' r='11'></circle>
            </svg>
            <p>Jíst</p>
          </li>
        </ol>
    </div>
  )
}

import React from 'react'

export default function Contact() {
  return (
     <>
    <div className='contact_info'>
      <div className='contact_left'>
        <h2 className='text-center text-info fw-bold'>Contact</h2>
        <h4 className='text-center text-white fw-bold'>Feel free to reach out!</h4>
      </div>
      <div className='contact_right'>
        <p className='fs_4'><i class="bi bi-envelope fs-4 text-white px-1"></i> : <span className='px-2'>bajrangilal6198@gmail.com</span></p>
        <p className='fs_4'><i class="bi bi-linkedin fs-4 px-1"></i> : <span className='px-2'>https://www.linkedin.com/in/bajrangi-lal-80a247210/</span></p>
        <p className='fs_4'><i class="bi bi-github fs-4 px-1"></i> : <span className='px-2'>https://github.com/bajrangireactdeveloper</span></p>
      </div>
    </div>
    </>
  )
}

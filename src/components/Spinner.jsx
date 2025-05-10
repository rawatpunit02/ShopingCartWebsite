import React from 'react'

function Spinner() {
  return (
    <div
  className="flex m-auto my-28 w-80 h-80  animate-spin rounded-full border-4 border-solid border-current border-l-orange-500 border-t-lime-300 border-b-blue-800 align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-red-800 "
  role="status">
  <span className=' !absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)] '>Loading...</span>
</div>

  )
}

export default Spinner;
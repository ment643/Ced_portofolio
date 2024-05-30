"use client"

export default function Form() {
  return (
      
<div>
    <form className="flex flex-col  w-full h-full justify-center items-center">
      <label>
        <span>
            Name:
        </span>
        <input required
        type=""
        placeholder="FistName"
        />
     </label>


     <label>
        <span>
            Surname:
        </span>
        <input required
        type=""
        placeholder="Surname"
        />
     </label>

     <label>
        <span>
            Email:
        </span>
        <input required
        type=""
        placeholder="Email"
        />
     </label>
     <button>submit</button>
    </form>
</div>

  )
}

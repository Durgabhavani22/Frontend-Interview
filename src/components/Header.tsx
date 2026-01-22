
export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 border-b bg-white ">
      <div className="flex items-center gap-2 font-bold text-lg">
        <span className="bg-indigo-600 text-white px-2 py-1 rounded">
          CA
        </span>
        Monk
      </div>

<nav className="flex items-center gap-10 text-sm font-medium text-gray-600 dark:text-gray-300">
  <span className="hover:text-indigo-600 cursor-pointer">Tools</span>
  <span className="hover:text-indigo-600 cursor-pointer">Practice</span>
  <span className="hover:text-indigo-600 cursor-pointer">Events</span>
  <span className="hover:text-indigo-600 cursor-pointer">Job Board</span>
  <span className="hover:text-indigo-600 cursor-pointer">Points</span>
</nav>


      <div className="flex items-center gap-4">
       
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">
          Profile
        </button>
      </div>
    </header>
  )
}

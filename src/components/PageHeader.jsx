import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faFolder } from "@fortawesome/free-solid-svg-icons"
function PageHeader() {
  return (
    <div className="p-6 py-2 flex self-start items-center justify-between border-b-2 border-gray-100">
        <div className="flex gap-5 items-center font-medium px-4 py-2 rounded-lg">
            <FontAwesomeIcon icon={faFolder} size="xs" />
            <p className="text-xs">Webtoon List</p>
        </div>
        <div className="flex gap-5 items-center">
            <FontAwesomeIcon icon={faBell} size="xs" />
            <div className="flex items-center gap-3">
                <p className="w-10 h-10 bg-blue-500 flex items-center justify-center text-white font-bold rounded-full">A</p>
                <div>
                    <p className="text-sm font-medium">Admin</p>
                    <p className="text-xs text-gray-400">exaple@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PageHeader
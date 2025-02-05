import { faBars, faCalendarWeek, faChevronLeft, faFileExport, faFileImport, faFolder, faGear, faRightFromBracket, faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
function Sidebar() {
  const [open, setOpen] = useState(true);
  return (
    <div className={`${open ? 'w-70' : 'w-10'} overflow-hidden p-6 border-r-2 border-gray-100`}>
        <div className={`flex items-center ${open ? 'justify-between' : 'justify-center'}`}>
            <p className={!open ? 'hidden' : 'block'}>Admin</p>
            <div className=" p-2 border-2 border-gray-100 rounded-lg flex justify-center items-center">
              <FontAwesomeIcon onClick={() => setOpen(!open)} icon={open ? faChevronLeft : faBars} cursor="pointer" />
            </div>
        </div>
        <div className={`mt-10 ${open ? 'grid' : 'hidden'} gap-3`}>
          <div className="flex gap-5 items-center bg-gray-100 font-medium px-4 py-2 rounded-lg">
            <FontAwesomeIcon icon={faFolder} size="xs" />
            <p className="text-xs">Webtoon List</p>
          </div>
          <div className="flex gap-5 items-center px-4 py-2 rounded-lg text-gray-400">
            <FontAwesomeIcon icon={faUsers} size="xs" />
            <p className="text-xs">Members</p>
          </div>
          <div className="flex gap-5 items-center px-4 py-2 rounded-lg text-gray-400">
            <FontAwesomeIcon icon={faGear} size="xs" />
            <p className="text-xs">Settings</p>
          </div>
        </div>
        <div className={`mt-10 ${open ? 'grid' : 'hidden'} gap-3`}>
          <p className="text-xs font-medium text-gray-400">FEATURE</p>
          <div className="flex gap-5 items-center text-gray-400 px-4 py-2 rounded-lg">
            <FontAwesomeIcon icon={faCalendarWeek} size="xs" />
            <p className="text-xs">Calendar</p>
          </div>
          <div className="flex gap-5 items-center px-4 py-2 rounded-lg text-gray-400">
            <FontAwesomeIcon icon={faFileImport} size="xs" />
            <p className="text-xs">Import Data</p>
          </div>
          <div className="flex gap-5 items-center px-4 py-2 rounded-lg text-gray-400">
            <FontAwesomeIcon icon={faFileExport} size="xs" />
            <p className="text-xs">Export Data</p>
          </div>
        </div>
        <div className={`mt-5 ${open ? 'grid' : 'hidden'}`}>
          <div className="flex gap-5 items-center px-4 py-2 rounded-lg text-red-400 font-bold">
              <FontAwesomeIcon icon={faRightFromBracket} size="xs" />
              <p className="text-xs">Log Out</p>
          </div>
        </div>
    </div>
  )
}

export default Sidebar
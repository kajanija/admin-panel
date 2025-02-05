import { faArrowDownWideShort, faArrowUpShortWide, faPlus, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function PageWebtoonList() {
  return (
    <div>
        <div className="p-6">
            <p className="text-xl font-bold">Webtoon Collections</p>
            <p className="text-gray-400 text-sm">Manage your users and their account permissions here</p>
        </div>
        <div className="p-6">
            <p className="font-medium text-xl">Total Webtoon <span className=" text-gray-400">(12)</span></p>
            <div className="flex justify-between mt-5 items-center">
                <div className="flex p-2 bg-gray-100 rounded-3xl text-sm text-gray-400 gap-2 items-center">
                    <p className="px-4 py-2 bg-white font-medium text-black rounded-3xl">All Webtoons</p>
                    <p className="px-4 py-2 font-medium rounded-3xl">Updated</p>
                    <p className="px-4 py-2 font-medium rounded-3xl">Deleted</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="px-3 py-1 border border-gray-400 rounded-2xl flex items-center gap-2">
                        <FontAwesomeIcon icon={faSearch} size="md" className="text-gray-400" />
                        <input className="focus:outline-none" type="text" placeholder="Search" />
                    </div>
                    <div className="px-4 py-2 bg-blue-500 flex items-center gap-2 rounded-2xl">
                        <FontAwesomeIcon icon={faPlus} size="md" className="text-white" />
                        <p className="text-white text-sm font-medium">New Webtoon</p>
                    </div>
                    <FontAwesomeIcon icon={faArrowDownWideShort} size="sm" className="p-2 border-1 border-gray-200 rounded-2xl" />
                    <FontAwesomeIcon icon={faArrowUpShortWide} size="sm" className="p-2 border-1 border-gray-200 rounded-2xl" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PageWebtoonList
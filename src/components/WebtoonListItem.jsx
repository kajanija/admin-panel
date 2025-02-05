import { faEllipsisVertical, faEye, faHeart, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function WebtoonListItem() {
  return (
    <div className="p-6 grid grid-cols-4">
        <div>
            <img src="https://placehold.co/600x400/EEE/31343C" className="w-full h-40 object-cover rounded-md" />
            <div className="text-xs font-medium px-3 py-1 flex items-center justify-between">
                <p>Fantasy - Romance</p>
                <FontAwesomeIcon icon={faEllipsisVertical} size="lg" className="text-gray-400" />
            </div>
            <p className="px-3 py-0.5 text-lg font-bold">His Majesty&#39;s Proposal</p>
            <p className="px-3 py-0.5 text-sm text-gray-400">Kkubeol, Beolkku</p>
            <div className="px-3 py-1 flex items-center justify-between">
                <div className="flex gap-1 items-center">
                    <FontAwesomeIcon icon={faEye} size="xs" className="text-blue-500" />
                    <p className="text-xs font-medium text-blue-500">66.8 M</p>
                </div>
                <div className="flex gap-1 items-center">
                    <FontAwesomeIcon icon={faHeart} size="xs" className="text-blue-500" />
                    <p className="text-xs font-medium text-blue-500">33.6 K</p>
                </div>
                <div className="flex gap-1 items-center">
                    <FontAwesomeIcon icon={faUser} size="xs" className="text-blue-500" />
                    <p className="text-xs font-medium text-blue-500">18.2 K</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WebtoonListItem
export default function HorizontalDots() {
    return (
        <div className="flex gap-2 mt-5 absolute z-10 -top-14 right-0">
            <div className="w-2 h-2 rounded-full bg-blue-900"></div>
            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
        </div>
    )
}
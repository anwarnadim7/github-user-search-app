export default function Footer(prop) {
    return (
        <div className="flex justify-between text-white items-center pt-5">
            <h3 className={`${prop.dark ? "text-gray" : "text-navy-blue"} font-bold text-sm text-center`}>Project - {new Date().getFullYear()}</h3>
        </div>
    )
}


interface AsideBarProps {
    path: string
    alt: string
    id?: string
}

export function AsideBarIcon({path, alt, id} : AsideBarProps) {
    return (
        <img id={id} src={path} alt={alt} className="w-[24px] h-[24px]"/>
    )
}
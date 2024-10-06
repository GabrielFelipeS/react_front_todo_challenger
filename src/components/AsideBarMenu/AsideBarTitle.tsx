interface AsideBarProps {
    title: string
}

export function AsideBarTitle({title}: AsideBarProps) {
    return (
        <div
            className="col-span-2 md:col-span-3
            max-sm:hidden text-ligth-primary dark:text-dark-primary">
            {title}
        </div>
    );
}
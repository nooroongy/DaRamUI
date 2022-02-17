import LayoutList from "../layout/LayoutList";

const ListLayoutPage = ()=>{
    const lists = [
        {
            title: 'preview', contents: (<>
            preview
            </>)
        }, {
            title: 'properties', contents: (<>
                properties
            </>)
        }, {
            title: 'api', contents: (<>
                api
            </>)
        }, {
            title: 'event', contents: (<>
                event
            </>)
        },
    ]

    return (
        <LayoutList
            lists={lists}
        />
    )
}

export default ListLayoutPage;
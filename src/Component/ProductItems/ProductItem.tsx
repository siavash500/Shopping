
export default function ProductItem() {
    return (
        <div className="shadow border rounded pb-5">
            <img
                className="rounded-t"

                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18l3WpAVbJkrC0TCxkV-jK0Z0is0Ke-Qt9Q&s" alt="" />
            <div className="flex justify-between flex-row-reverse px-4 mt-2">
                <h3>عنوان محصول</h3>
                <span>555</span>
            </div>
            <div className="px-4 mt-2">
                <p className="line-clamp-2 text-right">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque in vero totam amet ab, eligendi reiciendis ullam, corporis quibusdam voluptates illum facilis, esse officiis labore culpa explicabo debitis obcaecati tenetur?
                </p>
            </div>
        </div>
      
    )
}

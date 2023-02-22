import { a } from '../items';

export default function Body({ add, cart,remove }) {

    return (<section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {a.map(i =>
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src={i.img} alt="..." />

                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">{i.name}</h5>
                                    {i.price}
                                </div>
                                {i.sp}
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                {!cart.includes(i.id) ? (

                                    <div className="text-center"  onClick={() => add(i.id)} ><a className="btn btn-outline-dark mt-auto" href="#">{i.option}</a></div>
                                ) : <p  onClick={() => remove(i.id)} >In Cart</p>}
                            </div>
                        </div>
                    </div>)}

            </div>
        </div>
    </section>)

}

import ServiceCard from "./serviceCard/serviceCard.component";
import "./services.styles.scss";

const Services =() =>{
    return(
        <>
        <section id="services" className="services section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Services</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>


                    <div className="row-service">
                        <ServiceCard 
                            icon = "fa fa-gear"
                            title = "Lorem Ipsum"
                            text = "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi" />

                        <ServiceCard 
                            icon="fa fa-file" 
                            title="Sed ut perspici" 
                            text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"/> 

                        <ServiceCard 
                            icon = "fa fa-globe"
                            title="Magni Dolores" 
                            text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia" /> 

                        <ServiceCard 
                            icon="fa fa-user"
                            title="Nemo Enim" 
                            text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"/>

                    </div>
                </div>
            </section>
        </>
    )

}
export default Services;
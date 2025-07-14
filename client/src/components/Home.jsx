import Banner from './Banner'
import Services from './Services'
import Whychooseus from './Whychooseus'
import Projects from './Projects'
import Blogs from './Blogs'
import ContactForm from './ContactForm'
export default function Home(){
     return <div className="Home">
            <Banner />
            <Services />
            <Whychooseus />
            <Projects />
            <Blogs  />
            <ContactForm />
     </div>
}
import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'

const About = () => {
    return (
        <section className='bg-white py-20' id='about'>
            <div className='align-element grid md:grid-cols-2 items-center gap-16'>
                <img src={aboutSvg} className='w-full h-64' />
                <article>
                    <SectionTitle text='About' />
                    <h2 className='my-4 capitalize text-x1 tracking-wide font-medium'>The Start</h2>
                    <p className='text-slate-600 mt-4 leading-loose'>
                    My tech journey began unassumingly with a personal win of bringing our the family Windows 98 PC to life and then writing custom scripts for computer games. 
                    These weren&apos;t just hobbies; they were the sparks that fueled a deeper passion for technology and engineering. 
                    </p>
                    <h3 className='my-4 capitalize text-x1 tracking-wide font-medium'>On the Grind</h3>
                    <p className='text-slate-600 mt-4 leading-loose'>College presented its set of challenges. Math, initially a tough nut to crack, became a subject I thrived in, thanks to an inspiring college professor. 
                    This transformation paved the way for a BS in Statistics. Without a typical computer science foundation, my ambitions gravitated towards software engineering—a path 
                    that gained clarity and conviction through experiences at a startup and insightful tech meetups, especially sessions with mentor Quincy Larson.</p>
                    <h3 className='my-4 capitalize text-x1 tracking-wide font-medium'>This Changes Everything!</h3>
                    <p className='text-slate-600 mt-4 leading-loose'>
                    A memorable feat in my journey was reimagining a drawn-out payroll process at work, reducing what used to be hours of manual labor into just a few efficient minutes. 
                    This instance highlighted my knack for blending foundational knowledge with innovative approaches.
                    </p>
                    <h3 className='my-4 capitalize text-x1 tracking-wide font-medium'>I&apos;m Ready!</h3>
                    <p>With a strong math background and a trail of adaptive solutions in my wake, 
                    I'm geared to bring a unique skill set to any tech endeavor. 
                    Through it all, my journey has been underscored by continuous learning, resilience, 
                    and a determination to leverage every challenge as a stepping stone to the next achievement.
                    </p>
                </article>
            </div>
        </section>
    )
}

export default About;
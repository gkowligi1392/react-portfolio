import ImageAboutMe from '../../assets/images/about-me.svg';

const About = () => {
    return (
      <section>
        <div className='page-body'>
          <img src={ImageAboutMe} alt='about me' className='img-body' />
          <h1>Who am I?</h1>
          <p>
          Hi, I'm Gokul, an entry-level full-stack web developer with a passion for cooking, cars, and
          video games. I learned everything I know about web development from the Berkeley Coding Boot Camp,
          and I am looking forward to putting this knowledge to good use in my career. I have previous
          experience coding in C++ and C#, and I hope to learn other coding languages to expand my knowledge
          and potential job opportunities. Before going through the Berkeley Coding Boot Camp, I had a
          background in Mechanical Engineering, so I also have some experience with CAD and 3D printing.
          Some of the projects I have worked on include: a National Parks Search, a Secret Santa App, and
          a book search engine.
          </p>
        </div>
      </section>
    );
  };
  
  export default About;
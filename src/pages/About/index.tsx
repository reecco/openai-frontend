import './styles.scss';

function About() {
  const theme = localStorage.getItem('theme');

  document.title = 'About';

  return (
    <div className='container-about' id={theme === 'dark' ? 'container--dark' : 'container--light'}>
      <h1>About</h1>
      <div className='about-text'>
        <p 
          id={theme === 'dark' ? 'text--dark' : 'text--light'}
        >
          Project built using the <a
            id={theme === 'dark' ? 'text--dark' : 'text--light'} 
            href="https://openai.com/blog/openai-api/"
          >OpenAI API
          </a>.
        </p>
      </div>
    </div>
  );
}

export default About;
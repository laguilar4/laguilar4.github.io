document.getElementById('toggle').addEventListener('change', function() {
    const languageButtonText = document.getElementById('language');
    const positionText = document.getElementById('spanPosition');
    const contactText = document.getElementById('hContact');
    const educationText = document.getElementById('hEducation');
    const languageText = document.getElementById('hLanguages');
    const profileText = document.getElementById('hProfile');
    const skillsText = document.getElementById('hSkills');
    const expText = document.getElementById('hExperience');
    const interestsText = document.getElementById('hInterests');
    const ulEducation = document.getElementById('ulEducation');
    const ulInterests = document.getElementById('ulInterests');
    const ulLanguages = document.getElementById('ulLanguages');
    const cvButton = document.getElementById('contactDiv');
    const titleCv = document.getElementById('titleCv');
    const expDesYear = document.getElementById('expDesYear');
    const expDesCont = document.getElementById('expDesCont');
    const expPractYear = document.getElementById('expPractYear');
    const expPractCont = document.getElementById('expPractCont');
    const contactDiv = document.getElementById('contactDiv');
    if (this.checked) {
        contactDiv.innerHTML = 
        `<a href="Cv.pdf" id="CV" download="LuisAguilar">
            <button type="button" class="cvButton">
                DOWNLOAD HERE MY CV
            </button>
        </a>`;
        titleCv.textContent = 'Mi Hoja de Vida'; 
        languageButtonText.textContent = 'ES'; 
        positionText.innerHTML = 'Desarrollador Web<br>FULL STACK';
        contactText.textContent = 'Informacion de Contacto';
        educationText.textContent = 'Educacion';
        languageText.textContent = 'Idiomas';
        profileText.textContent = 'Perfil';
        skillsText.textContent = 'Habilidades';
        expText.textContent = 'Experiencia';
        interestsText.textContent = 'Intereses';
        expFullCont .innerHTML = `
        <h4>Ingeniero Asistente de Desarrollo de Software</h4>
        <p>
            Diseñé y desarrollé módulos de aplicaciones web externos de la empresa utilizando Angular en el front-end y Node.js con Express en el back-end, implementando arquitecturas escalables y eficientes.Formaba parte de reuniones de SCRUM enfocadas en la definición y análisis de requerimientos.
            Implementé mecanismos de autenticación y autorización utilizando JSON Web Tokens (JWT) y AUTH0, asegurando que solo los usuarios autorizados accedieran a ciertas funcionalidades de la aplicación y mejorando la seguridad del sistema.
            Configuré tareas programadas en MongoDB utilizando Mongoose y la biblioteca cron.
            Utilicé Git para gestionar el control de versiones en proyectos de desarrollo, facilitando la colaboración en equipo y la integración continua. Realicé commits, branches y merges para mantener un historial claro de cambios en el código.
            Con este sistema de control de versiones subi cambios a los repositorios de Gitlab y realice despliegues automáticos en entornos de contenedores utilizando Docker. Esto garantizó que las últimas actualizaciones del código se reflejaran de manera rápida y eficiente en los entornos de desarrollo y producción.
        </p>
        `;
        expFullYear.innerHTML = `
        <h5>1 de Octubre 2024 <br>-<br>Actualmente</h5>
            <br>
        <h5>Feanware</h5>`;

        expDesCont .innerHTML = `
        <h4>Ingeniero Asistente de Desarrollo de Software</h4>
        <p>
            Diseñé y desarrollé módulos de aplicaciones web externos de la empresa utilizando Angular en el front-end y Node.js con Express en el back-end, implementando arquitecturas escalables y eficientes.Formaba parte de reuniones de SCRUM enfocadas en la definición y análisis de requerimientos.
            Implementé mecanismos de autenticación y autorización utilizando JSON Web Tokens (JWT) y AUTH0, asegurando que solo los usuarios autorizados accedieran a ciertas funcionalidades de la aplicación y mejorando la seguridad del sistema.
            Configuré tareas programadas en MongoDB utilizando Mongoose y la biblioteca cron.
            Utilicé Git para gestionar el control de versiones en proyectos de desarrollo, facilitando la colaboración en equipo y la integración continua. Realicé commits, branches y merges para mantener un historial claro de cambios en el código.
            Con este sistema de control de versiones subi cambios a los repositorios de Gitlab y realice despliegues automáticos en entornos de contenedores utilizando Docker. Esto garantizó que las últimas actualizaciones del código se reflejaran de manera rápida y eficiente en los entornos de desarrollo y producción.
        </p>
        `;
        expDesYear.innerHTML = `
        <h5>1 de Febrero 2022 <br>-<br>19 de Septiembre 2024</h5>
            <br>
        <h5>Baterias Willard</h5>`;
        expPractYear.innerHTML = `
        <h5>21 de Julio 2021 <br>-<br>21 de Enero 2022</h5>
            <br>
        <h5>Baterias Willard</h5>`;
        expPractCont.innerHTML = `<h4>Ingeniero Practicante de Desarrollo de Software</h4>
        <p>
            Durante mis prácticas, trabajé en el desarrollo de varios módulos internos de la intranet de la empresa utilizando JAVASCRIPT, PHP, JQUERY y DB2, lo que me permitió ganar experiencia práctica en el desarrollo de soluciones web integradas con bases de datos.
            Esta experiencia me permitió adquirir una comprensión profunda de cómo trabajar con bases de datos relacionales como DB2 y cómo integrar de manera eficiente tecnologías de servidor y cliente para desarrollar aplicaciones robustas y escalables. 
            Además, me ayudó a mejorar mis habilidades en la optimización del rendimiento de las consultas y en el diseño de interfaces intuitivas.
        </p>`;
        cvButton.innerHTML = `
        <a href="MiHojadeVida.pdf" download="LuisAguilar">
            <button type="button" class="cvButton">
                DESCARGUE AQUI MI HOJA DE VIDA
            </button>
        </a>`;
        ulLanguages.innerHTML = `
        <li>
            <h5>Español:</h5>
            <h4>Nativo</h4>
        </li>
        <li>
            <h5>Ingles:</h5>
            <h4>Intermedio</h4>
        </li>`;
        ulInterests.innerHTML = ` 
            <li><i class="fa fa-laptop" aria-hidden="true"></i> Programacion Web</li>             
            <li><i class="fa fa-server" aria-hidden="true"></i> Base de Datos</li>
        `;
        ulEducation.innerHTML = 
        `<li>
            <h5>2021 - 2021</h5>
            <h4>Diplomado de Gestion de Proyectos</h4>
            <h4>Universidad de la Costa CUC</h4>
        </li>
        <li>
            <h5>2017 - 2022</h5>
            <h4>Ingenieria de Sistemas</h4>
            <h4>Universidad de la Costa CUC</h4>
        </li>`;
        pContent.innerHTML = 
        `Soy una persona proactiva, autodidacta y comprometida con el aprendizaje continuo. 
        A lo largo de mi trayectoria profesional, he desarrollado habilidades técnicas y blandas a través de experiencias tanto formales como independientes. 
        Me especializo en el desarrollo web tanto frontend como backend, y he complementado mis conocimientos con proyectos personales y el uso de recursos en línea. 
        Mi enfoque se centra en la resolución de problemas, la adaptabilidad a nuevos desafíos y la colaboración eficiente en equipos multidisciplinarios. 
        Busco contribuir al éxito de una organización con mi capacidad para adquirir nuevas habilidades rápidamente y aplicar soluciones innovadoras.<br><br></br>`;
    } else {
        contactDiv.innerHTML = 
        `<a href="MiHojadeVida.pdf" id="CV" download="LuisAguilar">
            <button type="button" class="cvButton">
                DOWNLOAD HERE MY CV
            </button>
        </a>`;
        titleCv.textContent = 'My Curriculum Vitae'; 
        languageButtonText.textContent = 'EN'; 
        positionText.innerHTML = 'Web Developer<br>FULL STACK';
        contactText.textContent = 'Contact';
        educationText.textContent = 'Education';
        languageText.textContent = 'Languages';
        profileText.textContent = 'Profile';
        skillsText.textContent = 'Skills';
        expText.textContent = 'Work Experience';
        interestsText.textContent = 'Interests';

        expFullCont .innerHTML = `
        <h4>Ingeniero Asistente de Desarrollo de Software</h4>
        <p>
            Diseñé y desarrollé módulos de aplicaciones web externos de la empresa utilizando Angular en el front-end y Node.js con Express en el back-end, implementando arquitecturas escalables y eficientes.Formaba parte de reuniones de SCRUM enfocadas en la definición y análisis de requerimientos.
            Implementé mecanismos de autenticación y autorización utilizando JSON Web Tokens (JWT) y AUTH0, asegurando que solo los usuarios autorizados accedieran a ciertas funcionalidades de la aplicación y mejorando la seguridad del sistema.
            Configuré tareas programadas en MongoDB utilizando Mongoose y la biblioteca cron.
            Utilicé Git para gestionar el control de versiones en proyectos de desarrollo, facilitando la colaboración en equipo y la integración continua. Realicé commits, branches y merges para mantener un historial claro de cambios en el código.
            Con este sistema de control de versiones subi cambios a los repositorios de Gitlab y realice despliegues automáticos en entornos de contenedores utilizando Docker. Esto garantizó que las últimas actualizaciones del código se reflejaran de manera rápida y eficiente en los entornos de desarrollo y producción.
        </p>
        `;
        expFullYear.innerHTML = `
        <h5>October 1 2024 <br>-<br>Currently</h5>
            <br>
        <h5>Feanware</h5>`;
        expDesCont .innerHTML = `
        <h4>Full Stack Mobile Developer</h4>
            <p>
                I was involved in designing, developing, and deploying apps that were successfully published on both the Google Play Store and Apple App Store. 
                Throughout this process, I participated in all stages of the development lifecycle, including RESTful API integration, user authentication, database management, push notifications, and payment gateway implementation.
            </p>
        `;
        expDesYear.innerHTML = `
        <h5>February 1 2022 <br>-<br>September 19 2024</h5>
            <br>
        <h5>Baterias Willard</h5>`;
        expPractYear.innerHTML = `
        <h5>July 21 2021 <br>-<br>January 21 2022</h5>
            <br>
        <h5>Baterias Willard</h5>`;
        expPractCont.innerHTML = `<h4>Practicing Software Development Engineer</h4>
        <p>
            During my internship, I worked on the development of several internal modules for the company’s intranet using JavaScript, PHP, jQuery and DB2, which allowed me to gain practical experience in developing web solutions integrated with databases.
            This experience enabled me to gain a deep understanding of how to work with relational databases like DB2 and how to efficiently integrate server and client technologies to develop robust and scalable applications. Additionally, it helped me improve my skills in query performance optimization and in designing intuitive interfaces.
        </p>`;
        cvButton.innerHTML = `
        <a href="MiHojadeVida.pdf" download="LuisAguilar">
            <button type="button" class="cvButton">
                DOWNLOAD HERE MY CV
            </button>
        </a>`;
        ulLanguages.innerHTML = `
        <li>
            <h5>Spanish:</h5>
            <h4>Native</h4>
        </li>
        <li>
            <h5>English:</h5>
            <h4>Intermediate</h4>
        </li>`;
        ulInterests.innerHTML = ` 
            <li><i class="fa fa-laptop" aria-hidden="true"></i>Web Developing</li>             
            <li><i class="fa fa-server" aria-hidden="true"></i>Database</li>
        `;
        ulEducation.innerHTML = 
        `<li>
            <h5>2021 - 2021</h5>
            <h4>Project Management Diploma</h4>
            <h4>Universidad de la Costa CUC</h4>
        </li>
        <li>
            <h5>2017 - 2022</h5>
            <h4>Systems Engineering</h4>
            <h4>Universidad de la Costa CUC</h4>
        </li>`;
        pContent.innerHTML = 
        `I am a proactive, self-taught person committed to continuous learning. Throughout my professional career, I have developed both technical and soft skills through formal and independent experiences. 
        I specialize in both frontend and backend web development, and I have supplemented my knowledge with personal projects and the use of online resources. 
        My focus is on problem-solving, adaptability to new challenges, and efficient collaboration in multidisciplinary teams. 
        I seek to contribute to the success of an organization with my ability to quickly acquire new skills and apply innovative solutions.<br><br></br>`;
    }
});
function Text_block({title, desc, func=null, authors=null, academic_title=null, date=null, academy=null, fileLink=null, lang='en'}) {
   const hasFunctionalities = func !== null;
   const hasAuthors = authors !== null;
   const hasAcademic_title = academic_title !== null;
   const hasDate = date !== null;
   const hasAcademy = academy !== null;
   const hasFileLink = fileLink !== null;
   const inEnglish = lang === 'en';

  return(
    <>
      <article>
        <h1>{title}</h1>
        <p>{desc}</p>
        { hasFunctionalities && hasAuthors ? 
          <section>
            { inEnglish ? <h2>Functionalities:</h2> : <h2>Functionalidades:</h2>}
            <ul>
              { func?.map((functionality, index) => <li key={`${title}_functionalitie_${index}`}>{functionality}</li>)}
            </ul>
            { inEnglish ? <p>Develop by: </p> : <p>Desarrollado por: </p>}
            { authors?.map((author, index) => <p key={`${title}_${author}_${index}`}>{author}</p>)}
          </section>
          : null
        }
        { hasAcademic_title && hasDate && hasAcademy && hasFileLink ?
          <section>
            <article>
              <h2>{academic_title} | {date}</h2>
              <p>{academy}</p>
            </article>
            <a href={fileLink} target='_blank'><button onClick={fileLink}>See link</button></a>
          </section>
          : null
        }
      </article>
    </>
  )
}

export default Text_block;
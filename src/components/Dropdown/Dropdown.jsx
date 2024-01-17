import { lang_en } from '../../utils'

function Dropdown({lang}) {
  return(
    <label htmlFor='lang'>
      { lang_en(lang) 
        ? <img src='https://cdn-icons-png.flaticon.com/128/323/323310.png' alt={lang}/> 
        : <img src='https://cdn-icons-png.flaticon.com/128/10601/10601048.png' alt={lang}/> 
      }
      <select name='lang' id='lang'>
        <option value='en'>English</option>
        <option value='es'>Español</option>
      </select>
    </label>
  )
}

export default Dropdown;
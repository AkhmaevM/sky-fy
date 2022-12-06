/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */


export function DropDownList(props) {
    return(
      <div className='filter__list'>
            <ul className="filter__list--nav">
                <li className="filter__list--item"><a>{props.item[0]}</a></li>
                <li className="filter__list--item"><a>{props.item[1]}</a></li>
                <li className="filter__list--item"><a>{props.item[2]}</a></li>
                <li className="filter__list--item"><a>{props.item[3]}</a></li>
                <li className="filter__list--item"><a>{props.item[4]}</a></li>
            </ul>
       </div>
    )
  }

export  function DropwDownYear(){
    return(
        <div className="filter__year">
            <input type="radio" value="Более новые" className="filter__year--radio" name="year" id="radio-1"/><label htmlFor="radio-1" className="filter__year--value">Более новые</label>
            <input type="radio" value="Более старые" className="filter__year--radio" name="year" id="radio-2"/><label htmlFor="radio-2" className="filter__year--value">Более старые</label>
        </div>
    )
}
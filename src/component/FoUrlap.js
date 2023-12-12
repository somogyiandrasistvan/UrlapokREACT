import { adatLeiras } from "../Model/adatLeiro";

export default function FoUrlap(props) {
  const adat = {};
  function adatKuld(event) {
    event.preventDefault();
    console.log(adat);
    props.adatKap(adat);
  }
  function adatValt(event) {
    adat[event.target.id] = event.target.value;
    console.log(adat);
  }
  return (
    <form onSubmit={adatKuld}>
      {Object.keys(adatLeiras).map(key => {
        return (
          <div className="mb-3 mt-3">
            <label htmlFor={key} className="form-label">
              {adatLeiras[key].megjelenes}
            </label>
            <input
              type={adatLeiras[key].tipus}
              className="form-control"
              id={key + "id"}
              placeholder={adatLeiras[key].placeholder}
              name={key}
              onChange={adatValt}
            />
          </div>
        );
      })}
      <input type="submit" className="btn btn-primary" value="Submit" />
    </form>
  );
}

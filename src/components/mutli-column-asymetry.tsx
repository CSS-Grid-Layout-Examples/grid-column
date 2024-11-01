/* app imports */
import getJBIcons from "@common/data/get-jb-icons";

/* component */
function MultiColumnAsymetry(): JSX.Element {
  const IMG_ROOT = import.meta.env.VITE_IMG_SRC;
  const brandsData = getJBIcons().splice(0, 5);
  return (
    <>
      <div className="container multiColumnAsymetry">
        <ul className="list-unstyled">
          {
            brandsData.map((obj, index) => {
              return (
                <li key={index} className="brandItem text-center positionRelative">
                  <div className="image positionRelative">
                    <img src={`${IMG_ROOT}${obj.src}`}
                    className="img-fluid" alt={obj.alt} title={obj.title}/>
                  </div>
                    <span>{obj.title}</span>
                </li>
              );
            })
          }
        </ul>
        <p className="info text-center">
          An asymetrical layout where <b>Item 1</b> and <b>Item 5</b> span 3 columns.
          <b>Item 2</b> and <b>Item 4</b> occupy the 1st and 2nd column.
          <b>Item 3</b> start from column number 2 to column number 4.
        </p>
      </div>
    </>
  );
}

/* exports */
export default MultiColumnAsymetry;

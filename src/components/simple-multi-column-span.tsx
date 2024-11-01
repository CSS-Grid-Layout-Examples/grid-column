/* app imports */
import getJBIcons from "@common/data/get-jb-icons";

/* component */
function SimpleMultiColumnSpan(): JSX.Element {
  const IMG_ROOT = import.meta.env.VITE_IMG_SRC;
  const brandsData = getJBIcons().splice(0, 9);
  return (
    <>
      <div className="container simpleMultiColumnSpan">
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
          A layout that has been set with a 5-Column Grid each of all equal widths at 1fr.
          The second list item alone has been given <b>grid-column: span 2</b> for extending 2 columns
        </p>
      </div>
    </>
  );
}

/* exports */
export default SimpleMultiColumnSpan;

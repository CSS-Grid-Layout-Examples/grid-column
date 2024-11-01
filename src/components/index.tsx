/* app imports */
import "./css/style.scss";
import SimpleMultiColumnSpan from "./simple-multi-column-span";
import MultiColumnGridStartEnd from "./multi-column-with-grid-column-start-end";
import MultiColumnWithGap from "./multi-column-with-gap";
import MultiColumnAsymetry from "./mutli-column-asymetry";

/* component */
function AppOutlet(): JSX.Element {
  return (
    <>
      <SimpleMultiColumnSpan />
      <MultiColumnGridStartEnd />
      <MultiColumnWithGap />
      <MultiColumnAsymetry />
    </>
  );
}

/* exports */
export default AppOutlet;

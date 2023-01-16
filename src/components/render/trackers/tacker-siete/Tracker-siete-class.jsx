import WorldMap from "https://cdn.skypack.dev/react-world-map@2.3.0";
import './mapa.css';

function Mapa() {
  const [selected, onSelect] = React.useState('na');
  return (
    <>
      <h2>example of controlled component</h2>
      <span>starting value: north america</span>
      <WorldMap selected={ selected } onSelect={ onSelect } />
      <h2>example of uncontrolled component</h2>
      <WorldMap />
      <h2>example of uncontrolled component with multiple selection</h2>
      <WorldMap multiple={ true } />
    </>
  );
}
export default Mapa
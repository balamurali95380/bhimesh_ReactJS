// 35. Windowing Large Lists with react-window
// react-window optimizes rendering large lists by showing only visible items.
import { FixedSizeList } from 'react-window';

const items = Array(1000).fill(0).map((_, i) => `Item ${i}`);

function ListComponent() {
  return (
    <FixedSizeList height={200} width={300} itemSize={35} itemCount={items.length}>
      {({ index, style }) => <div style={style}>{items[index]}</div>}
    </FixedSizeList>
  );
}

export default ListComponent;
// This ensures large lists render efficiently by showing only items currently visible
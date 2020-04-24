import { styled } from 'solid-styled-components';

// Uses solid-styled-components, build errors out due to `data-` attributes
import Count from './components/count';
// Uses solid-styled-components but no `data-` attributes, builds fine
// import Count from './components/count-no-data';
// No solid-styled-components, builds fine with `data-` attributes
// import Count from './components/count-unstyled';

export default () => (
  <Container>
    <Count initialCount={0} />
  </Container>
);

const Container = styled('div')`
  min-height: 100%;
  padding: 1em;
  color: #222;
  font-family: system-ui, sans-serif;
  background-color: #fefefe;
`;

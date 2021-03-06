import styled from 'styled-components';
import PropTypes from 'prop-types';

const Form = styled.form`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : 'column')};
  flex-wrap: ${props => (props.wrap ? props.wrap : 'nowrap')};
  justify-content: ${props => (props.justify ? props.justify : 'flex-start')};
  align-items: ${props => (props.align ? props.align : 'stretch')};
  align-content: ${props => (props.content ? props.content : 'stretch')};
  height: ${props => (props.height ? props.height : 'auto')};
  width: ${props => (props.width ? props.width : 'auto')};
  background: ${props => (props.background ? props.background : 'none')};
`;

export default Form;

Form.propTypes = {
  // CUSTOM PROPTYPES
  direction: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),

  justify: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ]),

  align: PropTypes.oneOf([
    'stretch',
    'flex-start',
    'flex-end',
    'center',
    'baseline',
  ]),

  content: PropTypes.oneOf([
    'stretch',
    'flex-start',
    'flex-end',
    'center',
    'baseline',
  ]),

  wrap: PropTypes.oneOf([
    'nowrap',
    'wrap',
    'wrap-reverse',
    'initial',
    'inherit',
  ]),

  height: PropTypes.string,
  weight: PropTypes.string,
  background: PropTypes.string,
};

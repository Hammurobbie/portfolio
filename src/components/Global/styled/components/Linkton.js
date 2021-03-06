import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../theme';
import PropTypes from 'prop-types';

const Linkton = styled(Link)`
  color: ${theme.gs1};
  background: ${theme.gs8};
  border: ${props => (props.border ? props.border : 'none')};
  border-radius: ${props => (props.radius ? props.radius : '0.3rem 1rem')};
  padding: ${props => (props.padding ? props.padding : '0.5rem 1rem')};
  width: ${props => (props.width ? props.width : 'auto')};
  height: ${props => (props.height ? props.height : 'auto')};
  &:hover {
    color: ${theme.gs8};
    background: ${theme.gs1};
  }
`;

export default Linkton;

Linkton.propTypes = {
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

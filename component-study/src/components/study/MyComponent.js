import PropTypes from 'prop-types';


const MyComponent = (props) => {
    const {name, children} = props;
    return (
        <div>{children}, 제 이름은 {name} 입니다. </div>
    );
}

MyComponent.defaultProps = {
    name : 'props전달안됨'
}

// name 자료형은 문자로만 받겠다
MyComponent.propTypes = {
    name : PropTypes.string
}


export default MyComponent;
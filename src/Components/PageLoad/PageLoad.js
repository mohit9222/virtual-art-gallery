import React, {Component} from "react";
import './PageLoad.css'

class PageLoad extends Component {
    componentDidMount() {
        const { history } = this.props;
        setTimeout(() => {
          history.push('/home')
        }, 5000);
      }
      componentWillUnmount() {
        clearTimeout(this.redirectTimeout);
      }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="bar">
                        <div className="circle"></div>
                        <p>Chitra Santhe 2022</p>
                    </div>
                </div>
            </div>
            
        );
    }
}
export default PageLoad;
import React, { Component } from 'react';

class content extends Component {
    render() {
        return (
            <div>
                <div>
                    <i className="fa fa-car" />
                    <i className="fa fa-car" style={{ fontSize: 48 }} />
                    <i className="fa fa-car" style={{ fontSize: 60, color: 'red' }} />
                </div>
                <div className="card" style={{ width: '18rem' }}>
                    <img className="card-img-top" src="/src/images/flower.jpg" alt="Card" />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="alert alert-primary" role="alert">
                    <h1>HELLO WEBPACK</h1>
                </div>
            </div>
        );
    }
}

export default content;
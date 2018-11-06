import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { compose } from "redux";
// import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";

class AddClient extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        balance: ""
    };

    onSubmit = e => {
        e.preventDefault();

        const newClient = this.state;

        const { firestore, history } = this.props;

        if (newClient.balance === "") {
            newClient.balance = 0;
        }

        firestore
            .add({ collection: "clients" }, newClient)
            .then(() => history.push("/"));
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/" className="btn btn-link">
                            <i className="fas fa-arrow-circle-left" /> Voltar
                            para Dashboard
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">Adicionar Cliente</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="firstName">Primeiro Nome</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="firstName"
                                    minLength="2"
                                    required
                                    onChange={this.onChange}
                                    value={this.state.firstName}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Último Nome</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="lastName"
                                    minLength="2"
                                    required
                                    onChange={this.onChange}
                                    value={this.state.lastName}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    onChange={this.onChange}
                                    value={this.state.email}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Telefone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="phone"
                                    required
                                    minLength="10"
                                    onChange={this.onChange}
                                    value={this.state.phone}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="balance">Dívida</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="balance"
                                    onChange={this.onChange}
                                    value={this.state.balance}
                                />
                            </div>

                            <input
                                type="submit"
                                value="Adicionar"
                                className="btn btn-primary btn-block"
                            />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

AddClient.propTypes = {
    firestore: PropTypes.object.isRequired
};

export default firestoreConnect()(AddClient);

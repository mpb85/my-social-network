import React from 'react';
import {connect} from "react-redux";
import User from "./User";
import {
    followUserAC,
    setCurrentPagerAC,
    setTotalUserCountAC,
    setUserAC, toggleIsFetchingAC,
    unFollowUserAC
} from "../../Redux/usersReducer";
import * as axios from "axios";
import Prealoder from "../common/Prealoder/Prealoder";

class UserContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUser(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount);
debugger

            });
    }

    getNewUsers = (p) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUser(response.data.items);
            });
    }

    render() {
        return <>
            {this.props.isFetching === true ? <Prealoder/> : null}
            <div>
                <User totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      follow={this.props.follow}
                      unFollow={this.props.unFollow}
                      getNewUsers={this.getNewUsers}
                />
            </div>
        </>
    };
}

let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {

        follow: (userId) => {
            dispatch(followUserAC(userId));
        },
        unFollow: (userId) => {
            dispatch(unFollowUserAC(userId));
        },
        setUser: (users) => {
            dispatch(setUserAC(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPagerAC(currentPage));
        },
        setTotalUserCount: (count) => {
            dispatch(setTotalUserCountAC(count))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);

